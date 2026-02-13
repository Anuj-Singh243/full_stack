import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ChatbotUI from './components/ChatbotUI';
import KPIs from './components/KPIs';
import Settings from './components/Settings';
import NLPVisualizations from './components/NLPVisualizations';
import HowNLPWorks from './components/HowNLPWorks';
import { useTheme } from './context/ThemeContext';

function App() {
  const [toggled, setToggled] = useState(false);
  const { theme, accentColor } = useTheme();

  const handleToggle = () => {
    setToggled(!toggled);
  };

  return (
    <Router>
      <div className={`d-flex ${toggled ? 'toggled' : ''}`} id="wrapper">
        <Sidebar toggleMenu={handleToggle} />
        <div id="page-content-wrapper">
          <nav className={`navbar navbar-expand-lg navbar-light border-bottom ${theme}-theme`} style={{ backgroundColor: `var(--navbar-bg)`, boxShadow: `var(--navbar-shadow)` }}>
            <div className="container-fluid d-flex justify-content-between align-items-center">
              <button className="btn btn-sm" id="menu-toggle" onClick={handleToggle} style={{ background: 'transparent', border: 'none', color: 'var(--text-color)', padding: '0.5rem' }}>
                <i className="material-icons" style={{ fontSize: '1.5rem' }}>menu</i>
              </button>
              <div className="d-flex align-items-center gap-3">
                <div className="d-flex align-items-center gap-2">
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4CAF50', animation: 'pulse-dot 2s infinite' }}></div>
                  <small className="text-muted">System Online</small>
                </div>
                <div className="vr" style={{ height: '24px', opacity: 0.3 }}></div>
                <div className="d-flex align-items-center gap-2">
                  <i className="material-icons" style={{ fontSize: '1.2rem', color: 'var(--text-color)' }}>notifications</i>
                  <span className="badge bg-danger" style={{ position: 'absolute', marginLeft: '12px', marginTop: '-8px', fontSize: '0.6rem', padding: '2px 5px' }}>3</span>
                </div>
              </div>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/kpis" element={<KPIs />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/chatbot-ui" element={<ChatbotUI />} />
            <Route path="/nlp-visualizations" element={<NLPVisualizations />} />
            <Route path="/how-nlp-works" element={<HowNLPWorks />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
