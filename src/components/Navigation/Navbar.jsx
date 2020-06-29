import React, { useState, useRef, useEffect } from 'react'
import { makeStyles, Box, Container, Grid, Hidden } from '@material-ui/core'
import throttle from 'lodash/throttle'
import logo from '../../assets/images/logo.svg'
import NavLinks from './NavLinks'
import Toggle from './Toggle'

const useStyles = makeStyles(theme => ({
  navbar: {
    height: '7rem',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    color: 'white',
    backgroundColor: 'transparent',
    transition: 'all 0.4s',
    zIndex: 100,
    '&.move-up-nav': {
      transform: 'translateY(-110%)'
    },
    '&.with-bg-color': {
      backgroundColor: theme.palette.primary.main,
      boxShadow: '0 2px 3px rgba(0, 0, 0, 0.3)'
    }
  },
  navContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    height: '5rem'
  }
}))

const Navbar = ({ toggleSideDrawer }) => {
  const classes = useStyles()
  const navElement = useRef(null)

  useEffect(() => {
    let lastScrollPosition = window.pageYOffset
    const handleWindowScroll = () => {
      let currentScrollPosition = window.pageYOffset
      // for adding bg-color
      if (currentScrollPosition > 250) {
        navElement.current.classList.add('with-bg-color')
      } else {
        navElement.current.classList.remove('with-bg-color')
      }
      // for moving nav up
      if (currentScrollPosition > lastScrollPosition) {
        navElement.current.classList.add('move-up-nav')
      } else {
        navElement.current.classList.remove('move-up-nav')
      }
      lastScrollPosition = currentScrollPosition
    }
    window.addEventListener('scroll', throttle(handleWindowScroll, 100))
  }, [])

  return (
    <nav ref={navElement} className={classes.navbar}>
      <Container className={classes.navContainer}>
        <Hidden mdUp>
          <Toggle onToggle={toggleSideDrawer} />
        </Hidden>
        <img src={logo} className={classes.logo} />
        <Hidden smDown>
          <NavLinks />
        </Hidden>
      </Container>
    </nav>
  )
}

export default Navbar
