import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

// Dummy data for event details


const EventDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const {event} = location.state ||{};
 

  if (!event) return <div>Event not found.</div>;

  return (
    <div className='flex flex-col md:flex-row'>
      <div className="container mx-auto px-4 pt-10 md:px-20 my-10">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6">{event.eventName}</h1>
        <p className="text-gray-700 text-lg mb-4">{event.date}</p>
        <p className="text-gray-700 text-lg mb-4">{event.location}</p>
        <p className="text-gray-600 mb-8">{event.description}</p>
      </motion.div>
    </div>
    <div className='container mx-auto px-4 pt-10 md:px-5 my-10 mr-8'>
        <div>
        <h1 className="text-4xl font-bold mb-6">Poster Of Event</h1>
            <img src={event.imageUrl} alt="event image" className='w-full h-auto object-cove'/>
        </div>
    </div>
    </div>
  );
};

export default EventDetail;
