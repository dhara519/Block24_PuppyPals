// import { useState } from 'react'
import { useState } from "react";
import "./App.css";
import { puppyList } from "./data.js";

function App() {
  // useState  returns an array containing two elements: the value ur storing and a function which you use to reset the value
  // Always rmr to pass your useState hook a default
  // eslint-disable-next-line no-unused-vars
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  //  onClick ={} needs a function passed in. you can add a blank one like onClick={() => {}} or declare a regular function (){} above and pass that through.
  //  Each child in a list should have a unique "key" prop. (line 23)
  return (
    <>
      <div>
        {puppies.map((puppy) => {
          return (
            <p
              className="names"
              onClick={() => {
                setFeatPupId(puppy.id);
              }}
              key={puppy.id}
            >
              {puppy.name}
            </p>
          );
        })}
        {console.log(featuredPup)}
        <p>
          {" "}
          {featPupId && (
            <div>
              <h2 className="featPup">{featuredPup.name}</h2>
              <ul className="featPupBio">
                <li>Age: {featuredPup.age}</li>
                <il>Email: {featuredPup.email}</il>
              </ul>
            </div>
          )}{" "}
        </p>
      </div>
    </>
  );
}

export default App;
