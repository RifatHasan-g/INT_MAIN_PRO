import React from "react";
import { useRef } from "react";

const AddUser = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const handleAddUser = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;

    const newUser = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("successfully add");
          e.target.reset();
        }
      });
    // console.log(nameRef.current.value, emailRef.current.value);
  };
  return (
    <div className="formIN">
      <h2>ADD_USER</h2>
      <form onSubmit={handleAddUser}>
        <input
          className="input"
          type="text"
          placeholder="Enter Your Name"
          ref={nameRef}
        />
        <br />
        <input
          className="input "
          type="email"
          name=""
          id=""
          placeholder="Enter Your Email"
          ref={emailRef}
        />{" "}
        <br />
        <input id="btn" type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddUser;
