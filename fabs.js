// showme-plugin.js
(function () {
  // Create main container
  const container = document.createElement("div");
  container.className = "showme-floating-container";
  document.body.appendChild(container);

  // Create main FAB
  const mainButton = document.createElement("div");
  mainButton.className = "showme-main-button";
  mainButton.innerHTML = `
    <div class="showme-main-button-icon">
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" stroke="white" stroke-width="8"/>
        <rect x="30" y="35" width="6" height="30" rx="3" fill="white"/>
        <rect x="45" y="25" width="6" height="50" rx="3" fill="white"/>
        <rect x="60" y="35" width="6" height="30" rx="3" fill="white"/>
      </svg>
    </div>`;
  container.appendChild(mainButton);

  // Buttons data
  const buttons = [
    {
      id: "close",
      title: "Close",
      icon: `<svg width='15' height='15' viewBox='0 0 15 15'><path d='M13.7 1.6L1.6 13.7M1.6 1.6L13.7 13.7' stroke='white' stroke-width='2' stroke-linecap='round'/></svg>`,
      x: -70.71,
      y: -70.71
    },
    {
      id: "mic",
      title: "Mic",
      icon: `<svg width='17' height='23' viewBox='0 0 17 23'><path d='M15.9 9.6V11.7C15.9 15.6 12.8 18.8 8.8 18.8M1.7 9.6V11.7C1.7 15.6 4.9 18.8 8.8 18.8M8.8 18.8V21.8M4.8 21.8H12.9M8.8 14.7C7.2 14.7 5.8 13.3 5.8 11.7V4.6C5.8 2.9 7.2 1.5 8.8 1.5C10.5 1.5 11.9 2.9 11.9 4.6V11.7C11.9 13.3 10.5 14.7 8.8 14.7Z' stroke='white' stroke-width='2' stroke-linecap='round'/></svg>`,
      x: 70.71,
      y: -70.71
    },
    {
      id: "pencil",
      title: "Draw",
      icon: `<svg width='21' height='21' viewBox='0 0 21 20'><path d='M10.7 18.8H19.8M1.5 18.8H3.2C3.7 18.8 4.0 18.8 4.2 18.7C4.4 18.7 4.6 18.6 4.8 18.5C5.0 18.4 5.2 18.2 5.5 17.8L18.3 5.1C19.1 4.2 19.1 2.9 18.3 2.0C17.4 1.2 16.1 1.2 15.2 2.0L2.5 14.8C2.1 15.1 2.0 15.3 1.8 15.5C1.7 15.7 1.6 15.9 1.6 16.1C1.5 16.3 1.5 16.6 1.5 17.1V18.8Z' stroke='white' stroke-width='2' stroke-linecap='round'/></svg>`,
      x: 100,
      y: 0
    },
    {
      id: "expand",
      title: "Expand",
      icon: `<svg width='21' height='21' viewBox='0 0 21 21'><path d='M14.7 19.8H14.9C16.6 19.8 17.5 19.8 18.1 19.5C18.7 19.2 19.2 18.7 19.5 18.1C19.8 17.5 19.8 16.6 19.8 14.9V6.4C19.8 4.7 19.8 3.8 19.5 3.2C19.2 2.6 18.7 2.2 18.1 1.9C17.5 1.5 16.6 1.5 14.9 1.5H6.4C4.7 1.5 3.8 1.5 3.2 1.9C2.6 2.2 2.2 2.6 1.9 3.2C1.5 3.8 1.5 4.7 1.5 6.4M10.2 11.2L15.7 5.6M15.7 5.6H10.7M15.7 5.6V10.7' stroke='white' stroke-width='2' stroke-linecap='round'/></svg>`,
      x: 70.71,
      y: 70.71
    }
  ];

  // Create satellite buttons
  buttons.forEach(btn => {
    const el = document.createElement("div");
    el.className = `showme-satellite-button showme-${btn.id}`;
    el.title = btn.title;
    el.innerHTML = `<div class='showme-satellite-icon'>${btn.icon}</div>`;
    el.style.left = `calc(50% + ${btn.x}px)`;
    el.style.top = `calc(50% + ${btn.y}px)`;
    container.appendChild(el);
  });

  // Styles
  const style = document.createElement("style");
  style.textContent = `
    .showme-floating-container {
      position: fixed;
      bottom: 50px;
      left: 50px;
      width: 300px;
      height: 300px;
      pointer-events: none;
      z-index: 9999;
    }
    .showme-main-button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 90px;
      height: 90px;
      background-color: #6941C6;
      border: 6px solid #9E77ED;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      pointer-events: auto;
    }
    .showme-main-button-icon {
      width: 64px;
      height: 64px;
      color: white;
    }
    .showme-satellite-button {
      position: absolute;
      width: 40px;
      height: 40px;
      background-color: #6941C6;
      border: 4px solid #9E77ED;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
      transition: transform 0.2s;
      pointer-events: auto;
    }
    .showme-satellite-button:hover {
      transform: scale(1.1);
      background-color: #9E77ED;
    }
    .showme-satellite-icon {
      width: 20px;
      height: 20px;
      color: white;
    }
    .showme-satellite-icon svg {
      width: 100%;
      height: 100%;
    }
  `;
  document.head.appendChild(style);
})();

