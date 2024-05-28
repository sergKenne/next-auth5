import { signOutAction } from '@/action'
import React from 'react'

const Logout = () => {
  return (
    <form className='logout' action={signOutAction}>
      <button className='logout__btn'>Logout</button>
    </form>
    
  )
}

export default Logout