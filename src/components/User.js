import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Fade } from "react-bootstrap";
import { BiUserCircle } from "react-icons/bi";

const User = () => {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      {users.map((user) => (
        <div key={user.id} className="card-container">
          <img
            className="round"
            src="https://uctlanguagecentre.com/wp-content/uploads/2020/05/avatar.png"
            alt="user"
          />
          <h3>{user.name}</h3>
          <h6>{user.username}</h6>
          <h5>{user.phone}</h5>
          <p>{user.email}</p>
          <h3>{user.website}</h3>

          <p>
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="address"
              aria-expanded={open}
              className="primary"
            >
              More details
            </Button>
          </p>
          <Fade in={open}>
            <div className="address" id="address">
              <h6>My Address</h6>
              <table>
                <tr>
                  <td>
                    <strong>Street: </strong>
                  </td>
                  <td>{user.address.street}</td>
                  <td>
                    <strong>Suite: </strong>
                  </td>
                  <td>{user.address.suite}</td>
                </tr>
                <tr>
                  <td>
                    <strong>City:</strong>
                  </td>
                  <td>{user.address.city}</td>
                  <td>
                    <strong>ZipCode: </strong>
                  </td>
                  <td>{user.address.zipcode}</td>
                </tr>
                <tr>
                  <td>
                    <strong>GEO-lat: </strong>
                  </td>
                  <td>{user.address.geo.lat}</td>
                  <td>
                    <strong>GEO-ing: </strong>
                  </td>
                  <td>{user.address.geo.lng}</td>
                </tr>
              </table>
            </div>
          </Fade>
          <Fade in={open}>
            <div className="company" id="company">
              <h6>My Company</h6>
              <table>
                <tr>
                  <td>
                    <strong>Name:</strong>
                  </td>
                  <td>{user.company.name}</td>
                </tr>
                <tr>
                  <td>
                    <strong>catchPhrase: </strong>
                  </td>
                  <td>{user.company.catchPhrase}</td>
                </tr>
                <tr>
                  <td>
                    <strong>bs:</strong>
                  </td>
                  <td>{user.company.bs}</td>
                </tr>
              </table>
            </div>
          </Fade>
        </div>
      ))}
    </>
  );
};
export default User;
