import React, { useState } from "react";
import { Button } from "react-bootstrap";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    // console.log(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    // console.log(e.target.value);
  };
  const handleNewAdmin = (e) => {
      const data = { email, password };
    //   console.log(data);

    fetch("http://localhost:5000/admin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        if (result.insertedId) {
          setSuccess(true);
        }
      });

    e.preventDefault();
  };

  return (
    <div className="text-center mt-3">
      <h2>Make an Admin</h2>
      {success && (
        <div className="border border-2 border-success rounded-3 text-center mb-3 w-50 mx-auto">
          <p className="mt-3">
            <i className="far fa-check-circle text-warning"></i> Successfully
            added new Admin.
          </p>
        </div>
      )}
      <form onSubmit={handleNewAdmin}>
        <input
          className="w-50"
          label="Email"
          type="email"
          onBlur={handleEmail}
          variant="secondary"
        />{" "}
        <br />
        <input
          className="mt-3 w-50"
          label="password"
          type="password"
          onBlur={handlePassword}
          variant="secondary"
        />{" "}
        <br />
        <Button
          type="submit"
          className="mt-3 w-50"
          variant="secondary"
          size="sm"
        >
          Add New Admin
        </Button>
      </form>
    </div>
  );
};

export default MakeAdmin;
