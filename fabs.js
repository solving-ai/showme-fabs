(() => {
  // Inject styles for the floating button and satellite buttons
  const css = `
    .floating-container {
      position: fixed;
      bottom: 40px;
      right: 40px;
      width: 300px;
      height: 300px;
      z-index: 999999;
    }

    .main-button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80.3px;
      height: 80.3px;
      background-color: #6941C6;
      border-radius: 50%;
      border: 8.3px solid #9E77ED;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      box-shadow: 0 0 10px rgba(0,0,0,0.2);
      transition: transform 0.2s ease-in-out;
    }

    .main-button:hover {
      transform: translate(-50%, -50%) scale(1.05);
    }

    .main-button-icon {
      width: 64px;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }

    #visualizer-container {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      gap: 5px;
      height: 100%;
      width: 100%;
    }

    #visualizer-container .bar {
      background-color: white;
      width: 8.3px;
      height: 13%;
      border-radius: 3px;
      transition: height 0.08s linear;
    }

    .satellite-button {
      position: absolute;
      width: 34px;
      height: 34px;
      border: 5.6px solid #9E77ED;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      box-shadow: 0 0 5px rgba(0,0,0,0.2);
      transition: transform 0.2s ease-in-out;
      z-index: 2;
      background-color: #6941C6;
    }

    .satellite-button:hover {
      transform: scale(1.1);
      z-index: 3;
      background-color: #9E77ED;
    }

    .tooltip {
      z-index: 999999 !important;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      font-size: 10px;
      background: #fff;
      color: #000;
      padding: 2px 5px;
      border-radius: 3px;
      white-space: nowrap;
    }

    .voice-circle {
      position: absolute;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background-color: #FDA29B;
      opacity: 1;
      transform: scale(1);
      transition: transform 0.1s ease-out;
      z-index: 1;
      top: 25%;
      right: 18%;
    }
  `;

  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  // Create container
  const container = document.createElement("div");
  container.className = "floating-container";

  // Main button
  const mainButton = document.createElement("div");
  mainButton.className = "main-button";
  mainButton.id = "flushAudio";
  const iconContainer = document.createElement("div");
  iconContainer.className = "main-button-icon";
  const visualizer = document.createElement("div");
  visualizer.id = "visualizer-container";
  for (let i = 0; i < 4; i++) {
    const bar = document.createElement("div");
    bar.className = "bar";
    visualizer.appendChild(bar);
  }
  iconContainer.appendChild(visualizer);
  mainButton.appendChild(iconContainer);
  container.appendChild(mainButton);

  // Voice reactive circle
  const voiceCircle = document.createElement("div");
  voiceCircle.className = "voice-circle";
  voiceCircle.id = "voice-circle";
  container.appendChild(voiceCircle);

  // Satellite buttons
  const buttons = [
    { id: "mic-button", top: "25%", right: "18%", tooltip: "Mic" },
    { id: "drawingModeBtn", top: "43%", right: "18%", tooltip: "Draw" },
    { id: "close-button", top: "25%", left: "18%", tooltip: "Close" },
    { id: "expandBtn", bottom: "25%", right: "18%", tooltip: "Expand" }
  ];

  buttons.forEach(btn => {
    const div = document.createElement("div");
    div.className = "satellite-button";
    div.id = btn.id;
    Object.keys(btn).forEach(key => {
      if (key !== "id" && key !== "tooltip") {
        div.style[key] = btn[key];
      }
    });
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.textContent = btn.tooltip;
    div.appendChild(tooltip);
    container.appendChild(div);
  });

  document.body.appendChild(container);

  // Basic events for console testing
  document.getElementById("flushAudio").addEventListener("click", () => {
    console.log("Flush audio clicked");
  });

  document.getElementById("close-button").addEventListener("click", () => {
    console.log("Close clicked");
  });

  document.getElementById("mic-button").addEventListener("click", () => {
    console.log("Mic toggle clicked");
  });

  document.getElementById("drawingModeBtn").addEventListener("click", () => {
    console.log("Draw mode clicked");
  });

  document.getElementById("expandBtn").addEventListener("click", () => {
    console.log("Expand clicked");
  });
})();

