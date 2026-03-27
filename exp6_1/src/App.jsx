import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    skills: [],
    address: '',
    state: '',
  })

  const [submitted, setSubmitted] = useState(null)
  const [errors, setErrors] = useState({})

  // Get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    
    if (type === 'checkbox' && name === 'skills') {
      let updatedSkills = [...formData.skills]
      if (checked) {
        updatedSkills.push(value)
      } else {
        updatedSkills = updatedSkills.filter(skill => skill !== value)
      }
      setFormData({ ...formData, skills: updatedSkills })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  // Validate form
  const validateForm = () => {
    const newErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required'
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of Birth is required'
    } else if (new Date(formData.dateOfBirth) > new Date()) {
      newErrors.dateOfBirth = 'Date of Birth cannot be in the future'
    }

    if (!formData.gender) {
      newErrors.gender = 'Gender is required'
    }

    if (formData.skills.length === 0) {
      newErrors.skills = 'Please select at least one skill'
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required'
    }

    if (!formData.state) {
      newErrors.state = 'State is required'
    }

    return newErrors
  }

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()

    if (Object.keys(newErrors).length === 0) {
      const alertMessage = `
SUBMITTED DATA
================
First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Date of Birth: ${formData.dateOfBirth}
Gender: ${formData.gender}
Skills: ${formData.skills.join(', ')}
Address: ${formData.address}
State: ${formData.state}
================`
      alert(alertMessage)
      setErrors({})
      handleReset()
    } else {
      setErrors(newErrors)
    }
  }

  // Handle reset
  const handleReset = () => {
    setFormData({ firstName: '', lastName: '', dateOfBirth: '', gender: '', skills: [], address: '', state: '' })
    setErrors({})
    setSubmitted(null)
  }

  return (
    <div>
      <h1>User Information Form</h1>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {submitted && <div className="success-message">Form submitted successfully!</div>}

          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
            />
            {errors.firstName && <span className="error-message">{errors.firstName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
            />
            {errors.lastName && <span className="error-message">{errors.lastName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              max={getTodayDate()}
            />
            {errors.dateOfBirth && <span className="error-message">{errors.dateOfBirth}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <span className="error-message">{errors.gender}</span>}
          </div>

          <div className="form-group">
            <label>Skills</label>
            <div className="checkbox-group">
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  id="javascript"
                  name="skills"
                  value="JavaScript"
                  checked={formData.skills.includes('JavaScript')}
                  onChange={handleChange}
                />
                <label htmlFor="javascript" className="checkbox-label">JavaScript</label>
              </div>
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  id="python"
                  name="skills"
                  value="Python"
                  checked={formData.skills.includes('Python')}
                  onChange={handleChange}
                />
                <label htmlFor="python" className="checkbox-label">Python</label>
              </div>
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  id="react"
                  name="skills"
                  value="React"
                  checked={formData.skills.includes('React')}
                  onChange={handleChange}
                />
                <label htmlFor="react" className="checkbox-label">React</label>
              </div>
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  id="nodejs"
                  name="skills"
                  value="Node.js"
                  checked={formData.skills.includes('Node.js')}
                  onChange={handleChange}
                />
                <label htmlFor="nodejs" className="checkbox-label">Node.js</label>
              </div>
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  id="mysql"
                  name="skills"
                  value="MySQL"
                  checked={formData.skills.includes('MySQL')}
                  onChange={handleChange}
                />
                <label htmlFor="mysql" className="checkbox-label">MySQL</label>
              </div>
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  id="mongodb"
                  name="skills"
                  value="MongoDB"
                  checked={formData.skills.includes('MongoDB')}
                  onChange={handleChange}
                />
                <label htmlFor="mongodb" className="checkbox-label">MongoDB</label>
              </div>
            </div>
            {errors.skills && <span className="error-message">{errors.skills}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
            />
            {errors.address && <span className="error-message">{errors.address}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="state">State</label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
            >
              <option value="">Select State</option>
              <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
              <option value="Daman and Diu">Daman and Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Ladakh">Ladakh</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Puducherry">Puducherry</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
            {errors.state && <span className="error-message">{errors.state}</span>}
          </div>

          <div className="button-group">
            <button type="submit" className="submit-btn">
              Submit
            </button>
            <button type="button" className="reset-btn" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>

      {submitted && (
        <div className="output-container">
          <h2>Submitted Data:</h2>
          <div className="output-item">
            <strong>First Name:</strong> {submitted.firstName}
          </div>
          <div className="output-item">
            <strong>Last Name:</strong> {submitted.lastName}
          </div>
          <div className="output-item">
            <strong>Date of Birth:</strong> {submitted.dateOfBirth}
          </div>
          <div className="output-item">
            <strong>Gender:</strong> {submitted.gender}
          </div>
          <div className="output-item">
            <strong>Skills:</strong> {submitted.skills.join(', ')}
          </div>
          <div className="output-item">
            <strong>Address:</strong> {submitted.address}
          </div>
          <div className="output-item">
            <strong>State:</strong> {submitted.state}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
