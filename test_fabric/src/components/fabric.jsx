import React, { useRef, useState, useEffect } from "react";
import { Canvas, Rect, Circle } from "fabric";
import Settings from "./Settings";
import CanvasImage from "./CanvasImage";

function Fabric() {
  const fabricRef = useRef(null);
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    if (fabricRef.current) {
      const initCanvas = new Canvas(fabricRef.current, {
        height: 400,
        width: 600,
      });
      initCanvas.backgroundColor = "lightgray";
      initCanvas.renderAll();

      setCanvas(initCanvas);

      return () => {
        initCanvas.dispose();
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
        left: 200,
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
      <canvas
        ref={fabricRef}
        id="fabric-canvas"
        style={{ border: "1px solid #000" }}
      ></canvas>
    </div>
  );
}

export default Fabric;
