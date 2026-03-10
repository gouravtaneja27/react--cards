// import React, { useState } from "react";

// function MyForm() {
//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         password: "",
//     });

//     const [image, setImage] = useState(null);

//     // Input change handle
//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     // Image handle
//     const handleImage = (e) => {
//         setImage(e.target.files[0]);
//     };

//     // Password check
//     const isPasswordStrong = formData.password.length >= 6;

//     // Check form complete
//     const isFormValid =
//         formData.firstName &&
//         formData.lastName &&
//         formData.email &&
//         formData.password &&
//         image;

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert("Form Submitted Successfully ✅");
//     };

//     return (
//         <div style={{ width: "300px", margin: "auto" }}>
//             <h2>Registration Form</h2>

//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="firstName"
//                     placeholder="First Name"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                 />
//                 <br /><br />

//                 <input
//                     type="text"
//                     name="lastName"
//                     placeholder="Last Name"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                 />
//                 <br /><br />

//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                 />
//                 <br /><br />

//                 {/* Password + Status */}
//                 <div style={{ display: "flex", alignItems: "center" }}>
//                     <input
//                         type="password"
//                         name="password"
//                         placeholder="Password"
//                         value={formData.password}
//                         onChange={handleChange}
//                     />
//                     <span style={{ marginLeft: "10px" }}>
//                         {formData.password &&
//                             (isPasswordStrong ? "Working ✅" : "Weak ❌")}
//                     </span>
//                 </div>
//                 <br />

//                 {/* Image Upload */}
//                 <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImage}
//                 />
//                 <br /><br />

//                 <button type="submit" disabled={!isFormValid}>
//                     Submit
//                 </button>
//             </form>
//         </div>
//     );
// }

// export default MyForm;
