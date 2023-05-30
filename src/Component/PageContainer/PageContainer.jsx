import React from 'react'
import { Outlet } from 'react-router-dom'
import './PageContainer.css'

const PageContainer = () => {
  return (
    <div className='pageContainer'>
        <Outlet />
    </div>
  )
}

export default PageContainer