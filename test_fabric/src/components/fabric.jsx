import React, { useRef, useState, useEffect } from "react";
import { Canvas, Rect, Circle } from "fabric";
import Settings from "./Settings";
import CanvasImage from "./CanvasImage";
import Kosz from "../img/kosz.jpg";
function Fabric() {
  const fabricRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current && fabricRef.current) {
      const initCanvas = new Canvas(fabricRef.current, {
        height: 200,
        width: 200,
      });

      // make canvas transparent so the wrapper div background (Kosz) shows
      initCanvas.backgroundColor = "transparent";
      initCanvas.renderAll();

      setCanvas(initCanvas);
      initialized.current = true;

      return () => {
        initCanvas.dispose();
        initialized.current = false;
      };
    }
  }, []);

  function addRectangle() {
    if (canvas) {
      const rect = new Rect({
        left: 50,
        top: 50,
        fill: "red",
        width: 100,
        height: 100,
      });
      canvas.add(rect);
      canvas.renderAll();
    }
  }

  function addCircle() {
    if (canvas) {
      const circle = new Circle({
        left: 100,
        top: 50,
        fill: "blue",
        radius: 50,
      });
      canvas.add(circle);
      canvas.renderAll();
    }
  }

  return (
    <div>
      <h1>Fabric Component</h1>
      <div>
        <button onClick={addRectangle}>Add Rectangle</button>
        <button onClick={addCircle}>Add Circle</button>
      </div>
      <div>
        <Settings canvas={canvas} />
        <CanvasImage canvas={canvas} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${Kosz})`,
            padding: "100px",
            backgroundSize: "cover",
          }}
        >
          <div>
            {" "}
            <canvas
              ref={fabricRef}
              id="fabric-canvas"
              style={{
                border: "1px solid black",
                marginTop: "10px",
                background: "transparent",
                width: "200px",
                height: "200px",
              }}
            ></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fabric;
