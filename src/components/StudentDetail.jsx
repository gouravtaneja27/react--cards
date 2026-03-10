import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const studentsData = [
    { id: 1, name: "Krish", age: 20, course: "BCA" },
    { id: 2, name: "Rahul", age: 22, course: "BTech" },
    { id: 3, name: "Priya", age: 21, course: "BBA" },
    { id: 4, name: "Karan", age: 23, course: "MBA" },
   
];

const StudentDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const student = studentsData.find((s) => s.id === parseInt(id));

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Student Details</h1>

            <h2>{student.name}</h2>
            <p>Age: {student.age}</p>
            <p>Course: {student.course}</p>

            <button
                onClick={() => navigate(-1)}
                style={{
                    marginTop: "20px",
                    padding: "8px 16px",
                    background: "#2563eb",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                }}
            >
                Back
            </button>
        </div>
    );
};

export default StudentDetail;