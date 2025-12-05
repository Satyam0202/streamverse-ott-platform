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
    <img src="no_internet.png" alt="No Internet" style="
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      animation: pulse 2s infinite;
    ">
    <div style="
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.6);
      padding: 40px;
      border-radius: 20px;
      backdrop-filter: blur(10px);
    ">
      <h2 style="color: white; font-size: 32px; margin-bottom: 15px; text-align: center;">No Internet Connection</h2>
      <p style="color: #aaa; font-size: 18px; text-align: center; max-width: 500px; margin-bottom: 30px;">
        Please check your internet connection and try again.
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
      ">
        Retry Connection
      </button>
    </div>
  `;
  
  document.body.appendChild(networkOverlay);
  
  const style = document.createElement('style');
  style.textContent = `
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.7; transform: scale(0.95); }
    }
    #networkOverlay button:hover {
      transform: scale(1.05);
      box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
    }
    @media (max-width: 768px) {
      #networkOverlay h2 {
        font-size: 24px !important;
      }
      #networkOverlay p {
        font-size: 16px !important;
        padding: 0 20px;
      }
      #networkOverlay > div {
        padding: 30px 20px !important;
        width: 90%;
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
      #networkOverlay > div {
        padding: 20px 15px !important;
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
