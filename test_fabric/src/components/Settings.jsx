// Імпорти React-хуків, які використовуються в компоненті
import { useState, useEffect } from "react";

// Компонент налаштувань для вибраного об'єкта на canvas
export default function Settings({ canvas }) {
  // Вибраний об'єкт (fabric object або null)
  const [selectedObject, setSelectedObject] = useState(null);
  // Поля для відображення/редагування: тримаємо як рядки, зручні для input
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [diameter, setDiameter] = useState("");
  const [color, setColor] = useState("");

  // Підписка на події canvas: коли змінюється вибір або об'єкт модифікується
  useEffect(() => {
    if (!canvas) return;

    const onSelectionCreated = (e) =>
      handleObjectSelected(e?.selected && e.selected[0]);
    const onSelectionUpdated = (e) =>
      handleObjectSelected(e?.selected && e.selected[0]);
    const onSelectionCleared = () => {
      setSelectedObject(null);
      clearSettings();
    };
    const onObjectModified = (e) => handleObjectSelected(e?.target);
    const onObjectScaling = (e) => handleObjectSelected(e?.target);

    canvas.on("selection:created", onSelectionCreated);
    canvas.on("selection:updated", onSelectionUpdated);
    canvas.on("selection:cleared", onSelectionCleared);
    canvas.on("object:modified", onObjectModified);
    canvas.on("object:scaling", onObjectScaling);

    return () => {
      if (!canvas) return;
      canvas.off("selection:created", onSelectionCreated);
      canvas.off("selection:updated", onSelectionUpdated);
      canvas.off("selection:cleared", onSelectionCleared);
      canvas.off("object:modified", onObjectModified);
      canvas.off("object:scaling", onObjectScaling);
    };
  }, [canvas]);

  const handleObjectSelected = (obj) => {
    if (!obj) return;
    setSelectedObject(obj);

    if (obj.type === "rect") {
      setWidth(String(obj.width * (obj.scaleX || 1)));
      setHeight(String(obj.height * (obj.scaleY || 1)));
      setColor(obj.fill || "");
      setDiameter("");
    } else if (obj.type === "circle") {
      setDiameter(String(obj.radius * 2 * (obj.scaleX || 1)));
      setColor(obj.fill || "");
      setWidth("");
      setHeight("");
    }
  };

  const clearSettings = () => {
    setWidth("");
    setHeight("");
    setDiameter("");
    setColor("");
  };

  const handleWidthChange = (e) => {
    const raw = e.target.value.replace(/\D/g, ""); // Видаляємо всі нецифрові символи
    const numericValue = parseInt(raw, 10);

    setWidth(raw);

    if (
      selectedObject &&
      selectedObject.type === "rect" &&
      !isNaN(numericValue)
    ) {
      selectedObject.set({
        width: numericValue / (selectedObject.scaleX || 1),
      });
      canvas.renderAll();
    }
  };

  const handleHeightChange = (e) => {
    const raw = e.target.value.replace(/\D/g, "");
    const numericValue = parseInt(raw, 10);
    setHeight(raw);
    if (
      selectedObject &&
      selectedObject.type === "rect" &&
      !isNaN(numericValue)
    ) {
      selectedObject.set({
        height: numericValue / (selectedObject.scaleY || 1),
      });
      canvas.renderAll();
    }
  };

  const handleColorChange = (e) => {
    const value = e.target.value;
    setColor(value);
    if (selectedObject) {
      selectedObject.set({ fill: value });
      canvas.renderAll();
    }
  };

  const handleDiameterChange = (e) => {
    const raw = e.target.value.replace(/\D/g, "");
    const numericValue = parseInt(raw, 10);
    setDiameter(raw);
    if (
      selectedObject &&
      selectedObject.type === "circle" &&
      !isNaN(numericValue)
    ) {
      selectedObject.set({
        radius: numericValue / 2 / (selectedObject.scaleX || 1),
      });
      canvas.renderAll();
    }
  };

  return (
    <div>
      <h2>Settings Component</h2>
      {selectedObject && selectedObject.type === "rect" && (
        <div>
          <h3>Rectangle Settings</h3>
          <label>
            Width
            <input
              aria-label="Width"
              type="text"
              value={width}
              onChange={handleWidthChange}
            />
          </label>
          <label>
            Height
            <input
              aria-label="Height"
              type="text"
              value={height}
              onChange={handleHeightChange}
            />
          </label>
          <label>
            Color
            <input
              aria-label="Color"
              type="text"
              value={color}
              onChange={handleColorChange}
            />
          </label>
        </div>
      )}
      {selectedObject && selectedObject.type === "circle" && (
        <div>
          <h3>Circle Settings</h3>
          <label>
            Diameter
            <input
              aria-label="Diameter"
              type="text"
              value={diameter}
              onChange={handleDiameterChange}
            />
          </label>
          <label>
            Color
            <input
              aria-label="Color"
              type="text"
              value={color}
              onChange={handleColorChange}
            />
          </label>
        </div>
      )}
    </div>
  );
}
