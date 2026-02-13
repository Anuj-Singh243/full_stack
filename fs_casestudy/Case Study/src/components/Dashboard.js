import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useTheme } from '../context/ThemeContext';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Dashboard = () => {
    const { accentColor, theme } = useTheme();
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Total Conversations',
                data: [65, 59, 80, 81, 56, 75, 60],
                fill: false,
                backgroundColor: accentColor,
                borderColor: accentColor,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: theme === 'dark' ? 'var(--text-color)' : '#333',
                },
            },
            title: {
                display: true,
                text: 'Total Conversations Over Time',
                color: theme === 'dark' ? 'var(--heading-color)' : '#343a40',
            },
        },
        scales: {
            x: {
                ticks: {
                    color: theme === 'dark' ? 'var(--text-color)' : '#333',
                },
                grid: {
                    color: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                },
            },
            y: {
                ticks: {
                    color: theme === 'dark' ? 'var(--text-color)' : '#333',
                },
                grid: {
                    color: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                },
            },
        },
    };

    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center mb-4 mt-4">
                <h1>Overview Dashboard</h1>
                <div className="d-flex gap-2">
                    <span className="badge bg-success">Live</span>
                    <span className="badge bg-info">Updated 2 min ago</span>
                </div>
            </div>
            
            <div className="row mt-4">
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-start mb-3">
                                <h5 className="card-title mb-0">
                                    <i className="material-icons me-2" style={{ verticalAlign: 'middle', fontSize: '1.5rem' }}>trending_up</i>
                                    Total Conversations
                                </h5>
                                <span className="badge bg-success">+12%</span>
                            </div>
                            <div style={{ height: '220px' }}>
                                <Line data={data} options={options} />
                            </div>
                            <div className="mt-3 d-flex justify-content-between">
                                <small className="text-muted">Last 7 months</small>
                                <small className="text-success fw-bold">↗ 1,234 total</small>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card h-100 stat-card" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                        <div className="card-body text-white">
                            <div className="d-flex justify-content-between align-items-start mb-3">
                                <h5 className="card-title mb-0 text-white">
                                    <i className="material-icons me-2" style={{ verticalAlign: 'middle', fontSize: '1.5rem' }}>check_circle</i>
                                    Resolved Issues
                                </h5>
                                <span className="badge bg-white text-dark">80%</span>
                            </div>
                            <p className="card-text display-4 fw-bold mb-2" style={{ fontSize: '3.5rem' }}>987</p>
                            <p className="text-white-50 mb-0">
                                <i className="material-icons me-1" style={{ fontSize: '1rem', verticalAlign: 'middle' }}>arrow_upward</i>
                                15% increase from last month
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card h-100 stat-card" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                        <div className="card-body text-white">
                            <div className="d-flex justify-content-between align-items-start mb-3">
                                <h5 className="card-title mb-0 text-white">
                                    <i className="material-icons me-2" style={{ verticalAlign: 'middle', fontSize: '1.5rem' }}>smart_toy</i>
                                    Active Bots
                                </h5>
                                <span className="badge bg-white text-dark">+2</span>
                            </div>
                            <p className="card-text display-4 fw-bold mb-2" style={{ fontSize: '3.5rem' }}>5</p>
                            <p className="text-white-50 mb-0">
                                <i className="material-icons me-1" style={{ fontSize: '1rem', verticalAlign: 'middle' }}>add_circle</i>
                                2 new bots deployed this week
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-lg-8 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h5 className="card-title mb-0">
                                    <i className="material-icons me-2" style={{ verticalAlign: 'middle', fontSize: '1.5rem' }}>history</i>
                                    Recent Activity
                                </h5>
                                <button className="btn btn-sm btn-outline-secondary">View All</button>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <div className="me-3" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                            <i className="material-icons" style={{ fontSize: '1.2rem' }}>palette</i>
                                        </div>
                                        <div>
                                            <strong>User 'John Doe'</strong> customized bot colors
                                            <br />
                                            <small className="text-muted">Customization settings updated</small>
                                        </div>
                                    </div>
                                    <span className="badge bg-light text-dark">2h ago</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <div className="me-3" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                            <i className="material-icons" style={{ fontSize: '1.2rem' }}>rocket_launch</i>
                                        </div>
                                        <div>
                                            <strong>New bot 'Sales Assistant'</strong> deployed
                                            <br />
                                            <small className="text-muted">Production environment</small>
                                        </div>
                                    </div>
                                    <span className="badge bg-light text-dark">1d ago</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <div className="me-3" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                            <i className="material-icons" style={{ fontSize: '1.2rem' }}>bar_chart</i>
                                        </div>
                                        <div>
                                            <strong>KPIs updated</strong> with Q4 data
                                            <br />
                                            <small className="text-muted">Analytics dashboard refreshed</small>
                                        </div>
                                    </div>
                                    <span className="badge bg-light text-dark">3d ago</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <div className="me-3" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                            <i className="material-icons" style={{ fontSize: '1.2rem' }}>help_outline</i>
                                        </div>
                                        <div>
                                            <strong>'Help' section</strong> content reviewed
                                            <br />
                                            <small className="text-muted">Documentation updated</small>
                                        </div>
                                    </div>
                                    <span className="badge bg-light text-dark">1w ago</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-4 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title mb-4">
                                <i className="material-icons me-2" style={{ verticalAlign: 'middle', fontSize: '1.5rem' }}>flash_on</i>
                                Quick Actions
                            </h5>
                            <div className="d-grid gap-3">
                                <button className="btn btn-primary d-flex align-items-center justify-content-center" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', border: 'none', padding: '0.875rem' }}>
                                    <i className="material-icons me-2">add</i>
                                    Deploy New Bot
                                </button>
                                <button className="btn btn-outline-secondary d-flex align-items-center justify-content-center" style={{ color: accentColor, borderColor: accentColor, padding: '0.875rem' }}>
                                    <i className="material-icons me-2">analytics</i>
                                    Review Analytics
                                </button>
                                <button className="btn btn-outline-info d-flex align-items-center justify-content-center" style={{ color: accentColor, borderColor: accentColor, padding: '0.875rem' }}>
                                    <i className="material-icons me-2">settings</i>
                                    Update Settings
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
