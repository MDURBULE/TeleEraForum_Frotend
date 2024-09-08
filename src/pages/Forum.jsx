import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import MembersCard from '../components/Members'; // Use the correct component name
import axios from 'axios';
import Loader from '../components/Loader';

function Forum() {
  const [members, setMembers] = useState([]); // Initialize as an empty array
  const [loading , setLoading] = useState(true);
  
  useEffect(() => {
    loadMembers();
  }, []);

  const loadMembers = async () => {
    const result = await axios.get("http://localhost:8080/fmembers/members");
    setMembers(result.data); // Access the data from the response
    setLoading(false);
  };

  
  return (
    <div className="container mx-auto px-4 pt-10 md:px-20 my-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Student Forum</h1>

      <div className='flex justify-center'>
      <h2 className="text-2xl font-semibold mt-2 mb-6 underline">Meet the Team</h2>
      </div>
     
      {
        loading ? (
          <Loader/>
        ) : members.length==0 ?(
          <div className="container mx-auto px-4 pt-10 md:px-20 my-10"><p>No Members found ! .</p></div>
        ):(
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {members.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: -50 }} // Start slightly above with opacity 0
            animate={{ opacity: 1, y: 0 }} // Animate to full opacity and y=0 (original position)
            transition={{ duration: 0.5, delay: index * 0.2 }} // Stagger animation for each card
            className="flex justify-center"
          >
            <MembersCard Members={member} /> {/* Pass the member data to the component */}
          </motion.div>
        ))}
      </div>
        )
      }
    </div>
  );
}

export default Forum;
