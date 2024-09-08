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
        <UpComingEvents/>
        <Footer/>
        <Dfooter/>
    </div>
  )
}

export default Home