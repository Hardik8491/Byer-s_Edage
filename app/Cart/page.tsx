"use  client";
import { motion } from "framer-motion";
import Image from "next/image";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  // Dummy cart items data for illustration
  const cartItems: any[] = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    // Add more items as needed
  ];

  const isCartEmpty = cartItems.length === 0;

  return (
    <motion.div
      className={` z-20 ${isCartEmpty ? "empty-cart" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        height: "100vh",
        width: "300px",
        backgroundColor: isCartEmpty ? "#ffff" : "#ffff",
        boxShadow: "-2px 0 5px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        transition: "transform 0.3s ease",
        transform: isOpen ? "translateX(0)" : "translateX(100%)",
      }}
    >
      <button
       className="m-4 text-white"
        onClick={onClose}
        style={{
          padding: "6px 10px",
        
          backgroundColor: isCartEmpty ? "#DB4444" : "#DB4444", // Change color for empty and non-empty cart
          color: isCartEmpty ? "#FFF" : "#FFF", // Change color for empty and non-empty cart
          border:"1px solid gray",
          borderRadius:"6%",
          cursor: "pointer",
        }}
      >
        Close Cart
      </button>

      <div style={{ padding: "16px" ,  height:"50%", }}>
    
        {isCartEmpty ? (
          <p
            style={{
              color: "#fff",
              display: "flex",
              alignItems: "center",
               height:"100%",
              justifyContent: "center",
            }}
            className="w-full flex items-center flex-col gap-2 "
          > 
          <Image src="/empty.gif" alt={"empty"} width={500} height={500}></Image>
         <span className="text-2xl font-extrabold cursiv text-orange-500 ">   Empty your Cart</span>
          </p>
        ) : (
          cartItems?.map((item) => (
            <div key={item.id} style={{ marginBottom: "8px" }} className="hover:border hover:bg-[#DB4444] items-center justify-center p-4 rounded-md ">
              <p>{item.name}</p>
              <p>${item.price.toFixed(2)}</p>
              {/* Add quantity controls, remove button, etc., as needed */}
            </div>
          ))
        )}
      </div>
      <div></div>
    </motion.div>
  );
};

export default Cart;
