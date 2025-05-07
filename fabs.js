(function () {
  // Avoid duplicate injection
  if (window.__showmePluginLoaded) return;
  window.__showmePluginLoaded = true;

  // Create a style tag
  const style = document.createElement("style");
  style.textContent = `
    .showme-floating-container {
      position: fixed;
      bottom: 20px;
      left: 20px;
      width: 300px;
      height: 300px;
      pointer-events: none;
      z-index: 9999;
    }

    .showme-main-button {
      position: absolute;
      bottom: 0;
      left: 0;
      transform: translate(0%, 0%);
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
      pointer-events: auto;
    }

    .showme-main-button:hover {
      transform: scale(1.05);
    }

    .showme-main-icon {
      width: 64px;
      height: 64px;
      background-image: url('data:image/svg+xml;utf8,<svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 10h2v4H4v-4zm7 0h2v4h-2v-4zm7 0h2v4h-2v-4z"/></svg>');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 60%;
    }

    .showme-satellite-button {
      position: absolute;
      width: 34px;
      height: 34px;
      border: 5.6px solid #9E77ED;
      border-radius: 50%;
      background-color: #6941C6;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      box-shadow: 0 0 5px rgba(0,0,0,0.2);
      transition: transform 0.2s ease-in-out;
      pointer-events: auto;
    }

    .showme-satellite-button:hover {
      transform: scale(1.1);
      background-color: #9E77ED;
    }

    .showme-satellite-icon {
      width: 20px;
      height: 20px;
    }

    .showme-btn-close   { top: 20px;  left: 30px; }
    .showme-btn-mic     { top: 45px;  left: 80px; }
    .showme-btn-pencil  { top: 95px;  left: 90px; }
    .showme-btn-expand  { top: 150px; left: 70px; }
  `;
  document.head.appendChild(style);

  // Create the container
  const container = document.createElement("div");
  container.className = "showme-floating-container";

  // === Helper to create satellite buttons ===
  const createSatelliteButton = (className, svgIcon) => {
    const btn = document.createElement("div");
    btn.className = `showme-satellite-button ${className}`;
    const icon = document.createElement("div");
    icon.className = "showme-satellite-icon";
    icon.innerHTML = svgIcon;
    btn.appendChild(icon);
    return btn;
  };

  // === SVG icons (minified) ===
  const icons = {
    close: `<svg viewBox="0 0 24 24" fill="white"><path d="M18.3 5.71L12 12l6.3 6.29-1.42 1.42L12 14.83l-6.29 6.3-1.42-1.42L10.59 12 4.29 5.71 5.71 4.29 12 10.59l6.29-6.3z"/></svg>`,
    mic: `<svg viewBox="0 0 24 24" fill="white"><path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 14 0h-2z"/></svg>`,
    pencil: `<svg viewBox="0 0 24 24" fill="white"><path d="M3 17.25V21h3.75l11.06-11.06-3.75-3.75L3 17.25zm2.92.92L14.06 10l1.06 1.06L6.98 19.23H5.92v-1.06z"/></svg>`,
    expand: `<svg viewBox="0 0 24 24" fill="white"><path d="M4 4h6V2H2v8h2V4zm16 0v6h2V2h-8v2h6zM4 20v-6H2v8h8v-2H4zm16-6v6h-6v2h8v-8h-2z"/></svg>`,
  };

  // === Create buttons ===
  const btnClose = createSatelliteButton("showme-btn-close", icons.close);
  const btnMic = createSatelliteButton("showme-btn-mic", icons.mic);
  const btnPencil = createSatelliteButton("showme-btn-pencil", icons.pencil);
  const btnExpand = createSatelliteButton("showme-btn-expand", icons.expand);

  // === Create main button ===
  const mainBtn = document.createElement("div");
  mainBtn.className = "showme-main-button";
  const iconDiv = document.createElement("div");
  iconDiv.className = "showme-main-icon";
  mainBtn.appendChild(iconDiv);

  // === Append buttons ===
  container.appendChild(btnClose);
  container.appendChild(btnMic);
  container.appendChild(btnPencil);
  container.appendChild(btnExpand);
  container.appendChild(mainBtn);
  document.body.appendChild(container);

  // === Add sample handlers ===
  btnClose.onclick = () => alert("Close ShowMe");
  btnMic.onclick = () => alert("Mic toggled");
  btnPencil.onclick = () => alert("Drawing mode toggled");
  btnExpand.onclick = () => alert("Expanded");
  mainBtn.onclick = () => alert("Flush audio or activate");

})();


