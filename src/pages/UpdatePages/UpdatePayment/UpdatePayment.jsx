import "./updatePayment.scss";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import axios from "axios";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { useState } from "react";
import { useLocation, useParams } from 'react-router-dom'


const UpdatePayment = ({ inputs, title }) => {

  const [paymentData, setPaymentData] = useState({})

  const location = useLocation()
  console.log(location)
  const ids = location.pathname.split("/")[3]
  console.log(ids)


  const updatePayment = async () => {
    // const { id } = payment;

    console.log(paymentData)
    try {
      const updatedPayment = await axios.put(`http://localhost:8000/api/payment/${ids}`, paymentData);
  
      console.log('Updated payment:', updatedPayment.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setPaymentData({ ...paymentData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePayment();
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit}>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                  />
                </div>
              ))}
              <button type="submit">Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePayment;
