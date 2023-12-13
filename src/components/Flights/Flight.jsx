import React, { useState } from "react";
import "./Flight.css";
import { Search } from "../Search/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";
export const Flight = () => {
  const [flightList, setFlightList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const config = {
    headers: {
      projectID: "f104bi07c490",
    },
  };
  function handleBtn(from, to, day) {
    try {
      axios
        .get(
          `https://academics.newtonschool.co/api/v1/bookingportals/flight/?search={"source":"${from}","destination":"${to}"}&day=${day}"`,
          config
        )
        .then((res) => {
          setFlightList(res.data.data.flights);
          console.log(res.data.data.flights);
        });
    } catch (err) {
      console.log("Error: ", err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Search buttonType="Search Flight" handleBtn={handleBtn} />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <section>
          {
            flightList?.map((data) => {
              return (
                <div key={data._id} className="Card-container">
                  <section className="flight-cards">
                    <div className="flight-dep">
                      <p>{data.source}</p>
                      <aside>{data.departureTime}</aside>
                    </div>
                    <div>
                      <p>duration</p>
                      <aside>{data.duration}</aside>
                    </div>
                    <div className="flight-ariv">
                      <p>{data.destination}</p>
                      <aside>{data.arrivalTime}</aside>
                    </div>
                    <div className="prices">
                      <FontAwesomeIcon icon={faIndianRupeeSign} />
                      {data.ticketPrice}
                    </div>
                  </section>
                </div>
              );
            })}
        </section>
      )}
    </>
  );
};
