import React, { useState, useRef, useEffect } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
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
              <AniLink fade duration={1} to={`/Page-${1}`}>
                Page 1
              </AniLink>
            </li>
            <li>
              <AniLink fade duration={1} to={`/Page-${2}`}>
                Page 2
              </AniLink>
            </li>
            <li>
              <AniLink fade duration={1} to={`/Page-${3}`}>
                Page 3
              </AniLink>
            </li>
            <li>
              <AniLink fade duration={1} to={`/Page-${4}`}>
                Page 4
              </AniLink>
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
              <AniLink fade duration={1} to={`/Page-${5}`}>
                Page 5
              </AniLink>
            </li>
            <li>
              <AniLink fade duration={1} to={`/Page-${6}`}>
                Page 6
              </AniLink>
            </li>
            <li>
              <AniLink fade duration={1} to={`/Page-${7}`}>
                Page 7
              </AniLink>
            </li>
            <li>
              <AniLink fade duration={1} to={`/Page-${8}`}>
                Page 8
              </AniLink>
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
              <AniLink fade duration={1} to={`/Page-${9}`}>
                Page 9
              </AniLink>
            </li>
            <li>
              <AniLink fade duration={1} to={`/Page-${10}`}>
                Page 10
              </AniLink>
            </li>
            <li>
              <AniLink fade duration={1} to={`/Page-${11}`}>
                Page 11
              </AniLink>
            </li>
            <li>
              <AniLink fade duration={1} to={`/Page-${12}`}>
                Page 12
              </AniLink>
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
              <AniLink fade duration={1} to={`/Page-${13}`}>
                Page 13
              </AniLink>
            </li>
            <li>
              <AniLink fade duration={1} to={`/Page-${14}`}>
                Page 14
              </AniLink>
            </li>
            <li>
              <AniLink fade duration={1} to={`/Page-${15}`}>
                Page 15
              </AniLink>
            </li>
            <li>
              <AniLink fade duration={1} to={`/Page-${16}`}>
                Page 16
              </AniLink>
            </li>
          </ul>
        )}
      </li>
    </Box>
  )
}

export default NavLinks
