import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'gatsby'
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
            <li>
              <Link to={`/Page-${1}`}>Page 1</Link>
            </li>
            <li>
              <Link to={`/Page-${2}`}>Page 2</Link>
            </li>
            <li>
              <Link to={`/Page-${3}`}>Page 3</Link>
            </li>
            <li>
              <Link to={`/Page-${4}`}>Page 4</Link>
            </li>
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
            <li>
              <Link to={`/Page-${5}`}>Page 5</Link>
            </li>
            <li>
              <Link to={`/Page-${6}`}>Page 6</Link>
            </li>
            <li>
              <Link to={`/Page-${7}`}>Page 7</Link>
            </li>
            <li>
              <Link to={`/Page-${8}`}>Page 8</Link>
            </li>
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
            <li>
              <Link to={`/Page-${9}`}>Page 9</Link>
            </li>
            <li>
              <Link to={`/Page-${10}`}>Page 10</Link>
            </li>
            <li>
              <Link to={`/Page-${11}`}>Page 11</Link>
            </li>
            <li>
              <Link to={`/Page-${12}`}>Page 12</Link>
            </li>
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
            <li>
              <Link to={`/Page-${13}`}>Page 13</Link>
            </li>
            <li>
              <Link to={`/Page-${14}`}>Page 14</Link>
            </li>
            <li>
              <Link to={`/Page-${15}`}>Page 15</Link>
            </li>
            <li>
              <Link to={`/Page-${16}`}>Page 16</Link>
            </li>
          </ul>
        )}
      </li>
    </Box>
  )
}

export default NavLinks
