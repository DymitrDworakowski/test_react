import React, { useState, useEffect } from "react";
// У fabric v7 експортуються іменовані класи; імпортуємо Image як FabricImage
import { Image as FabricImage } from "fabric";

function CanvasImage({ canvas }) {
  // Стани для управління ввідними значеннями та результатом завантаження
  // `imageURL` - текстове поле для вставки зовнішнього URL
  const [imageURL, setImageURL] = useState("");
  // `uploadedImage` - dataURL останнього завантаженого локального файлу (необов'язково)
  const [uploadedImage, setUploadedImage] = useState("");

  // `selectedImage` - посилання на поточний вибраний об'єкт типу image на Fabric canvas.
  // Використовується, щоб давати можливість змінювати розміри того зображення в реальному часі.
  const [selectedImage, setSelectedImage] = useState(null);

  // `imgWidth`/`imgHeight` - числові значення (рядки у стані, щоб зручно працювати з input)
  // Вони показують поточні видимі пікселі (width = originalWidth * scaleX).
  const [imgWidth, setImgWidth] = useState("");
  const [imgHeight, setImgHeight] = useState("");

  // `keepAspect` - чи зберігати пропорцію при зміні однієї зі сторін
  const [keepAspect, setKeepAspect] = useState(true);

  // Підписка на події canvas
  // Ми слухаємо події вибору для того, щоб коли користувач клікне на зображення
  // (створене будь-де в додатку), панель керування розмірами автоматично показувала
  // значення для цього зображення.
  useEffect(() => {
    if (!canvas) return;

    const onSelection = (e) => {
      const obj = e?.selected && e.selected[0];
      // Якщо вибраний об'єкт є зображенням, зберігаємо його в стан і підставляємо
      // поточні відображувані розміри у поля (ширина = width * scaleX)
      if (obj && obj.type === "image") {
        setSelectedImage(obj);
        setImgWidth(String(Math.round(obj.width * (obj.scaleX || 1))));
        setImgHeight(String(Math.round(obj.height * (obj.scaleY || 1))));
      }
    };
    const onCleared = () => {
      // Скидаємо панель якщо вибір очищено
      setSelectedImage(null);
      setImgWidth("");
      setImgHeight("");
    };

    canvas.on("selection:created", onSelection);
    canvas.on("selection:updated", onSelection);
    canvas.on("selection:cleared", onCleared);

    return () => {
      if (!canvas) return;
      canvas.off("selection:created", onSelection);
      canvas.off("selection:updated", onSelection);
      canvas.off("selection:cleared", onCleared);
    };
  }, [canvas]);

  const handleImgUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.onload = (event) => {
        const imgURL = event.target.result;
        setUploadedImage(imgURL);
        console.log("handleImgUpload: imgURL length:", imgURL?.length, "canvas:", !!canvas);
        if (canvas) {
          // Надійніше: створюємо HTMLImage, чекаємо onload і створюємо FabricImage
          // Це працює для dataURL локального файлу і дозволяє відловити помилки завантаження
          const imgEl = new window.Image();
          imgEl.onload = () => {
            try {
              const fImg = new FabricImage(imgEl, {
                left: 100,
                top: 100,
              });
              canvas.add(fImg);
              canvas.renderAll();
              console.log("Image added to canvas via HTMLImage (data URL)", fImg);
              // Після додавання відображуване значення розмірів заповнюється у полях
              setSelectedImage(fImg);
              setImgWidth(String(Math.round(fImg.width * (fImg.scaleX || 1))));
              setImgHeight(String(Math.round(fImg.height * (fImg.scaleY || 1))));
            } catch (err) {
              console.error("Error creating FabricImage from element (data URL)", err);
            }
          };
          imgEl.onerror = (err) => {
            // Якщо HTMLImage не завантажився (дуже рідко для dataURL) — пробуємо fromURL
            console.error("HTMLImage failed to load data URL", err);
            FabricImage.fromURL(imgURL, (img) => {
              img.set({ left: 100, top: 100 });
              canvas.add(img);
              canvas.renderAll();
              console.log("Image added to canvas via FabricImage.fromURL fallback (data URL)");
            });
          };
          imgEl.src = imgURL;
        } else {
          console.warn("Canvas is not available when uploading image");
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={imageURL}
        onChange={(e) => setImageURL(e.target.value)}
        placeholder="Enter image URL"
      />
      <button
        onClick={() => {
          if (canvas && imageURL) {
            console.log("Adding image from URL:", imageURL, "canvas:", !!canvas);
            // Завантаження по URL: використовуємо FabricImage.fromURL
            // Додаємо опцію crossOrigin для уникнення проблем з CORS
            // Краще створити HTMLImage з crossOrigin і конвертувати його в FabricImage
            // Викликаємо глобальний конструктор HTMLImage, уникаючи конфлікту з іменем компонента
            const imgEl = new window.Image();
            // Встановлюємо crossOrigin для зовнішніх ресурсів
            imgEl.crossOrigin = "anonymous";
            // Для зовнішніх URL робимо аналогічне: створюємо HTMLImage з crossOrigin
            imgEl.onload = () => {
              try {
                const fImg = new FabricImage(imgEl, { left: 100, top: 100 });
                canvas.add(fImg);
                canvas.renderAll();
                console.log("Image added to canvas via HTMLImage (URL)", fImg);
                // Заповнюємо панель розмірів для щойно доданого зображення
                setSelectedImage(fImg);
                setImgWidth(String(Math.round(fImg.width * (fImg.scaleX || 1))));
                setImgHeight(String(Math.round(fImg.height * (fImg.scaleY || 1))));
              } catch (err) {
                console.error("Error creating FabricImage from element (URL)", err);
              }
            };
            imgEl.onerror = (err) => {
              // Якщо HTMLImage не завантажився (найчастіша причина — CORS або недоступний ресурс)
              console.error("HTMLImage failed to load URL", imageURL, err);
              // Фолбек: спробуємо FabricImage.fromURL (але це теж може упертися в CORS)
              FabricImage.fromURL(
                imageURL,
                (img) => {
                  img.set({ left: 100, top: 100 });
                  canvas.add(img);
                  canvas.renderAll();
                  console.log("Image added to canvas via FabricImage.fromURL fallback (URL)");
                  setSelectedImage(img);
                  setImgWidth(String(Math.round(img.width * (img.scaleX || 1))));
                  setImgHeight(String(Math.round(img.height * (img.scaleY || 1))));
                },
                { crossOrigin: "anonymous" }
              );
            };
            imgEl.src = imageURL;
          } else if (!canvas) {
            console.warn("Canvas is not ready when clicking Add Image");
          }
        }}
      >
        Add Image
      </button>
      <input type="file" accept="image/*" onChange={handleImgUpload} />
      {/* Панель для зміни розміру вибраного зображення в реальному часі */}
      {selectedImage && (
        <div style={{ marginTop: 12 }}>
          <h4>Resize Selected Image</h4>
          <label style={{ display: "block", marginBottom: 6 }}>
            Width (px)
            <input
              type="text"
              value={imgWidth}
              onChange={(e) => {
                const raw = e.target.value.replace(/\D/g, "");
                const numeric = parseInt(raw, 10);
                setImgWidth(raw);
                if (selectedImage && !isNaN(numeric)) {
                  const newScaleX = numeric / (selectedImage.width || 1);
                  if (keepAspect) {
                    selectedImage.set({ scaleX: newScaleX, scaleY: newScaleX });
                    setImgHeight(String(Math.round(selectedImage.height * newScaleX)));
                  } else {
                    selectedImage.set({ scaleX: newScaleX });
                  }
                  selectedImage.setCoords();
                  canvas.requestRenderAll();
                }
              }}
            />
          </label>
          <label style={{ display: "block", marginBottom: 6 }}>
            Height (px)
            <input
              type="text"
              value={imgHeight}
              onChange={(e) => {
                const raw = e.target.value.replace(/\D/g, "");
                const numeric = parseInt(raw, 10);
                setImgHeight(raw);
                if (selectedImage && !isNaN(numeric)) {
                  const newScaleY = numeric / (selectedImage.height || 1);
                  if (keepAspect) {
                    selectedImage.set({ scaleX: newScaleY, scaleY: newScaleY });
                    setImgWidth(String(Math.round(selectedImage.width * newScaleY)));
                  } else {
                    selectedImage.set({ scaleY: newScaleY });
                  }
                  selectedImage.setCoords();
                  canvas.requestRenderAll();
                }
              }}
            />
          </label>
          <label style={{ display: "block", marginBottom: 6 }}>
            <input
              type="checkbox"
              checked={keepAspect}
              onChange={(e) => setKeepAspect(e.target.checked)}
            />
            Keep aspect ratio
          </label>
          <div>
            <button
              onClick={() => {
                // Зняти виділення і очистити панель
                canvas.discardActiveObject();
                canvas.requestRenderAll();
                setSelectedImage(null);
                setImgWidth("");
                setImgHeight("");
              }}
            >
              Deselect
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CanvasImage;
