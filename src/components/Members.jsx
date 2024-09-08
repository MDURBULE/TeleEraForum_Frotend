import React from 'react';

function MembersCard({ Members }) { // Renamed component to avoid conflicts
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-2xl transition-shadow duration-200 text-center">
      <img
        src={Members.imageUrl}
        alt={Members.name}
        className="h-40 w-40 object-cover rounded-full mx-auto mb-4 hover:shadow-xl transition-shadow duration-900"
      />
      <h3 className="text-xl font-bold text-blue-600">{Members.name}</h3>
      <p className="text-gray-700">{Members.post}</p>
      <p className="text-sm text-gray-500">{Members.branch}</p>
      {/* Uncomment these if you need to display more information */}
      <p className="text-gray-600 mt-2">{Members.bio}</p>
    </div>
  );
}

export default MembersCard;
