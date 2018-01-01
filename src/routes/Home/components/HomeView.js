import React from 'react'
import { IndexLink, Link } from 'react-router'
import Ionicon from 'react-ionicons'
import HomeIcon from './HomeIcon'
import './HomeView.scss'

export const HomeView = () => (
  <div className='home-page'>
    <div className='home-title-head'>
      <span className='home-page-title'>Welcome</span>
    </div>

    <div className='home-row'>
      
      <div className='home-col'>
        <HomeIcon title='Change Password' icon='ion-android-unlock'
          link={{ pathname: '/', query: { mode: 'changePassword' } }} />
      </div>
      
      <div className='home-col'>
        <IndexLink to='/' activeClassName='page-layout__nav-item--active'>
        <Ionicon className='home-bottom-btn' icon='ion-ios-locked' fontSize='100px' color='#FFF' />
      </IndexLink>
      </div>
      
      <div className='home-col'>
      <Link to='/home' activeClassName='page-layout__nav-item--active'>
        <Ionicon className='home-bottom-btn' icon='ion-home' fontSize='100px' color='#FFF' />
      </Link>
      </div>  
      
    </div>
  </div>
)

export default HomeView
