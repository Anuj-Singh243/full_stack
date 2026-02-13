import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const ChatbotUI = () => {
    const { theme, toggleTheme, accentColor, setAccentColor } = useTheme();
    const [botMessageColor, setBotMessageColor] = useState('green'); // Default bot message color

    const handleAccentColorChange = (color) => {
        setAccentColor(color);
    };

    return (
        <div className="container-fluid">
            <h1 className="mt-4">Chatbot UI Customization</h1>
            <div className="row">
                <div className="col-md-6">
                    <h3>Theme</h3>
                    <div className="btn-group" role="group" aria-label="Theme selection">
                        <input type="radio" className="btn-check" name="theme-radio" id="light-theme" autoComplete="off" checked={theme === 'light'} onChange={toggleTheme} />
                        <label className="btn btn-outline-primary" htmlFor="light-theme"><i className="material-icons">light_mode</i> Light</label>

                        <input type="radio" className="btn-check" name="theme-radio" id="dark-theme" autoComplete="off" checked={theme === 'dark'} onChange={toggleTheme} />
                        <label className="btn btn-outline-primary" htmlFor="dark-theme"><i className="material-icons">dark_mode</i> Dark</label>
                    </div>

                    <h3 className="mt-4">Color</h3>
                    <h4>Accent color</h4>
                    <div className="color-picker">
                        <span className={`color-swatch purple ${accentColor === 'purple' ? 'active' : ''}`} onClick={() => handleAccentColorChange('purple')}></span>
                        <span className={`color-swatch indigo ${accentColor === 'indigo' ? 'active' : ''}`} onClick={() => handleAccentColorChange('indigo')}></span>
                        <span className={`color-swatch orange ${accentColor === 'orange' ? 'active' : ''}`} onClick={() => handleAccentColorChange('orange')}></span>
                        <span className={`color-swatch red ${accentColor === 'red' ? 'active' : ''}`} onClick={() => handleAccentColorChange('red')}></span>
                        <span className={`color-swatch green ${accentColor === 'green' ? 'active' : ''}`} onClick={() => handleAccentColorChange('green')}></span>
                        <span className={`color-swatch teal ${accentColor === 'teal' ? 'active' : ''}`} onClick={() => handleAccentColorChange('teal')}></span>
                        <span className={`color-swatch multicolor ${accentColor === 'multicolor' ? 'active' : ''}`} onClick={() => handleAccentColorChange('multicolor')}></span>
                    </div>

                    <h4 className="mt-4">Bot messages</h4>
                    <div className="color-picker">
                        <span className={`color-swatch green ${botMessageColor === 'green' ? 'active' : ''}`} onClick={() => setBotMessageColor('green')}></span>
                        <span className={`color-swatch multicolor ${botMessageColor === 'multicolor' ? 'active' : ''}`} onClick={() => setBotMessageColor('multicolor')}></span>
                    </div>

                </div>
                <div className="col-md-6">
                    <h3>Chatbot Preview</h3>
                    <div className={`chatbot-preview-container`} style={{ backgroundColor: `var(--chatbot-preview-bg)` }}>
                        <div className={`chatbot-message bot-message`} style={{ backgroundColor: `var(--chatbot-bot-message-bg)`, color: `var(--text-color)` }}>Bot message here</div>
                        <div className={`chatbot-message user-message`} style={{ backgroundColor: accentColor, color: '#fff' }}>User message here</div>
                        <div className={`chatbot-message suggested-reply`} style={{ borderColor: accentColor, color: accentColor }}>Suggested reply here</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatbotUI;
