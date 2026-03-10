// import React, { useState } from "react";

// function TodoList() {

//   // 1️⃣ useState se ek array bana diya (dummy data)
//   const [items, setItems] = useState([
//     "Learn React",
//     "Practice JavaScript",
//     "Build Projects"
//   ]);

//   // 2️⃣ Ek function banaya jo new item add karega
//   const addItem = () => {
//     setItems([...items, "New Task"]);
//   };

//   return (
//     <div>
//       <h2>My Todo List</h2>

//       {/* 3️⃣ map se array ko print kar rahe hain */}
//       {items.map((item, index) => (
//         <p key={index}>{item}</p>
//       ))}

//       <button onClick={addItem}>Add Item</button>
//     </div>
//   );
// }

// export default TodoList;
