import React, { useState } from 'react';

function EventCard({ event }) {

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={event.imageUrl[0]}  // Fixed index reference
          alt={event.title}
        />
        
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{event.eventName}</h2>
        <p className="text-gray-600 mb-4">{event.date}</p>
        <p className="text-gray-700">{event.description}</p>
      </div>
    </div>
  );
}

export default EventCard;
