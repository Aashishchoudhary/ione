"use client";
import { urlToUrlWithoutFlightMarker } from "next/dist/client/components/app-router";
import { useState } from "react";

function page() {
  const [check, setChecked] = useState(false);
  const [check2, setChecked2] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [guest, setGuest] = useState("");
  const [exp, setExp] = useState("");
  const [url, setUrl] = useState("");
  const [manager, setManager] = useState("");
  const [sub, setSub] = useState(false);
  const [position, setPosition] = useState("developer");
  const [date, setDate] = useState("");

  const namefunc = (e) => {
    setName(e.target.value);
  };
  const emailfunc = (e) => {
    setEmail(e.target.value);
  };
  const guestfunc = (e) => {
    setGuest(e.target.value);
  };
  const expfunc = (e) => {
    if (e.target.value < 1) {
      setExp("");
      alert("exprience should be greator than 0 years");
    } else {
      setExp(e.target.value);
    }
  };
  const designerfunc = (e) => {
    setUrl(e.target.value);
  };
  const managerfunc = (e) => {
    if (e.target.value < 1) {
      setManager("");
      alert("exprience should be greator than 0 years");
    } else {
      setManager(e.target.value);
    }
  };
  const phonefunc = (e) => {
    setPhone(e.target.value);
  };
  const handleClick = () => {
    setChecked(!check);
  };
  const handleClick2 = () => {
    setChecked2(!check2);
  };

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = () => {
    
    if (
      name.trim().length < 1 ||
      email.trim().length < 1 ||
      
      
      
      date.length < 1
    ) {
      alert("please fill all the form");
      setSub(false);
    }
      else if(phone.trim().length ==10 ){
        alert("phone number is not valid")
        setSub(false)
    } else if (emailPattern.test(email.trim()) != true) {
      alert("please enter valid email");
      setSub(false);
    } else if (position == "designer") {
      if (!new URL(url.trim())) {
        alert("please Enter Valid Url");
      }

      setSub(false);
    } else if ((check != false || check2 != false) == false) {
      alert("minimum one skill is required");
      setSub(false);
    } else {
      setSub(true);
    }
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
              onChange={(e) => phonefunc(e)}
              required
              value={phone}
              placeholder="Phone Number..."
              type="number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cars">Apply for Position:</label>
            <select
              onChange={(e) => setPosition(e.target.value)}
              name="position"
              id="position"
            >
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">manager</option>
            </select>
          </div>
          {position != "manager" && (
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                onChange={(e) => expfunc(e)}
                value={exp}
                placeholder="Relative exprience..."
              />
            </div>
          )}
          {position == "designer" && (
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                onChange={(e) => designerfunc(e)}
                value={url}
                placeholder="Portfolio Url..."
              />
            </div>
          )}
          {position == "manager" && (
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                onChange={(e) => managerfunc(e)}
                value={manager}
                placeholder="Management Exprience..."
              />
            </div>
          )}
          <div className="form-group">
            <label className="form-check-label">
              <input
                className="form-check-input"
                onChange={() => handleClick()}
                checked={check}
                type="checkbox"
              />
              <span>CSS</span>
            </label>
          </div>
          <div className="form-group">
            <label className="form-check-label">
              <input
                className="form-check-input"
                onChange={() => handleClick2()}
                checked={check2}
                type="checkbox"
              />
              <span>HTML</span>
            </label>
          </div>

          <div className="form-group">
            <input
              className="form-control"
              type="datetime-local"
              onChange={(e) => setDate(e.target.value)}
              value={date}
              placeholder="Date..."
            />
          </div>

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
      {sub && (
        <div className="data">
          <div className="para-div">
            <p>Name : {name}</p>
            <p>Email : {email}</p>
            <p>Phone Number : {phone}</p>
            <p>Expirence : {exp || manager}</p>
            {url && <p>URL : {url}</p>}
            <p>
              Skills :{check && "CSS"} {check2 && "HTML"}
            </p>
            <p>Date-Time: {date}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default page;
