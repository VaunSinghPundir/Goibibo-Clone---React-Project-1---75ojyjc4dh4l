import React, { useState } from 'react'
import './Bus.css'
import { getHeaderProjectId } from '../../utils/headerId';
import axios from 'axios';
import { Search } from '../Search/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';

export const Bus = () => {

    const [isBusList, setIsBusList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [day, setDay] = useState('Mon')

    const config = getHeaderProjectId();
    

    function handleBtn (from, to, day) {
        try{
            axios.get(` https://academics.newtonschool.co/api/v1/bookingportals/bus?search={"source":"${from}","destination":"${to}"}&day=${day}`
            ,config
            ).then((res)=>{
                setIsBusList(res.data.data.buses);
                console.log(res.data.data.buses);
            })
        }catch(err){
            console.log("Error: ",err)
        }
    }

  return (
    <>
          <Search buttonType="Search Bus" handleBtn={handleBtn} />

          {
            isLoading ? (
            <div>Loading...</div>
            ) : (
                    <section>
                        {isBusList?.map((data)=>{
                            return (
                                <div key={data._id} className="Card-container">
                                  <section className="bus-cards">
                                    <div className='bus-name'>
                                        <p>{data.name}</p>
                                        <span>{data.type}</span>
                                    </div>
                                    <div className="bus-dep">
                                      <p>{data.source}</p>
                                      <aside>{data.departureTime}</aside>
                                    </div>
                                    <div>
                                      {/* <p>duration</p>
                                      <aside>{data.duration}</aside> */}
                                    </div>
                                    <div className="bus-ariv">
                                      <p>{data.destination}</p>
                                      <aside>{data.arrivalTime}</aside>
                                    </div>
                                    <div className="prices">
                                      <FontAwesomeIcon icon={faIndianRupeeSign} />
                                      {data.fare}
                                    </div>
                                    <div>
                                        <p>total {data.seats} seats</p>
                                    </div>
                                  </section>
                                  
                                </div>
                              );
                        })
                        }
                    </section>
               
            )
          }
    </>
  )
}
