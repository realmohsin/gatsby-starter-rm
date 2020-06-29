import React, { useState, useRef, useEffect } from 'react'
import { makeStyles, Box } from '@material-ui/core'

// add CSStransition to subnavs

const useStyles = makeStyles(theme => ({
  navLink: {
    margin: '0 1rem',
    padding: '0 1rem',
    position: 'relative'
  },
  subNav: {
    position: 'absolute',
    top: '100%',
    left: '-20%',
    width: '12rem',
    '& li': {
      padding: '1rem 0',
      textAlign: 'center'
    }
  }
}))

const NavLinks = props => {
  const classes = useStyles()
  const [subTab, setSubTab] = useState(null)

  const createEnterHandler = num => e => setSubTab(num)

  const handleMouseLeave = e => setSubTab(null)

  return (
    <Box component='ul' display='flex'>
      <li
        className={classes.navLink}
        onMouseEnter={createEnterHandler(1)}
        onMouseLeave={handleMouseLeave}
      >
        Nav Item 1
        {subTab === 1 && (
          <ul className={classes.subNav}>
            <li>Sub Nav Item 1</li>
            <li>Sub Nav Item 2</li>
            <li>Sub Nav Item 3</li>
            <li>Sub Nav Item 4</li>
          </ul>
        )}
      </li>
      <li
        className={classes.navLink}
        onMouseEnter={createEnterHandler(2)}
        onMouseLeave={handleMouseLeave}
      >
        Nav Item 2
        {subTab === 2 && (
          <ul className={classes.subNav}>
            <li>Sub Nav Item 1</li>
            <li>Sub Nav Item 2</li>
            <li>Sub Nav Item 3</li>
            <li>Sub Nav Item 4</li>
          </ul>
        )}
      </li>
      <li
        className={classes.navLink}
        onMouseEnter={createEnterHandler(3)}
        onMouseLeave={handleMouseLeave}
      >
        Nav Item 3
        {subTab === 3 && (
          <ul className={classes.subNav}>
            <li>Sub Nav Item 1</li>
            <li>Sub Nav Item 2</li>
            <li>Sub Nav Item 3</li>
            <li>Sub Nav Item 4</li>
          </ul>
        )}
      </li>
      <li
        className={classes.navLink}
        onMouseEnter={createEnterHandler(4)}
        onMouseLeave={handleMouseLeave}
      >
        Nav Item 4
        {subTab === 4 && (
          <ul className={classes.subNav}>
            <li>Sub Nav Item 1</li>
            <li>Sub Nav Item 2</li>
            <li>Sub Nav Item 3</li>
            <li>Sub Nav Item 4</li>
          </ul>
        )}
      </li>
    </Box>
  )
}

export default NavLinks
