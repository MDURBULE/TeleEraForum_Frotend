import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

function CompletedEventDetail() {
  const { id } = useParams();  // Retrieve the event ID from the URL
  const location = useLocation();
  const { event } = location.state || {};  // Access the passed event data

  if (!event) {
    return <div className="container mx-auto px-4 pt-10 md:px-20 my-10"><p>Event not found.</p></div> ;
  }

  return (
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {event.imageUrl.map((imageUrl, index) => (
            <motion.div
              key={index}
              className="rounded overflow-hidden shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <img
                src={imageUrl}
                alt={`Event ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default CompletedEventDetail;
