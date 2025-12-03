// IP Address Tracker
async function trackVisitor() {
    try {
        // Get IP address from API
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        const ipAddress = data.ip;
        
        // Get additional info
        const geoResponse = await fetch(`https://ipapi.co/${ipAddress}/json/`);
        const geoData = await geoResponse.json();
        
        // Visitor info
        const visitorInfo = {
            ip: ipAddress,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            language: navigator.language,
            screenResolution: `${screen.width}x${screen.height}`,
            city: geoData.city || 'Unknown',
            region: geoData.region || 'Unknown',
            country: geoData.country_name || 'Unknown',
            timezone: geoData.timezone || 'Unknown'
        };
        
        // Save to localStorage (client-side only)
        let visitors = JSON.parse(localStorage.getItem('visitors') || '[]');
        visitors.push(visitorInfo);
        localStorage.setItem('visitors', JSON.stringify(visitors));
        
        console.log('Visitor tracked:', visitorInfo);
        
        // Optional: Send to your backend/database
        // await sendToBackend(visitorInfo);
        
    } catch (error) {
        console.error('Tracking error:', error);
    }
}

// Function to send data to backend (if you have one)
async function sendToBackend(data) {
    try {
        await fetch('YOUR_BACKEND_URL/track', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    } catch (error) {
        console.error('Backend error:', error);
    }
}

// Get all tracked visitors
function getVisitors() {
    return JSON.parse(localStorage.getItem('visitors') || '[]');
}

// Clear visitor data
function clearVisitors() {
    localStorage.removeItem('visitors');
}

// Auto-track on page load
trackVisitor();
