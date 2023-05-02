import React, { useState } from 'react'
import FeedbackForm2 from './Form/FeedbackForm2'
import Modal from 'react-modal'
import {data} from './Form/Data'
import CustomerDetails from './CustomerDetails.module.css'

Modal.setAppElement('#root')

function Feedbacks() {
  const [isModalOpen, setModalOpen] = useState(false);


  const handleOpenModal = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  return (
    <div >
      <div className={CustomerDetails.container}>
        <button className={CustomerDetails.feedback} onClick={handleOpenModal}>
          Enter Feedback
        </button>
        
        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          className={CustomerDetails.modal}
          overlayClassName={CustomerDetails.overlay}
        >
          <div>
          <button className={CustomerDetails.close} onClick={handleCloseModal}>
            X
          </button>

        <FeedbackForm2 closeModal={handleCloseModal}/>
        </div>
        </Modal>
      </div>
      
      <div>
        <table>
          <tbody>
              <tr>
                <th>ID</th>
                <th>feedback Type</th>
                <th>Category</th>
                <th>Description</th>
                <th>Date</th>
              </tr>
              {data.map((data) => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.feedbackType}</td>
                  <td>{data.category}</td>
                  <td>{data.description}</td>
                  <td>{data.date}</td>
                </tr>
              ))}
         </tbody>
        </table>
      </div>
    </div>
  )
}


export default Feedbacks

