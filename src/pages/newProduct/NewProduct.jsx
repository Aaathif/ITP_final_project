import "./newProduct.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";
import useFetch from "../../hooks/useFetch";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [imageId, setImageId] = useState(null);

  const [info, setInfo] = useState({});

  const [size, setSize] = useState("");

  const [prices, setPrices] = useState([
    { size: "", price: "" },
    { size: "", price: "" },
    { size: "", price: "" },
  ]);

  // const handleSizeChange = (event) => {
  //   const { value } = event.target;
  //   const newSizes = value.split(',');
  //   setSizes(newSizes);
  // };

  const handlePriceChange = (index, event) => {
    const { name, value } = event.target;
    const newPrices = [...prices];
    newPrices[index][name] = value;
    setPrices(newPrices);
  };

  const { data, loading, error } = useFetch("/products");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // const handleSelect = (e) => {
  //   const value = Array.from(
  //     e.target.selectedOptions,
  //     (option) => option.value
  //   );
  //   setPrices(value);
  // };

  const handleClick = async (e) => {
    alert("Hello submitted")
    e.preventDefault();
    const data = new FormData();
    const sizesArray = size.split(",").map((s) => s.trim());
    data.append("file", file);
    data.append("upload_preset", "upload");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dbzy3p0c7/image/upload",
        data
      );
      // setImageId(uploadRes.data.public_id);
      // console.log(imageId+"hello")
      const { url } = uploadRes.data;

      const newProduct = {
        ...info,
        size: sizesArray,
        photos: url,
        prices,
      };

      await axios.post("http://localhost:8000/api/product", newProduct);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(info);
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
            <form>
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
            {/* -------------------------------------------------- */}
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
              {/* -------------------------------------------------------------------------------------- */}
              <div className="formInput">
                <label htmlFor="size">Size (separated by commas)</label>
                <input
                  type="text"
                  id="size"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                />
              </div>

              {/* -------------------------------------------------------------------------------------- */}

              {prices.map((price, index) => (
                <div key={index} className="formInputArray">
                  <label htmlFor="size">Price for each product</label>
                  <input
                    type="text"
                    name="size"
                    value={price.size}
                    placeholder="S or M or L"
                    onChange={(event) => handlePriceChange(index, event)}
                  />
                  <input
                    type="number"
                    name="price"
                    value={price.price}
                    onChange={(event) => handlePriceChange(index, event)}
                  />
                </div>
              ))}


              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
