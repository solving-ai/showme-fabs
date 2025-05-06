(function () {
  // Avoid multiple loads
  if (window.ShowMePluginLoaded) return;
  window.ShowMePluginLoaded = true;

  // Load Poppins font from Google Fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'stylesheet';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap';
  document.head.appendChild(fontLink);

  // Inject basic floating button styles
  const style = document.createElement('style');
  style.innerHTML = `
    .floating-container {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 300px;
      height: 300px;
      z-index: 999999; /* Ensure it's on top */
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
      color: white;
      width: 64px;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
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
      height: 13%; /* Default height */
      border-radius: 3px;
      transition: height 0.08s linear;
    }
  `;
  document.head.appendChild(style);

  // Create the main container and floating button with visualizer bars
  const container = document.createElement('div');
  container.className = 'floating-container';
  container.innerHTML = `
    <div class="main-button" id="flushAudio">
      <div class="main-button-icon">
        <div id="visualizer-container">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(container);

  // Fake animation for visualizer bars (for visual feedback only)
  const bars = container.querySelectorAll('.bar');
  setInterval(() => {
    bars.forEach(bar => {
      const randomHeight = 10 + Math.random() * 80;
      bar.style.height = `${randomHeight}%`;
    });
  }, 300);

  console.log("ShowMe FAB basic plugin loaded.");
})();
