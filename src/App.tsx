import React, { useState, useEffect } from "react";
import GroceryInput from "./component/GroceryInput.tsx";
import GroceryList from "./component/GroceryList.tsx";

const App: React.FC = () => {
   const initialGroceryItems: string[] = JSON.parse(
      localStorage.getItem("groceryItems") || "[]"
   );

   const [groceryItems, setGroceryItems] =
      useState<string[]>(initialGroceryItems);

   useEffect(() => {
      localStorage.setItem("groceryItems", JSON.stringify(groceryItems));
   });

   //passed as props to GroceryInput
   const addItem = (inputValue: string) => {
      setGroceryItems(groceryItems.concat(inputValue));
   };

   //passed as props to GroceryList
   const deleteItem = (inputValue: string) => {
      const updatedItems = groceryItems.filter(
         (groceryItems) => groceryItems !== inputValue
      );
      setGroceryItems(updatedItems);

      window.alert(`Item ${inputValue} has been deleted from the grocery list`);
   };

   return (
      <div>
         <section className="section-center">
            <div className="Toastify"></div>
            <form>
               <h4>Grocery Bud</h4>
               <GroceryInput addItem={addItem} />
            </form>
            <GroceryList groceryItems={groceryItems} deleteItem={deleteItem} />
         </section>
      </div>
   );
};

export default App;
