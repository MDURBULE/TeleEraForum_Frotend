import React, { useState, useEffect } from 'react';  // Import useState and useEffect
import EventCard from '../components/EventCard';
import { Link } from 'react-router-dom';
import axios from 'axios';  // Import axios
import Loader from '../components/Loader';

function Events() {
  const [events, setEvents] = useState([]); 
  const [loader , setLoader] = useState(true);
  
  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const result = await axios.get("https://teleera.onrender.com/completedevent/events");
      setEvents(result.data); 
      setLoader(false);
    } catch (error) {
      console.error("There was an error loading the events:", error);
    }
  };
 

  return (
    <div className="container mx-auto px-4 pt-10 md:px-20 my-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Completed Events</h1>
      {
        loader ? (
          <Loader/>
        ):events.length==0 ?(
          <div className="container mx-auto px-4 pt-10 md:px-20 my-10"><p>No Members found ! .</p></div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <Link to={`/completedEvent/${event.id}`} key={event.id} state={{ event }}>
            <EventCard event={event} />
          </Link>
        ))}
      </div>
        )
      }
    </div>
  );
}

export default Events;
