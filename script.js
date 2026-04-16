// Mr. Haipl - The Apple Oracle - Interactive JavaScript

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const button = document.getElementById('darkModeToggle');
    button.textContent = document.body.classList.contains('dark-mode') ? '☀️ LIGHT MODE' : '🌙 DARK MODE';
}

// Loading Screen
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loadingScreen').style.display = 'none';
    }, 2000);
});

// Clickable Terminal Commands
function executeCommand(command) {
    const sound = document.getElementById('typingSound');
    sound.classList.add('active');
    
    // Play typing sound
    setTimeout(() => {
        sound.classList.remove('active');
    }, 300);
    
    // Execute command logic
    console.log(`Executing: ${command}`);
    
    // Easter egg commands
    if (command.includes('sudo rm -rf /windows/*')) {
        showWindowsDeleted();
    } else if (command.includes('sudo apt-get install common-sense')) {
        showCommonSenseInstalled();
    }
}

function showWindowsDeleted() {
    const message = document.createElement('div');
    message.className = 'typing-sound active';
    message.textContent = 'Windows erfolgreich gelöscht! 🎉';
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--terminal-green);
        color: white;
        padding: 20px;
        border-radius: 8px;
        font-family: 'SF Mono', monospace;
        z-index: 10001;
        animation: fadeInOut 3s ease;
    `;
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 3000);
}

function showCommonSenseInstalled() {
    const message = document.createElement('div');
    message.className = 'typing-sound active';
    message.textContent = 'Common Sense erfolgreich installiert! 🧠';
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--terminal-green);
        color: white;
        padding: 20px;
        border-radius: 8px;
        font-family: 'SF Mono', monospace;
        z-index: 10001;
        animation: fadeInOut 3s ease;
    `;
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 3000);
}

// Glitch Effect
function activateGlitch() {
    const glitchText = document.querySelector('.glitch-text');
    glitchText.style.animation = 'none';
    
    setTimeout(() => {
        glitchText.style.animation = 'glitch-1 0.3s infinite, glitch-2 0.3s infinite';
    }, 100);
    
    setTimeout(() => {
        glitchText.style.animation = '';
    }, 5000);
}

// Konami Code Easter Egg
let konamiSequence = [];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    konamiSequence.push(e.key);
    
    // Check for Konami Code: ↑↑↓↓↓←← BA
    if (konamiSequence.length >= 10) {
        const lastTen = konamiSequence.slice(-10).join('');
        if (lastTen === 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowB'.toLowerCase()) {
            activateKonamiCode();
        }
        konamiSequence = [];
    }
});

function activateKonamiCode() {
    const konamiCode = document.getElementById('konamiCode');
    konamiCode.style.display = 'flex';
    
    // Add some fun effect
    document.body.style.animation = 'glitch 0.5s';
    
    setTimeout(() => {
        konamiCode.style.display = 'none';
        document.body.style.animation = '';
    }, 3000);
}

// Touch gestures removed - no swipe functionality

// Video player functions with music support
function playVideo() {
    const video = document.getElementById('paraglidingVideo');
    const overlay = document.querySelector('.video-overlay');
    
    if (video && overlay) {
        video.muted = false;
        video.play().catch(error => {
            console.log('Video play failed:', error);
            // Try autoplay with user interaction
            video.play();
        });
        overlay.classList.add('hidden');
        
        // Show typing sound effect
        const sound = document.getElementById('typingSound');
        sound.classList.add('active');
        sound.textContent = '🎬 VIDEO PLAYING...';
        
        setTimeout(() => {
            sound.classList.remove('active');
        }, 3000);
    }
}

// Add video event listeners
document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('paraglidingVideo');
    const overlay = document.querySelector('.video-overlay');
    
    if (video && overlay) {
        console.log('Video element found:', video);
        console.log('Video sources:', video.querySelectorAll('source'));
        
        // Force video load
        video.load();
        
        // Handle video loaded
        video.addEventListener('loadeddata', () => {
            console.log('Video data loaded');
            overlay.classList.add('hidden');
        });
        
        // Handle autoplay
        video.addEventListener('canplay', () => {
            console.log('Video can play');
            overlay.classList.add('hidden');
        });
        
        // Show overlay when video ends
        video.addEventListener('ended', () => {
            console.log('Video ended');
            overlay.classList.remove('hidden');
            video.currentTime = 0; // Reset to beginning
        });
        
        // Show overlay when video is paused
        video.addEventListener('pause', () => {
            console.log('Video paused');
            overlay.classList.remove('hidden');
        });
        
        // Hide overlay when video is playing
        video.addEventListener('play', () => {
            console.log('Video playing');
            overlay.classList.add('hidden');
        });
        
        // Click on video to play/pause
        video.addEventListener('click', () => {
            if (video.paused) {
                console.log('Video clicked - playing');
                playVideo();
            } else {
                console.log('Video clicked - pausing');
                video.pause();
                overlay.classList.remove('hidden');
            }
        });
        
        // Handle video errors
        video.addEventListener('error', (e) => {
            console.error('Video error:', e);
            console.error('Video error details:', video.error);
            overlay.innerHTML = '<div class="video-title">❌ Video konnte nicht geladen werden</div>';
        });
        
        // Handle video stalled
        video.addEventListener('stalled', () => {
            console.log('Video stalled - trying to reload');
            video.load();
        });
    } else {
        console.error('Video element not found!');
    }
});

// Music player function
function playMusic() {
    const sound = document.getElementById('typingSound');
    sound.classList.add('active');
    sound.textContent = '🎵 HAIPL\'S FLIGHT THEME PLAYING...';
    
    setTimeout(() => {
        sound.classList.remove('active');
    }, 3000);
}

// Update current date dynamically
function updateCurrentDate() {
    const now = new Date();
    const months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    
    const dateElement = document.getElementById('currentDate');
    if (dateElement) {
        dateElement.textContent = `${month} ${year}`;
    }
}

// Matrix loader functionality
function hideMatrixLoader() {
    const matrixLoader = document.getElementById('matrixLoader');
    if (matrixLoader) {
        matrixLoader.style.opacity = '0';
        setTimeout(() => {
            matrixLoader.style.display = 'none';
        }, 1000);
    }
}

// Update date on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCurrentDate();
    // Update every minute to keep it current
    setInterval(updateCurrentDate, 60000);
    
    // Hide Matrix loader after 3 seconds
    setTimeout(hideMatrixLoader, 3000);
});

// Add CSS animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInOut {
        0% { opacity: 1; }
        100% { opacity: 0; }
    }
`;
document.head.appendChild(style);
