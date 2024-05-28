import { auth } from '@/auth'
import Logout from '@/components/Logout'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

const ProfilePage = async() => {
  const session = await auth()
  console.log("User:", session?.user);
  if(!session?.user) redirect('/')
  return (
    <div className='profile'>
      <h2 className="profile__name">{ session?.user.name}</h2>
      <p className='profile__email'>{ session?.user.email }</p>
      <Image
        className='profile__img'
        src={session?.user.image as string}
        alt='profile image'
        width={90}
        height={90}
      />
      <Logout/>
    </div>
  )
}

export default ProfilePage