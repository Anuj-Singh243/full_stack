import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { useTheme } from '../context/ThemeContext';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

    const KPIs = () => {
        const { theme, accentColor } = useTheme();
        const data = {
            labels: ['Resolved', 'Escalated', 'Handed over', 'Unresolved'],
            datasets: [
                {
                    label: 'Conversation Breakdown',
                    data: [63, 18, 14, 5], // Percentages from the image
                    backgroundColor: [accentColor, '#ffc107', '#17a2b8', '#6c757d'], // Use accent color for 'Resolved'
                    borderColor: [accentColor, '#ffc107', '#17a2b8', '#6c757d'],
                    borderWidth: 1,
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
                    text: 'Conversation Breakdown',
                    color: theme === 'dark' ? 'var(--heading-color)' : '#343a40',
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        },
                        color: theme === 'dark' ? 'var(--text-color)' : '#333',
                    },
                    grid: {
                        color: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                        borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                    },
                },
                x: {
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

        // Doughnut chart data for the top KPI cards
        const kpiChartData = (percentage) => ({
            labels: ['Completed', 'Remaining'],
            datasets: [
                {
                    data: [percentage, 100 - percentage],
                    backgroundColor: [accentColor, (theme === 'dark' ? '#4a6480' : '#e9ecef')], // Use accent color and theme-dependent remaining color
                    hoverBackgroundColor: [accentColor, (theme === 'dark' ? '#4a6480' : '#e9ecef')],
                    borderWidth: 0,
                },
            ],
        });

        const kpiChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '80%',
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: false,
                },
                title: {
                    display: false, // Title is in the HTML, not the chart
                },
            },
            elements: {
                arc: {
                    borderWidth: 0,
                },
            },
        };

    return (
        <div className="container-fluid">
            <h1 className="mt-4">KPI Dashboard</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="card text-center mb-3">
                        <div className="card-body">
                            <div style={{ height: '120px', width: '120px', margin: '0 auto 10px auto', position: 'relative' }}>
                                <Doughnut data={kpiChartData(77)} options={kpiChartOptions} />
                                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--heading-color)' }}>77%</div>
                            </div>
                            <p className="card-text" style={{ color: 'var(--text-color)' }}>Successfully Handled</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center mb-3">
                        <div className="card-body">
                            <div style={{ height: '120px', width: '120px', margin: '0 auto 10px auto', position: 'relative' }}>
                                <Doughnut data={kpiChartData(68)} options={kpiChartOptions} />
                                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--heading-color)' }}>68%</div>
                            </div>
                            <p className="card-text" style={{ color: 'var(--text-color)' }}>Successfully Deflected</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center mb-3">
                        <div className="card-body">
                            <div style={{ height: '120px', width: '120px', margin: '0 auto 10px auto', position: 'relative' }}>
                                <Doughnut data={kpiChartData(95)} options={kpiChartOptions} />
                                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--heading-color)' }}>95%</div>
                            </div>
                            <p className="card-text" style={{ color: 'var(--text-color)' }}>Successfully Automated</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mt-4">
                <div className="card-body">
                    <h4 className="card-title">All conversations</h4>
                    <div className="row text-center mt-3">
                        <div className="col-3">
                            <h5 className="font-weight-bold" style={{ color: 'var(--heading-color)' }}>354.798</h5>
                            <p className="text-muted" style={{ color: 'var(--text-color)' }}>Total</p>
                        </div>
                        <div className="col-3">
                            <h5 className="font-weight-bold text-success" style={{ color: accentColor }}>63%</h5>
                            <p className="text-muted" style={{ color: 'var(--text-color)' }}>Resolved</p>
                        </div>
                        <div className="col-3">
                            <h5 className="font-weight-bold text-warning" style={{ color: '#ffc107' }}>18%</h5>
                            <p className="text-muted" style={{ color: 'var(--text-color)' }}>Escalated</p>
                         </div>
                        <div className="col-3">
                            <h5 className="font-weight-bold text-info" style={{ color: '#17a2b8' }}>14%</h5>
                            <p className="text-muted" style={{ color: 'var(--text-color)' }}>Handed over</p>
                        </div>
                    </div>
                    {/* Placeholder for chart */}
                    <div className="mt-4" style={{ height: '250px' }}>
                        <Bar data={data} options={options} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KPIs;
