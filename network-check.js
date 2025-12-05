// Network connectivity checker
let isOnline = navigator.onLine;
let networkOverlay = null;

function createNetworkOverlay() {
  if(networkOverlay) return;
  
  networkOverlay = document.createElement('div');
  networkOverlay.id = 'networkOverlay';
  networkOverlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.95);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 99999;
    backdrop-filter: blur(10px);
  `;
  
  networkOverlay.innerHTML = `
    <div style="
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
      animation: gradientShift 3s ease infinite;
    "></div>
    <div style="
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    ">
      <div style="
        font-size: 120px;
        margin-bottom: 30px;
        animation: float 3s ease-in-out infinite;
      ">📡</div>
      <h2 style="color: white; font-size: 32px; margin-bottom: 15px; text-align: center; font-weight: 700;">No Internet Connection</h2>
      <p style="color: #aaa; font-size: 18px; text-align: center; max-width: 500px; margin-bottom: 30px; line-height: 1.6;">
        Oops! It seems you're offline. Please check your internet connection and try again.
      </p>
      <button onclick="checkConnection()" style="
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        padding: 15px 40px;
        border-radius: 30px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
        box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
      ">
        🔄 Retry Connection
      </button>
    </div>
  `;
  
  document.body.appendChild(networkOverlay);
  
  const style = document.createElement('style');
  style.textContent = `
    @keyframes gradientShift {
      0%, 100% { 
        background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
      }
      50% { 
        background: linear-gradient(135deg, #0f3460 0%, #16213e 50%, #1a1a2e 100%);
      }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    #networkOverlay button:hover {
      transform: scale(1.05);
      box-shadow: 0 15px 40px rgba(102, 126, 234, 0.5);
    }
    @media (max-width: 768px) {
      #networkOverlay h2 {
        font-size: 24px !important;
      }
      #networkOverlay p {
        font-size: 16px !important;
        padding: 0 20px;
      }
      #networkOverlay > div > div:first-child {
        font-size: 80px !important;
      }
      #networkOverlay button {
        padding: 12px 30px !important;
        font-size: 14px !important;
      }
    }
    @media (max-width: 480px) {
      #networkOverlay h2 {
        font-size: 20px !important;
      }
      #networkOverlay p {
        font-size: 14px !important;
      }
      #networkOverlay > div > div:first-child {
        font-size: 60px !important;
        margin-bottom: 20px !important;
      }
      #networkOverlay button {
        padding: 10px 25px !important;
        font-size: 13px !important;
      }
    }
  `;
  document.head.appendChild(style);
}

function removeNetworkOverlay() {
  if(networkOverlay) {
    networkOverlay.remove();
    networkOverlay = null;
  }
}

function showNoInternet() {
  createNetworkOverlay();
}

function hideNoInternet() {
  removeNetworkOverlay();
}

function checkConnection() {
  if(navigator.onLine) {
    fetch('https://www.google.com/favicon.ico', {
      mode: 'no-cors',
      cache: 'no-store'
    })
    .then(() => {
      isOnline = true;
      hideNoInternet();
      location.reload();
    })
    .catch(() => {
      isOnline = false;
      showNoInternet();
    });
  } else {
    isOnline = false;
    showNoInternet();
  }
}

function monitorConnection() {
  if(!navigator.onLine) {
    isOnline = false;
    showNoInternet();
  }
}

window.addEventListener('online', () => {
  isOnline = true;
  hideNoInternet();
  console.log('Connection restored');
});

window.addEventListener('offline', () => {
  isOnline = false;
  showNoInternet();
  console.log('Connection lost');
});

window.addEventListener('load', () => {
  monitorConnection();
  
  setInterval(() => {
    if(!navigator.onLine && !networkOverlay) {
      showNoInternet();
    }
  }, 3000);
});

if(typeof window !== 'undefined') {
  window.checkConnection = checkConnection;
  window.isOnline = () => isOnline;
}
