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
        <div className="text-center p-10 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-semibold mb-6">Student List</h1>

            <input
                type="text"
                placeholder="Search student..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="px-4 py-2 w-[250px] mb-8 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />

            {filteredStudents.length === 0 ? (
                <p className="text-red-500 text-lg font-medium">No Results Found</p>
            ) : (
                <div className="flex gap-5 justify-center flex-wrap">
                    {filteredStudents.map((student) => (
                        <div
                            key={student.id}
                            className="w-[220px] p-5 rounded-xl shadow-md bg-white"
                        >
                            <div className="w-[50px] h-[50px] rounded-full bg-blue-500 text-white flex items-center justify-center mx-auto mb-3 font-bold">
                                {student.name[0]}
                            </div>

                            <h3 className="text-lg font-semibold">{student.name}</h3>
                            <p className="text-gray-600">Age: {student.age}</p>
                            <p className="text-gray-600 mb-3">Course: {student.course}</p>

                            <Link to={`/student/${student.id}`}>
                                <button className="bg-green-600 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default StudentList;