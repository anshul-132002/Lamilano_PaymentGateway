import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

const Success = () => {
  const [loading, setLoading] = useState(true);
  const [showAddressForm] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

 

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : showAddressForm ? (
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Enter Delivery Address
          </h2>
          {/* Add your address input form here */}
        </div>
      ) : (
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Order Successful! 🍕
          </h2>
          <p>Your order has been successfully placed</p>
         
        </div>
      )}
    </div>
  );
};

export default Success;
