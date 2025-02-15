:root {
    /* Dark theme default variables */
    --bg-primary: #1a1a1a;
    --bg-secondary: #2d2d2d;
    --text-primary: #ffffff;
    --text-secondary: #b3b3b3;
    --accent-color: #ff4d4d;
    --card-bg: #333333;
    --header-bg: #000000;
    --font-size-base: 16px;
}

[data-theme="light"] {
    --bg-primary: #ffffff;
    --bg-secondary: #f5f5f5;
    --text-primary: #333333;
    --text-secondary: #666666;
    --card-bg: #ffffff;
    --header-bg: #f8f8f8;
}

/* Core Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color 0.3s, color 0.3s;
}

body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    font-size: var(--font-size-base);
}

/* Settings Panel */
.settings-panel {
    position: fixed;
    right: -300px;
    top: 0;
    width: 300px;
    height: 100vh;
    background-color: var(--bg-secondary);
    padding: 20px;
    box-shadow: -2px 0 10px rgba(0,0,0,0.3);
    transition: right 0.3s ease;
    z-index: 1000;
}

.settings-panel.active {
    right: 0;
}

.settings-toggle {
    position: fixed;
    right: 20px;
    bottom: 20px;
    background: var(--accent-color);
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    color: white;
    cursor: pointer;
    z-index: 999;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
}

/* Cards and Sections */
.interest-card {
    background: var(--card-bg);
    border-radius: 15px;
    padding: 20px;
    text-align: center;
    transition: transform 0.3s ease;
    overflow: hidden;
}

.interest-card:hover {
    transform: translateY(-10px);
}

.interest-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    margin: 15px 0;
}

.read-more {
    display: inline-block;
    padding: 10px 20px;
    background: var(--accent-color);
    color: white;
    text-decoration: none;
    border-radius: 25px;
    margin-top: 15px;
    transition: transform 0.3s ease;
}

.read-more:hover {
    transform: translateX(5px);
}

/* Add more styles as needed */
