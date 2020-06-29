import React, { useState } from 'react'
import Navbar from './Navbar'
import SideDrawer from './SideDrawer'

const Navigation = props => {
  const [showingSideDrawer, setShowingSideDrawer] = useState(false)

  const toggleSideDrawer = () => {
    setShowingSideDrawer(showingSideDrawer => !showingSideDrawer)
  }

  const closeSideDrawer = () => setShowingSideDrawer(false)

  return (
    <>
      <Navbar toggleSideDrawer={toggleSideDrawer} />
      <SideDrawer
        showing={showingSideDrawer}
        closeSideDrawer={closeSideDrawer}
      />
    </>
  )
}

export default Navigation
