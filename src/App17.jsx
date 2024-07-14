import React from "react";
// Here, we have two arrays and two objects. We use the spread operator to combine the arrays and objects. We can also add new properties to the object using the spread operator.
export default function App17() {
  const arr1 = [1, 4, 5];
  const arr2 = [6, 7, 8];
  const obj1 = { name: "John" };
  const obj2 = { age: 30 };
  const newArr = [...arr1, ...arr2];
  //   const student = {...obj1,...obj2}
  const student = { ...obj1, ...obj2, city: "Dubai" };
  return (
    <div>
      <p>{newArr}</p>
      <p>
        {student.name},{student.age},{student.city}
      </p>
    </div>
  );
}
