import React from 'react'
import ApplicationBar from './application-bar'

function Layout({
  children
}) {
  return (
    <main
    className='flex flex-col'>
        <ApplicationBar/>

        {children}
    </main>
  )
}

export default Layout