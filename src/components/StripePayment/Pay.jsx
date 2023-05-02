import { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout"
import axios from 'axios';

const KEY = "pk_test_51Mwf3uKEYjNNAooHWb7CTIdxZ1loOGVE4csNTaJFZUd0wm7Sbze4jzTkKcMn4o7urxxRdkiM7cqc53y0LtKHs2od00OrXGXOC0"
const Pay = () => {

    const [stripeToke, serStripeToken] = useState(null)

    const [orders, setOrders] = useState([]);

    const onToken = (token) => {
        const newOrder = { description: "Your total is 20", amount: 2000 };
        setOrders([...orders, newOrder]);
        serStripeToken(token);
    };

    useEffect(() => {
        const makeRequest = async () => {

            try {
                const res = await axios.post("http://localhost:8000/api/checkout/payment", {
                    tokenId: stripeToke.id,
                    amount: 2000,
                }

                );

                console.log(res.data)

            } catch (err) {
                console.log(err);
            }
        };

        if (stripeToke) {
            makeRequest();
        }

    }, [stripeToke]);
    

    return (

        <div
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",


            }}
        >
            <StripeCheckout name="FOOD TRAIN"
                // billingAddress
                // shippingAddress
                description="Your total is 20"
                amount={2000}
                token={onToken}
                stripeKey={KEY}
            >
                <button
                    style={{
                        border: "none",
                        width: 120,
                        borderRadius: 5,
                        padding: "20px",
                        backgroundcolor: "black",
                        color: "black",
                        fontWeight: "600",
                        cursor: "pointer",
                    }}


                >pay Now
                    
                </button> 
            </StripeCheckout>
        </div>

    );

};

export default Pay;