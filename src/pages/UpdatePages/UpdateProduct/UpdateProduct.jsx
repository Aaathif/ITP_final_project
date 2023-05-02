import "./UpdateProduct.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import axios from "axios";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { useState } from "react";
import { useLocation, useParams } from 'react-router-dom'


const UpdateProduct = ({ inputs, title }) => {

    const [productData, setProductData] = useState({})

    const [size, setSize] = useState("");

    const [file, setFile] = useState("");

    const location = useLocation()
    console.log(location)
    const ids = location.pathname.split("/")[3]
    console.log(ids)


    const updateProduct = async () => {
        // const { id } = payment;
        const sizesArray = size.split(",").map((s) => s.trim());
        
        const data = new FormData();
        data.append("file", file);

        console.log(productData)
        try {

            // const uploadRes = await axios.post(
            //     "https://api.cloudinary.com/v1_1/dbzy3p0c7/image/upload",
            //     data
            // );
        
            // const { url } = uploadRes.data;

            const newProduct = {
                ...productData,
                size: sizesArray,
                // photos: url,
            }

            const updateProduct = await axios.put(`http://localhost:8000/api/product/${ids}`, newProduct);

            console.log('Updated product:', updateProduct.data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (e) => {
        setProductData({ ...productData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateProduct();
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
                    <div className="left">
                        <img
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            }
                            alt=""
                        />
                    </div>
                    <div className="right">
                        <form onSubmit={handleSubmit}>
                            <div className="formInput">
                                <label htmlFor="file">
                                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    style={{ display: "none" }}
                                />
                            </div>
                            {/* ----------------------------------------------------------------------- */}
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
                            {/* ------------------------------------------------- */}
                            <div className="formInput">
                                <label htmlFor="size">Size (separated by commas)</label>
                                <input
                                    type="text"
                                    id="size"
                                    value={size}
                                    onChange={(e) => setSize(e.target.value)}
                                />
                            </div>
                            <button type="submit">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;
