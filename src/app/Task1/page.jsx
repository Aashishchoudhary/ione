"use client";
import { useState } from "react";

function Page() {
  const [check, setChecked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [guest, setGuest] = useState("");
const [sub , setSub]= useState(false)
  const namefunc = (e) => {
    setName(e.target.value);
  };
  const emailfunc = (e) => {
    setEmail(e.target.value);
  };
  const guestfunc = (e) => {
    setGuest(e.target.value);
  };
  const agefunc = (e) => {
    if (e.target.value > 0) {
      setAge(e.target.value);
    } else {
      alert("age must be greator than zero");
    }
  };
  const handleClick = () => {
    setChecked(!check);
    console.log(!check);
  };
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const handleSubmit = () => {
    console.log(check, guest.trim().length, guest.trim());
    if (check && guest.trim().length < 1) {
      alert("please fill the guest field");
    }
    console.log("emial  ......", emailPattern.test(email.trim()));
    if (emailPattern.test(email.trim()) != true) {
      alert("please enter valid email");
    }

    if (name.trim().length < 1) {
      alert("please fill the name");
    }
    if (email.trim().length < 1) {
      alert("please fill the email");
    }
    if (age.trim().length < 1) {
      alert("please fill the age");
    }
setSub(true)
  };

  return (
    <>
    <div className="form-container text-align-center">
    <form className="styled-form">
      <div className="form-group">
        <input
          className="form-control"
          onChange={(e) => namefunc(e)}
          required
          value={name}
          placeholder="Name..."
          type="text"
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          onChange={(e) => emailfunc(e)}
          required
          placeholder="Email..."
          value={email}
          type="email"
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          onChange={(e) => agefunc(e)}
          required
          value={age}
          placeholder="Age..."
          type="number"
        />
      </div>
      <div className="form-group">
        <label className="form-check-label">
          <input
            className="form-check-input"
            onChange={() => handleClick()}
            checked={check}
            type="checkbox"
          />
          <span>
            Are you attending with a guest? If yes, then click the check mark
          </span>
        </label>
      </div>
      {check && (
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            onChange={(e) => guestfunc(e)}
            value={guest}
            placeholder="Guest name..."
          />
        </div>
      )}
      <div className="form-group">
        <input
          className="btn btn-primary"
          type="button"
          value="Submit"
          onClick={() => handleSubmit()}
        />
      </div>
    </form>
  </div>
  { sub &&<div className="data">
    <div className="para-div">
    <p>Name : {name}</p>
    <p>Email : {email}</p>
    <p>Age : {age}</p>
    {guest && <p>Guest Name : {guest}</p>}

    </div>
    </div>}
  </>
  );
}

export default Page;
