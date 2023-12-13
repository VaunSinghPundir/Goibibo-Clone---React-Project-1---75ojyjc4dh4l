import React, { useState } from "react";
import "./Search.css";

export const Search = (props) => {
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [day, setDay] = useState("Mon");
  const handleSubmit = () => {
    props.handleBtn(from, to, day);
  };
  return (
    <div>
      <section className="search-container">
        <section className="search-from">
          <input
            id="from"
            type="text"
            placeholder="From"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </section>
        <section className="search-to">
          <input
            id="to"
            type="text"
            placeholder="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </section>
        <section className="day">
        <select value={day} onChange={(e) => setDay(e.target.value)}>
          <option value="Mon">Monday</option>
          <option value="Tue">Tuesday</option>
          <option value="Wed">Wednesday</option>
          <option value="Thu">Thursday</option>
          <option value="Fri">Friday</option>
          <option value="Sat">Saturday</option>
          <option value="Sun">Sunday</option>
        </select>
        </section>
        <button onClick={handleSubmit}>{props.buttonType}</button>
      </section>
    </div>
  );
};
