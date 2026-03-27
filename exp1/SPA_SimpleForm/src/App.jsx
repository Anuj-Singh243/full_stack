import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    college: '',
    branch: [],
    otherBranch: '',
    section: '',
    group: ''
  })
  const [submittedData, setSubmittedData] = useState(null)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    
    if (type === 'checkbox') {
      setFormData(prevState => ({
        ...prevState,
        branch: checked 
          ? [...prevState.branch, value]
          : prevState.branch.filter(item => item !== value)
      }))
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedData(formData)
    setFormData({
      name: '',
      age: '',
      gender: '',
      college: '',
      branch: [],
      otherBranch: '',
      section: '',
      group: ''
    })
  }

  return (
    <div className="app-container">
      <h1>Student Registration Form</h1>
      
      <form onSubmit={handleSubmit} className="form">
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Age Field */}
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
            min="1"
            max="100"
            required
          />
        </div>

        {/* Gender Field - Radio */}
        <div className="form-group">
          <label>Gender:</label>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleChange}
                required
              />
              Male
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleChange}
              />
              Female
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={formData.gender === 'Other'}
                onChange={handleChange}
              />
              Other
            </label>
          </div>
        </div>

        {/* College Field */}
        <div className="form-group">
          <label htmlFor="college">College:</label>
          <input
            type="text"
            id="college"
            name="college"
            value={formData.college}
            onChange={handleChange}
            placeholder="Enter your college name"
            required
          />
        </div>

        {/* Branch Field - Checkbox */}
        <div className="form-group">
          <label>Branch:</label>
          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="branch"
                value="General CSE"
                checked={formData.branch.includes('General CSE')}
                onChange={handleChange}
              />
              General CSE
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="branch"
                value="CSE AIML"
                checked={formData.branch.includes('CSE AIML')}
                onChange={handleChange}
              />
              CSE AIML
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="branch"
                value="CSE Information Security"
                checked={formData.branch.includes('CSE Information Security')}
                onChange={handleChange}
              />
              CSE Information Security
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="branch"
                value="CSE Big Data Analysis"
                checked={formData.branch.includes('CSE Big Data Analysis')}
                onChange={handleChange}
              />
              CSE Big Data Analysis
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="branch"
                value="CSE Cloud Computing"
                checked={formData.branch.includes('CSE Cloud Computing')}
                onChange={handleChange}
              />
              CSE Cloud Computing
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="branch"
                value="Other"
                checked={formData.branch.includes('Other')}
                onChange={handleChange}
              />
              Other
            </label>
          </div>
          {formData.branch.includes('Other') && (
            <input
              type="text"
              name="otherBranch"
              value={formData.otherBranch}
              onChange={handleChange}
              placeholder="Please specify other branch"
              className="other-input"
              required
            />
          )}
        </div>

        {/* Section Field */}
        <div className="form-group">
          <label htmlFor="section">Section:</label>
          <input
            type="text"
            id="section"
            name="section"
            value={formData.section}
            onChange={handleChange}
            placeholder="Enter your section"
            required
          />
        </div>

        {/* Group Field - Radio */}
        <div className="form-group">
          <label>Group:</label>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="group"
                value="A"
                checked={formData.group === 'A'}
                onChange={handleChange}
                required
              />
              A
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="group"
                value="B"
                checked={formData.group === 'B'}
                onChange={handleChange}
              />
              B
            </label>
          </div>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>

      {submittedData && (
        <div className="submitted-data">
          <h2>Submitted Data:</h2>
          <div className="data-grid">
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Age:</strong> {submittedData.age}</p>
            <p><strong>Gender:</strong> {submittedData.gender}</p>
            <p><strong>College:</strong> {submittedData.college}</p>
            <p><strong>Branch:</strong> {submittedData.branch.join(', ') || 'Not selected'}</p>
            {submittedData.otherBranch && <p><strong>Other Branch:</strong> {submittedData.otherBranch}</p>}
            <p><strong>Section:</strong> {submittedData.section}</p>
            <p><strong>Group:</strong> {submittedData.group}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
