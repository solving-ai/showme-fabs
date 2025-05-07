(function () {
  const container = document.createElement("div");
  container.className = "floating-container";
  container.innerHTML = `
    <style>
      .floating-container {
        position: fixed;
        bottom: 40px;
        right: 40px;
        width: 300px;
        height: 300px;
        overflow: visible;
        z-index: 99999;
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
        z-index: 1;
        transition: transform 0.2s ease-in-out;
      }

      .main-button:hover {
        transform: translate(-50%, -50%) scale(1.05);
      }

      .main-button-icon {
        width: 64px;
        height: 64px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
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
        background-color: #6941C6;
        box-shadow: 0 0 5px rgba(0,0,0,0.2);
        cursor: pointer;
        z-index: 2;
        transition: transform 0.2s ease-in-out;
      }

      .satellite-button:hover {
        transform: scale(1.1);
        background-color: #9E77ED;
      }

      .satellite-icon {
        width: 21px;
        height: 21px;
        display: flex;
        justify-content: center;
        align-items: center;
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

      #close-button {
        transform: rotate(-135deg) translate(110px) rotate(135deg);
      }
      #mic-button {
        transform: rotate(-45deg) translate(110px) rotate(45deg);
      }
      #drawing-button {
        transform: rotate(45deg) translate(110px) rotate(-45deg);
      }
      #expand-button {
        transform: rotate(135deg) translate(110px) rotate(-135deg);
      }
    </style>

    <div class="satellite-button" id="close-button">
      <div class="satellite-icon">❌</div>
    </div>
    <div class="voice-circle"></div>
    <div class="satellite-button" id="mic-button">
      <div class="satellite-icon">🎤</div>
    </div>
    <div class="satellite-button" id="drawing-button">
      <div class="satellite-icon">✏️</div>
    </div>
    <div class="satellite-button" id="expand-button">
      <div class="satellite-icon">⛶</div>
    </div>
    <div class="main-button" id="main-button">
      <div class="main-button-icon">🎧</div>
    </div>
  `;

  document.body.appendChild(container);
})();

