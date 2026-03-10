import React, { useState } from "react";
import { Link } from "react-router-dom";

const studentsData = [
    { id: 1, name: "Krish", age: 20, course: "BCA" },
    { id: 2, name: "sourabh", age: 22, course: "BTech" },
    { id: 3, name: "Priya", age: 21, course: "BBA" },
    { id: 4, name: "Karan", age: 23, course: "MBA" },
  
];

const StudentList = () => {
    const [search, setSearch] = useState("");

    const filteredStudents = studentsData.filter((student) =>
        student.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div style={{ textAlign: "center", padding: "40px" }}>
            <h1>Student List</h1>

            <input
                type="text"
                placeholder="Search student..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                    padding: "10px",
                    width: "250px",
                    marginBottom: "30px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                }}
            />

            <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
                {filteredStudents.map((student) => (
                    <div
                        key={student.id}
                        style={{
                            width: "220px",
                            padding: "20px",
                            borderRadius: "10px",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                            background: "#fff",
                        }}
                    >
                        <div
                            style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                                background: "#3b82f6",
                                color: "#fff",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                margin: "0 auto 10px",
                                fontWeight: "bold",
                            }}
                        >
                            {student.name[0]}
                        </div>

                        <h3>{student.name}</h3>
                        <p>Age: {student.age}</p>
                        <p>Course: {student.course}</p>

                        <Link to={`/student/${student.id}`}>
                            <button>View Details</button>
                        </Link>
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default StudentList;