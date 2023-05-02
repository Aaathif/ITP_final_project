import { useState, React } from 'react'
import Navbar from '../../component/navbar/Navbar'
import Sidebar from '../../component/sidbar/Sidebar'
import Css from './Leave.module.css'
import {options} from './Data'

function Leave() {
  const [data, setData] = useState({name: "", position: "", employeeID: "",stratingDate: "", 
  endingDate: "", reason: "", leave: "Days of Leave"})
  const[submittedData, setSubmittedData] = useState([])

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({...data, [name]: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const details = {
      name: data.name,
      position: data.position,
      employeeID: data.employeeID,
      stratingDate: data.stratingDate,
      endingDate: data.endingDate,
      leave: data.leave,
      reason: data.reason
    }
    setSubmittedData([...submittedData, details])
    console.log(details)
  }

  // const [leave, setLeave] = useState('')

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className={Css.row1}>
        <div className={Css.col1}>
          <Sidebar />
        </div>
        <div className={Css.col2}>
          <div className={Css.cont}>
            <form className={Css.form} onSubmit={handleSubmit}>
              <div className={Css.r1c1}>
                <div className={Css.inp}>
                  <labal>

                  </labal><br />
                  <input type='text' value={data.name} id='' name='name' placeholder='name with initial' className={Css.inp1} onChange={handleChange}/>

                </div>

                <div className={Css.inp}>
                  <labal>

                  </labal><br />
                  <input type='text' id='' value={data.position} name='position' placeholder='position' className={Css.inp1} onChange={handleChange}/>
                </div>

                <div className={Css.inp}>
                  <label>

                  </label><br />
                  <input type='text' id='' value={data.employeeID} name='employeeID' placeholder=' Employee ID' className={Css.inp1} onChange={handleChange}/>
                </div>
              </div>
              <div className={Css.r1c2}>
                <div className={Css.inp}>
                  <label>

                  </label><br />
                 
                  <select value={data.leave} className={Css.inp1} onChange={handleChange}>
                    {options.map((option) => (
                      <option key={option.id} value={option.label}>
                        {option.label}
                      </option>
                    ))}
                  </select>

                </div>

                <div className={Css.inp}>
                  <labal>
                    strating date
                  </labal><br />
                  <input type='date'name='stratingDate' className={Css.inp1} value={data.stratingDate} onChange={handleChange} /><br />
                  <labal>
                    Ending date
                  </labal><br />
                  <input type='date'name='endingDate' className={Css.inp1} value={data.endingDate} onChange={handleChange} />
                </div>
              </div>
              <div>
                <label>
                  Reasons
                </label><br />
                <textarea name="reason" rows={5} cols={60} style={{ fontSize: '23px' }} value={data.reason}  onChange={handleChange}/>
              </div>
              <button style={{ width: '150px', height: '40px', backgroundColor: 'rgb(172, 61, 194)' }}>Apply</button>
            </form>
            
          </div>
        </div>

      </div>
    </div>
  )
}

export default Leave