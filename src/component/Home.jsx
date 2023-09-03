import React from 'react'
import SideBar from './SideBar.jsx'
import HomePage from './HomePage.jsx'
import RightSideBar from './RightSideBar.jsx'
const Home = () => {
  return (
    <div>
      <SideBar/>
      <HomePage />
      <RightSideBar />
    </div>
  )
}

export default Home