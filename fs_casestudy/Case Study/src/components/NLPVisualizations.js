import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useTheme } from '../context/ThemeContext';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const NLPVisualizations = () => {
    const { theme, accentColor } = useTheme();
    // Data for Bigram Analysis Chart
    const bigramData = {
        labels: ['credit_report', 'credit_card', 'make_payment', 'payment_service', 'credit_reporting', 'call_back', 'phone_call', 'collection_agency', 'credit_bureaus', 'credit_score', '30_day', 'student_loan', 'report_credit', 'interest_rate', 'receive_letter', 'loan_modification', 'late_payment', 'late_fee', 'event_though', 'would_like', 'call_back', 'customer_service'],
        datasets: [
            {
                label: '% of Complaints',
                data: [80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 3, 2, 1, 0.5], // Dummy percentages, adjust as needed
                backgroundColor: `${accentColor}CC`, // 80% opacity
                borderColor: accentColor,
                borderWidth: 1,
            },
        ],
    };

    const bigramOptions = {
        indexAxis: 'y', // Horizontal bar chart
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
                text: 'Topic Modeling - Bigram Analysis (% of Complaints)',
                color: theme === 'dark' ? 'var(--heading-color)' : '#343a40',
            },
        },
        scales: {
            x: {
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

    // Data for N-Gram Comparison Chart
    const nGramData = {
        labels: ['Company A', 'Company B', 'Company C', 'Company D'], // Dummy company names
        datasets: [
            {
                label: 'Positive',
                data: [20, 30, 25, 35], // Dummy data
                backgroundColor: accentColor,
            },
            {
                label: 'Neutral',
                data: [50, 30, 40, 20], // Dummy data
                backgroundColor: theme === 'dark' ? '#f39c12' : '#ffc107',
            },
            {
                label: 'Negative',
                data: [30, 40, 35, 45], // Dummy data
                backgroundColor: theme === 'dark' ? '#c0392b' : '#dc3545',
            },
        ],
    };

    const nGramOptions = {
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
                text: 'Sentiment Analysis - N-Gram Comparison',
                color: theme === 'dark' ? 'var(--heading-color)' : '#343a40',
            },
        },
        scales: {
            x: {
                stacked: true,
                ticks: {
                    color: theme === 'dark' ? 'var(--text-color)' : '#333',
                },
                grid: {
                    color: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                },
            },
            y: {
                stacked: true,
                beginAtZero: true,
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
            <h1 className="mt-4">Natural Language Processing Visualizations</h1>
            <p className="lead mb-4">Explore different aspects of NLP data through interactive visualizations.</p>

            <div className="row mt-4">
                <div className="col-lg-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Topic Modeling - Bigram Analysis</h5>
                            {/* Placeholder for Bigram chart from 1_DtMWUZtmiZTUPx2NcQfaZg.png */}
                            <div style={{ height: '300px' }}>
                                <Bar data={bigramData} options={bigramOptions} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Sentiment Analysis - N-Gram Comparison</h5>
                            {/* Placeholder for N-Gram chart from 1_DtMWUZtmiZTUPx2NcQfaZg.png */}
                            <div style={{ height: '300px' }}>
                                <Bar data={nGramData} options={nGramOptions} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-lg-12 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Entity Relationship Graph</h5>
                            {/* Placeholder for network graph from nlp-and-data-visualization-challenge-2.png */}
                            <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', borderRadius: '5px', border: `1px solid var(--border-color)`, backgroundColor: `var(--card-bg-color)` }}>
                                {/* This is a simplified static representation of the network graph */}
                                <div style={{ position: 'absolute', width: '100%', height: '100%', background: theme === 'dark' ? 'radial-gradient(circle, #34495e 10%, #2c3e50 70%)' : 'radial-gradient(circle, #f0f0f0 10%, #fff 70%)', opacity: 0.6 }}></div>
                                <div style={{ position: 'absolute', width: '80px', height: '80px', borderRadius: '50%', backgroundColor: accentColor, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', top: '50px', left: '100px', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}>Interest Rate</div>
                                <div style={{ position: 'absolute', width: '100px', height: '100px', borderRadius: '50%', backgroundColor: theme === 'dark' ? '#8e44ad' : '#673ab7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', top: '150px', right: '80px', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}>Credit Report</div>
                                <div style={{ position: 'absolute', width: '70px', height: '70px', borderRadius: '50%', backgroundColor: theme === 'dark' ? '#27ae60' : '#4CAF50', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', bottom: '70px', left: '200px', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}>Loan Modification</div>
                                <div style={{ position: 'absolute', width: '60px', height: '60px', borderRadius: '50%', backgroundColor: theme === 'dark' ? '#2980b9' : '#2196f3', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', top: '250px', left: '50px', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}>30 Day</div>
                                {/* Lines to connect them could be done with SVG or more complex CSS, but for a placeholder, this visual hint is enough */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NLPVisualizations;
