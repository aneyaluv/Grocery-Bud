import React, { useState } from "react";

const GroceryList: React.FC<{
   groceryItems: string[];
   deleteItem: (inputValue: string) => void;
}> = ({ groceryItems, deleteItem }) => {
   const [checkedItems, setCheckedItems] = useState<string[]>([]);

   const handleCheckChange = (inputValue: string) => {
      if (checkedItems.includes(inputValue)) {
         setCheckedItems(checkedItems.filter((i) => i !== inputValue));
      } else {
         setCheckedItems(checkedItems.concat(inputValue));
      }
   };

   return (
      <div className="items">
         <div className="single-item">
            {groceryItems.map((inputValue, index) => (
               <React.Fragment key={index}>
                  <input
                     type="checkbox"
                     onChange={() => handleCheckChange(inputValue)}
                  />
                  <p
                     style={{
                        textDecoration: checkedItems.includes(inputValue)
                           ? "line-through"
                           : "none",
                        textTransform: "capitalize",
                     }}>
                     {inputValue}
                  </p>
                  <button
                     type="button"
                     onClick={() => deleteItem(inputValue)}
                     className="btn remove-btn">
                     Delete
                  </button>
               </React.Fragment>
            ))}
         </div>
      </div>
   );
};

export default GroceryList;
