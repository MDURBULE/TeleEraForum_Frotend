import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import { useFormState } from 'react-hook-form';



const UpComingEvents = () => {

  const [events , setEvents] = useState([]);
  const [loader , setLoader] = useState(true);


  useEffect(()=>{
    eventLoader();
  },[])

  const eventLoader = async()=>{
    try{
      const result = await axios.get("http://localhost:8080/upcommingEvents/events");
      setEvents(result.data);
      setLoader(false);
    }catch(error){
      console.error("something went wrong : ",error);
    }

  }
  
  
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Upcoming Events</h2>
        {
          loader ? (
              <Loader/>
          ):events.length==0 ? (
            <div className="container mx-auto px-4 pt-10 md:px-20 my-10"><p>No Upcomming events found.</p></div>
          ):(
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map(event => (
              <div
                key={event.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
              >
                <Link to={`/event/${event.id}`} key={event.id} state={{event}}>
                  <div className="relative h-72 w-full">
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.eventName}</h3>
                    <p className="text-gray-600 text-sm mb-4">{event.date}</p>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          )
        }
      </div>
    </section>
  );
};

export default UpComingEvents;
