import React from 'react'
import { makeStyles, Box } from '@material-ui/core'
import CSSTransition from 'react-transition-group/CSSTransition'

const useStyles = makeStyles(theme => ({
  sideDrawer: {
    position: 'fixed',
    width: '280px',
    maxWidth: '65%',
    height: '100%',
    left: 0,
    top: 0,
    backgroundColor: theme.palette.primary.main,
    boxShadow: '3px 0px 10px 2px rgba(0, 0, 0, 0.4)',
    transition: 'transform 0.4s ease-out',
    transform: 'translateX(-104%)',
    zIndex: 102,
    '&.showing': {
      transform: 'translateX(0)'
    }
  },
  backdrop: {
    width: '100%',
    height: '100%',
    position: 'fixed',
    left: 0,
    top: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    transition: 'all 0.5s',
    zIndex: 101,
    '&.fade-enter': {
      opacity: 0
    },
    '&.fade-enter-active': {
      opacity: 1
    },
    '&.fade-exit': {
      opacity: 1
    },
    '&.fade-exit-active': {
      opacity: 0
    }
  }
}))

const SideDrawer = ({ showing, closeSideDrawer }) => {
  const classes = useStyles()

  const sideDrawerClasses = [classes.sideDrawer]
  if (showing) {
    console.log('showing: ', showing)
    sideDrawerClasses.push('showing')
  }
  return (
    <>
      <CSSTransition in={showing} unmountOnExit classNames='fade' timeout={500}>
        <div className={classes.backdrop} onClick={closeSideDrawer} />
      </CSSTransition>

      <div className={sideDrawerClasses.join(' ')}>
        <div>Logo</div>
        {/* SideDrawer Items Go Here */}
        <div>NavItems</div>
      </div>
    </>
  )
}

export default SideDrawer
