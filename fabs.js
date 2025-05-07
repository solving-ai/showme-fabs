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
      icon: `<svg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M13.7446 1.57031L1.57178 13.7431M1.57178 1.57031L13.7446 13.7431' stroke='white' stroke-width='2.0288' stroke-linecap='round' stroke-linejoin='round'/>
      </svg>`,
      x: -70.71,
      y: -70.71
    },
    {
      id: "mic",
      title: "Mic",
      icon: `<svg width='23' height='23' viewBox='0 0 23 23' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M14.8779 9.01828V4.55492C14.8779 2.87421 13.5154 1.51172 11.8347 1.51172C10.6401 1.51172 9.60628 2.20001 9.10817 3.20164M11.8347 18.7565V21.7997M11.8347 18.7565C7.91301 18.7565 4.73387 15.5774 4.73387 11.6557V9.62692M11.8347 18.7565C15.7563 18.7565 18.9355 15.5774 18.9355 11.6557V9.62692M7.77707 21.7997H15.8923M1.69067 1.51172L21.9787 21.7997M11.8347 14.6989C10.154 14.6989 8.79147 13.3364 8.79147 11.6557V8.61252L13.9878 13.8063C13.437 14.3578 12.6757 14.6989 11.8347 14.6989Z' stroke='white' stroke-width='2.0288' stroke-linecap='round' stroke-linejoin='round'/>
      </svg>`,
      x: 70.71,
      y: -70.71
    },
    {
      id: "pencil",
      title: "Draw",
      icon: `<svg width='21' height='20' viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M10.6581 18.7741H19.7877M1.52856 18.7741H3.22722C3.72345 18.7741 3.97156 18.7741 4.20505 18.7181C4.41206 18.6684 4.60996 18.5864 4.79148 18.4751C4.99622 18.3497 5.17166 18.1742 5.52254 17.8234L18.2662 5.07972C19.1065 4.23936 19.1065 2.87687 18.2662 2.03652C17.4258 1.19616 16.0633 1.19616 15.223 2.03652L2.47932 14.7802C2.12844 15.131 1.95299 15.3065 1.82753 15.5112C1.71629 15.6927 1.63432 15.8906 1.58462 16.0977C1.52856 16.3311 1.52856 16.5793 1.52856 17.0755V18.7741Z' stroke='white' stroke-width='2.0288' stroke-linecap='round' stroke-linejoin='round'/>
      </svg>`,
      x: 100,
      y: 0
    },
    {
      id: "expand",
      title: "Expand",
      icon: `<svg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M14.7158 19.7865H14.9186C16.623 19.7865 17.4752 19.7865 18.1261 19.4548C18.6988 19.1631 19.1643 18.6975 19.4561 18.1249C19.7878 17.4739 19.7878 16.6218 19.7878 14.9174V6.39646C19.7878 4.69211 19.7878 3.83993 19.4561 3.18896C19.1643 2.61634 18.6988 2.15079 18.1261 1.85903C17.4752 1.52734 16.623 1.52734 14.9186 1.52734H6.39768C4.69333 1.52734 3.84116 1.52734 3.19018 1.85903C2.61757 2.15079 2.15201 2.61634 1.86025 3.18896C1.52856 3.83993 1.52856 4.69211 1.52856 6.39646V6.59934M10.151 11.1641L15.7302 5.58494M15.7302 5.58494H10.6582M15.7302 5.58494V10.6569M4.77464 19.7865H7.41208C8.54832 19.7865 9.11643 19.7865 9.55042 19.5654C9.93216 19.3709 10.2425 19.0605 10.437 18.6788C10.6582 18.2448 10.6582 17.6767 10.6582 16.5405V13.903C10.6582 12.7668 10.6582 12.1987 10.437 11.7647C10.2425 11.3829 9.93216 11.0726 9.55042 10.8781C9.11643 10.6569 8.54832 10.6569 7.41208 10.6569H4.77464C3.63841 10.6569 3.07029 10.6569 2.63631 10.8781C2.25456 11.0726 1.9442 11.3829 1.74969 11.7647C1.52856 12.1987 1.52856 12.7668 1.52856 13.903V16.5405C1.52856 17.6767 1.52856 18.2448 1.74969 18.6788C1.9442 19.0605 2.25456 19.3709 2.63631 19.5654C3.07029 19.7865 3.63841 19.7865 4.77464 19.7865Z' stroke='white' stroke-width='2.0288' stroke-linecap='round' stroke-linejoin='round'/>
      </svg>`,
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

  // Inject styles
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

