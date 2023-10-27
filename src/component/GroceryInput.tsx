import React, { useState } from "react";

const GroceryInput: React.FC<{ addItem: (inputValue: string) => void }> = ({
   addItem,
}) => {
   const [inputValue, setInputValue] = useState("");

   const handleAddItem = () => {
      if (inputValue.trim() === "") {
         window.alert("Please Provide Value");
      } else {
         addItem(inputValue);
         setInputValue("");
         window.alert("Item Added To The List");
      }
   };

   return (
      <div className="form-control">
         <input
            type="text"
            className="form-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
         />
         <button onClick={handleAddItem} className="btn">
            Add Item
         </button>
      </div>
   );
};

export default GroceryInput;
