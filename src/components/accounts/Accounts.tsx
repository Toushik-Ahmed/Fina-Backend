import React from 'react'
import LeftNavbar from './LeftNavbar'
import AccountElement from './AccountElement'

type Props = {}

function Accounts({}: Props) {
  return (
    <div className='flex'>
      <div className="w-20vw">

      <LeftNavbar />
      </div>
      <div className="w-80vw">

      <AccountElement />
      </div>
    </div>


  )
}

export default Accounts