import React from 'react'
import LeftNavbar from './LeftNavbar'
import AccountElement from './AccountElement'

type Props = {}

function Accounts({}: Props) {
  return (
    <div className='flex'>
      <LeftNavbar />
      <AccountElement />
    </div>


  )
}

export default Accounts