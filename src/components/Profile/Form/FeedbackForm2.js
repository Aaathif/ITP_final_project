import React, { useState } from 'react'
import {options , categories} from './Data'
import Form from './Form.module.css'
import axios from 'axios'

function FeedbackForm() {
    // const [feedbackType, setFeedbackType] = useState('N/A')
    // const [category, setCategory] = useState('N/A')
    // const [description, setDescription] = useState('')
    const [ data, setData] = useState({feedbackType: "", category: "", description: ""})
    // const [submittedData, setSubmittedData] = useState([])

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData({...data, [name]: value})
    }

    // const handleType = (event) => {
    //     setFeedbackType(event.target.value)
    // }

    // const handleCategory = (event) => {
    //     setCategory(event.target.value)
    // }

    // const handleDescription = (event) => {
    //     setDescription(event.target.value)
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        const details = {
          feedbackType: data.feedbackType,
          category: data.category,
          description: data.description
      }
    
        axios.post('http://localhost:8000/api/contacts', details)
      .then(response => {
        console.log(response.details);
        alert('Successfully Submitted')
        setData({feedbackType:"N/A", category:"N/A", description:""});
      })
      .catch(error => {
        console.log(error);
        alert("Something went wrong. Please try again later")
      })

        // setSubmittedData([...submittedData, data])
        // setFeedbackType('N/A')
        // setCategory('N/A')
        // setDescription('')
        // alert('Successfully Submitted')

        
    }

  return (
    <div className={Form.container}> 
      <h1 className={Form.header}>Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        <label className={Form.label}>Select Type: </label>
        <select value={data.feedbackType} onChange={handleChange} className={Form.select}>
            {options.map((option) => (
                <option key={option.id} value={option.label}>
                    {option.label}
                </option>
            ))}
        </select>

        <label className={Form.label}>Select Category: </label>
        <select value={data.category} onChange={handleChange} className={Form.select}>
            {categories.map((category) => (
                <option key={category.id} value={category.label}>
                    {category.label}
                </option>
            ))}
        </select>


        <label className={Form.label}>Description </label>
        <textarea 
            value={data.description} onChange={handleChange}
            rows={5} cols={50} className={Form.select}
            placeholder='Enter Your Message'
        />


        <button type='submit' className={Form.submit}>Submit</button>
      </form>
      
    </div>
  )
}

export default FeedbackForm
