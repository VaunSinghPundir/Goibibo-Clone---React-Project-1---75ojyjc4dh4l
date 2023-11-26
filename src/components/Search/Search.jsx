import React, { useState } from "react";
import "./Search.css";

export const Search = (props) => {
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const handleSubmit = () => {
    props.handleBtn(from, to);
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
        <button onClick={handleSubmit}>{props.buttonType}</button>
      </section>
    </div>
  );
};
