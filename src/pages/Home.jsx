import React from 'react'
import Video from '../components/Video'
import Hod from '../components/Hod'
import UpComingEvents from '../components/UpComingEvents'
import Footer from '../components/Footer';
import Dfooter from '../components/Dfooter';

function Home() {
  return (
    <div>
        <Video/>
        <Hod/>
        <section className="container mx-auto py-8 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
          What's New?
        </h2>
        <p className="text-base sm:text-lg text-gray-700">
          Check out the latest topics, events, and more in our forum.
        </p>
      </section>
        <UpComingEvents/>
        <Footer/>
        <Dfooter/>
    </div>
  )
}

export default Home