"use client";

import { useState } from "react";

function Page() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [position, setPosition] = useState('technology');
  const [lang , setLang]= useState('py')
  const [exercise , setExercise]= useState('daily')
  const [diet , setDiet]= useState('veg')
  const [edu , setEdu]= useState('high')
  const [exp, setExp] = useState("");
  const [feedback , setFedback]= useState('')
  const [field , setField] = useState('')


  const [sub, setSub] = useState(false);
 

  const namefunc = (e) => {
    setName(e.target.value);
  };
  const emailfunc = (e) => {
    setEmail(e.target.value);
  };
  
  const expfunc = (e) => {
    if (e.target.value < 1) {
      setExp("");
      alert("exprience should be greator than 0 years");
    } else {
      setExp(e.target.value);
    }
  };
  
  
  
 
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = () => {
    
    if (
      name.trim().length < 1 ||
      email.trim().length < 1 
    ) {
      alert("please fill all the form");
      setSub(false);
    }
     else if (emailPattern.test(email.trim()) != true) {
      alert("please enter valid email");
      setSub(false);
    }else if(feedback.trim().length<50){
alert('Feedback hould be greator than 50 words')
    } 
    else {
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
            <label htmlFor="cars">Survey Topic:</label>
            <select
              onChange={(e) => setPosition(e.target.value)}
              name="position"
              id="position"
            >
              <option value="technology">Technology</option>
              <option value="health">Health</option>
              <option value="education">Education</option>
            </select>
          </div>
          
         
          {position =='technology' && <><div className="form-group">
            <label htmlFor="cars">Survey Topic:</label>
            <select
              onChange={(e) => setLang(e.target.value)}
              name="lang"
              id="lang"
            >
              <option value="py">Python</option>
              <option value="js">JAVASCRIPT</option>
              <option value="java">JAVA</option>
            </select>
          </div> <div className="form-group">
              <input
                className="form-control"
                type="text"
                onChange={(e) => expfunc(e)}
                value={exp}
                placeholder="Relative exprience..."
              />
            </div> </>}
            {position =='health' && <><div className="form-group">
            <label htmlFor="cars">Excrise Frequency:</label>
            <select
              onChange={(e) => setExercise(e.target.value)}
              name="lang"
              id="lang"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="rarely">Rarely</option>
            </select>
          </div> <div className="form-group">
            </div> </>}
            {position =='health' && <><div className="form-group">
            <label htmlFor="cars">Excrise Frequency:</label>
            <select
              onChange={(e) => setDiet(e.target.value)}
              name="lang"
              id="lang"
            >
              <option value="veg">veg</option>
              <option value="vegan">Vegan</option>
              <option value="non-veg">non-veg</option>
              
            </select>
          </div> </>}
          {position =='education' && <><div className="form-group">
            <label htmlFor="cars">Survey Topic:</label>
            <select
              onChange={(e) => setEdu(e.target.value)}
              name="lang"
              id="lang"
            >
              <option value="high">High-School</option>
              <option value="phd">PhD</option>
              <option value="bachlors">BACHLORS</option>
              <option value="Masters">Masters</option>
            </select>
          </div> <div className="form-group">
              <input
                className="form-control"
                type="text"
                onChange={(e) => setField(e.target.value)}
                value={field}
                placeholder="Study field..."
              />
            </div> </>}
       
            <div className="form-group">
              <input
                className="form-control"
                type="textarea"
                onChange={(e) => setFedback(e.target.value)}
                value={feedback}
                placeholder="Feedback more than 50 words..."
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
    //  
     {sub && (
        <div className="data">
          <div className="para-div">
            <p>Name : {name}</p>
            <p>Email : {email}</p>
            <p>Survey Topic :{position}</p>
            {position=='technology'&&<p>Fav Programming Language :{lang}</p>}
            {position=='technology'&&<p>Years Experience :{exp}</p>}
            {position=='health'&&<p>Exercise Frequency :{exercise}</p>}
            {position=='health'&&<p>Diet Preference :{diet}</p>}
            {position=='education'&&<p>Higest Qualification :{edu}</p>}
            {position=='education'&&<p>Field of Study :{field}</p>}
            <p>Feedback :{feedback}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Page;
