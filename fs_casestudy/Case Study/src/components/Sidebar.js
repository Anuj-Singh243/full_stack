import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const Sidebar = ({ toggleMenu }) => {
    const { theme, toggleTheme, accentColor } = useTheme();

    return (
        <div className={`border-right ${theme}-theme`} id="sidebar-wrapper" style={{ backgroundColor: `var(--sidebar-bg)`, display: 'flex', flexDirection: 'column' }}>
            <div className="sidebar-heading" style={{ background: `var(--sidebar-heading-bg)`, color: `var(--sidebar-heading-color)`, borderBottomColor: `var(--border-color)` }}>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', letterSpacing: '1px' }}>Dialpad</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.9, marginTop: '0.25rem' }}>Self Service</div>
            </div>
            <div className="list-group list-group-flush" style={{ flex: 1 }}>
                <NavLink to="/" className={({ isActive }) => "list-group-item list-group-item-action" + (isActive ? " active" : "")} style={({ isActive }) => ({ backgroundColor: isActive ? 'transparent' : 'transparent', color: isActive ? '#fff' : 'var(--text-color)', borderColor: isActive ? 'transparent' : 'transparent' })}>
                    <i className="material-icons">dashboard</i> Dashboard
                </NavLink>
                <NavLink to="/kpis" className={({ isActive }) => "list-group-item list-group-item-action" + (isActive ? " active" : "")} style={({ isActive }) => ({ backgroundColor: isActive ? 'transparent' : 'transparent', color: isActive ? '#fff' : 'var(--text-color)', borderColor: isActive ? 'transparent' : 'transparent' })}>
                    <i className="material-icons">bar_chart</i> KPIs
                </NavLink>
                <NavLink to="/settings" className={({ isActive }) => "list-group-item list-group-item-action" + (isActive ? " active" : "")} style={({ isActive }) => ({ backgroundColor: isActive ? 'transparent' : 'transparent', color: isActive ? '#fff' : 'var(--text-color)', borderColor: isActive ? 'transparent' : 'transparent' })}>
                    <i className="material-icons">settings</i> Settings
                </NavLink>
                <NavLink to="/chatbot-ui" className={({ isActive }) => "list-group-item list-group-item-action" + (isActive ? " active" : "")} style={({ isActive }) => ({ backgroundColor: isActive ? 'transparent' : 'transparent', color: isActive ? '#fff' : 'var(--text-color)', borderColor: isActive ? 'transparent' : 'transparent' })}>
                    <i className="material-icons">chat</i> Chatbot UI
                </NavLink>
                <NavLink to="/nlp-visualizations" className={({ isActive }) => "list-group-item list-group-item-action" + (isActive ? " active" : "")} style={({ isActive }) => ({ backgroundColor: isActive ? 'transparent' : 'transparent', color: isActive ? '#fff' : 'var(--text-color)', borderColor: isActive ? 'transparent' : 'transparent' })}>
                    <i className="material-icons">analytics</i> NLP Visualizations
                </NavLink>
                <NavLink to="/how-nlp-works" className={({ isActive }) => "list-group-item list-group-item-action" + (isActive ? " active" : "")} style={({ isActive }) => ({ backgroundColor: isActive ? 'transparent' : 'transparent', color: isActive ? '#fff' : 'var(--text-color)', borderColor: isActive ? 'transparent' : 'transparent' })}>
                    <i className="material-icons">help</i> How NLP Works
                </NavLink>
            </div>
            <div className="mt-auto p-3" style={{ borderTop: `1px solid var(--border-color)` }}>
                <button className="btn btn-primary w-100 d-flex align-items-center justify-content-center" onClick={toggleTheme} style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', border: 'none', padding: '0.75rem', fontWeight: '600' }}>
                    <i className="material-icons me-2">{theme === 'light' ? 'dark_mode' : 'light_mode'}</i>
                    {theme === 'light' ? 'Dark' : 'Light'} Mode
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
