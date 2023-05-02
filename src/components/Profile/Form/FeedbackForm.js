import React, { useState } from 'react'
import {options , categories} from './Data'
import Form from './Form.module.css'

function FeedbackForm() {
    const [feedbackType, setFeedbackType] = useState('N/A')
    const [category, setCategory] = useState('N/A')
    const [description, setDescription] = useState('')
    const [submittedData, setSubmittedData] = useState([])

    const handleType = (event) => {
        setFeedbackType(event.target.value)
    }

    const handleCategory = (event) => {
        setCategory(event.target.value)
    }

    const handleDescription = (event) => {
        setDescription(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            id: new Date().getTime(),
            date: new Date().toLocaleString(),
            feedbackType: feedbackType,
            category: category,
            description: description
        }

        setSubmittedData([...submittedData, data])
        setFeedbackType('N/A')
        setCategory('N/A')
        setDescription('')
        alert('Successfully Submitted')

        
    }

  return (
    <div className={Form.container}> 
      <h1 className={Form.header}>Feedback Form</h1>
      <form onSubmit={(event) => handleSubmit(event, setSubmittedData)}>
        <label className={Form.label}>Select Type: </label>
        <select value={feedbackType} onChange={handleType} className={Form.select}>
            {options.map((option) => (
                <option key={option.id} value={option.id}>
                    {option.label}
                </option>
            ))}
        </select>

        <label className={Form.label}>Select Category: </label>
        <select value={category} onChange={handleCategory} className={Form.select}>
            {categories.map((category) => (
                <option key={category.id} value={category.id}>
                    {category.label}
                </option>
            ))}
        </select>


        <label className={Form.label}>Description </label>
        <textarea 
            value={description} onChange={handleDescription}
            rows={5} cols={50} className={Form.select}
            placeholder='Enter Your Message'
        />


        <button type='submit' className={Form.submit}>Submit</button>
      </form>
      
    </div>
  )
}

export default FeedbackForm
