import React from 'react'
import { Outlet } from 'react-router'

const Main = () => {
  return (
    <div id='main'className='flex-grow'>
        <Outlet/>
    </div>
  )
}

export default Main