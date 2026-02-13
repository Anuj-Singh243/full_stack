import React from 'react';

const Settings = () => {
    return (
        <div className="container-fluid">
            <h1 className="mt-4">Application Settings</h1>
            <div className="row mt-4">
                <div className="col-lg-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">General Settings</h5>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="appName" className="form-label">Application Name</label>
                                    <input type="text" className="form-control" id="appName" defaultValue="AI-Powered Chatbot" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="enableDarkMode" defaultChecked />
                                    <label className="form-check-label" htmlFor="enableDarkMode">Enable Dark Mode (Global)</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Save Changes</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Notification Settings</h5>
                            <form>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="emailNotifications" defaultChecked />
                                    <label className="form-check-label" htmlFor="emailNotifications">Email Notifications</label>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="pushNotifications" />
                                    <label className="form-check-label" htmlFor="pushNotifications">Push Notifications</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Save Notifications</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-12 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Integrations</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    CRM Integration
                                    <span className="badge bg-success">Connected</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Analytics Platform
                                    <span className="badge bg-warning text-dark">Pending Setup</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Live Chat Support
                                    <span className="badge bg-danger">Disconnected</span>
                                </li>
                            </ul>
                            <button className="btn btn-secondary mt-3">Manage Integrations</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
