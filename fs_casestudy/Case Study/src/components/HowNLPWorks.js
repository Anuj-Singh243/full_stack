import React from 'react';

const HowNLPWorks = () => {
    return (
        <div className="container-fluid">
            <h1 className="mt-4">How Natural Language Processing Works</h1>
            <p className="lead mb-4">Understanding the core processes behind NLP, from raw text to meaningful insights.</p>

            <div className="row mt-4 align-items-center">
                <div className="col-lg-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body text-center">
                            <h5 className="card-title">NLP Workflow Overview</h5>
                            {/* Placeholder for the NLP diagram from How-NLP-Works-2.png */}
                            <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src="/How-NLP-Works-2.png" alt="NLP Workflow Diagram" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Key Stages of NLP</h5>
                            <ul className="list-group list-group-flush" style={{ backgroundColor: `var(--card-bg-color)` }}>
                                <li className="list-group-item" style={{ backgroundColor: `var(--card-bg-color)`, color: `var(--text-color)` }}><strong>Text Preprocessing:</strong> Cleaning and preparing text data for analysis.</li>
                                <li className="list-group-item" style={{ backgroundColor: `var(--card-bg-color)`, color: `var(--text-color)` }}><strong>Tokenization:</strong> Breaking text into smaller units like words or phrases.</li>
                                <li className="list-group-item" style={{ backgroundColor: `var(--card-bg-color)`, color: `var(--text-color)` }}><strong>Lemmatization:</strong> Reducing words to their base or root form.</li>
                                <li className="list-group-item" style={{ backgroundColor: `var(--card-bg-color)`, color: `var(--text-color)` }}><strong>Part-of-speech Tagging:</strong> Identifying grammatical categories of words.</li>
                                <li className="list-group-item" style={{ backgroundColor: `var(--card-bg-color)`, color: `var(--text-color)` }}><strong>Text Analysis:</strong> Extracting information and insights from processed text.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowNLPWorks;
