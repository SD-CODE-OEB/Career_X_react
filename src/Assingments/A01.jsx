import React, { useState, useContext } from "react";
import "../Classes/App13.css";
import { UserContext } from "../context";

export default function A01() {
  const [product, setProduct] = useState();
  const [items, SetItems] = useState([]);
  const { loggedUser } = useContext(UserContext);
  let total = 0;
  items.map((item) => (total += item.price * item.quantity));
  const upload = () => {
    SetItems((prevs) => [...prevs, product]);
  };
  return (
    <div className="main">
      <h2>Welcome {loggedUser}</h2>
      <div className="p-container">
        <h1>Products</h1>
        <p>
          <input
            type="text"
            onChange={(e) =>
              setProduct((stored) => ({ ...stored, name: e.target.value }))
            }
            placeholder="Enter Name"
          />
        </p>
        <p>
          <input
            type="text"
            onChange={(e) =>
              setProduct((stored) => ({ ...stored, price: e.target.value }))
            }
            placeholder="Enter Price"
          />
        </p>
        <p>
          <input
            type="text"
            onChange={(e) =>
              setProduct((stored) => ({ ...stored, quantity: e.target.value }))
            }
            placeholder="Enter Quantity"
          />
        </p>
        <button type="button" onClick={upload} className="btn">
          Enter
        </button>
      </div>
      <table border={1}>
        <th color="blue" colSpan={4}>
          Data Table
        </th>
        <tr>
          <th>S.no</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
        {items &&
          items.map((item, idx) => (
            <tr>
              <td>{idx + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        <tr>
          <th>Total</th>
          <th colSpan={3}>{total}</th>
        </tr>
      </table>
    </div>
  );
}
