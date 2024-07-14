// React requires state to be immutable. If we want to change a state, we make a copy of it and replace the old state with the new copy. In React, it isn't allowed to change the original state array, so we can't use the push() method. We used the spread syntax (...) to unpack the elements of the existing array into a new array and added another value at the end.
import { useState } from "react";
import "./App13.css";
export default function App13() {
  const [student, setStudent] = useState({ name: "John", age: 3, city: "HYD" });
  const [students, setStudents] = useState([]);
  const upload = () => {
    setStudents((stored) => [...stored, student]);
  };
  return (
    <>
      <p>
        <input
          type="text"
          onChange={(e) =>
            setStudent((stored) => ({ ...stored, name: e.target.value }))
          }
          placeholder="Enter your name"
        />
      </p>
      <p>
        <input
          type="text"
          onChange={(e) =>
            setStudent((stored) => ({ ...stored, age: e.target.value }))
          }
          placeholder="Enter your age"
        />
      </p>
      <p>
        <input
          type="text"
          onChange={(e) =>
            setStudent((stored) => ({ ...stored, city: e.target.value }))
          }
          placeholder="Enter your city"
        />
      </p>
      <button type="button" onClick={upload}>
        Enter
      </button>
      <table border={1}>
        <th color="blue" colSpan={4}>
          Data Table
        </th>
        <tr>
          <th>S.no</th>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
        </tr>
        {students &&
          students.map((stud, idx) => (
            <tr>
              <td>{idx + 1}</td>
              <td>{stud.name}</td>
              <td>{stud.age}</td>
              <td>{stud.city}</td>
            </tr>
          ))}
      </table>
    </>
  );
}
