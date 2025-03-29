import React from 'react'
import CercaComponent from './CercaComponent'

export default function Footer() {
  return (
    <>
      <div className='bg-footer py-3'>
        <CercaComponent/>
        <div className=' d-flex justify-content-center'>
          <p className='fw-bold mb-0'>© Guide d'Italia Baratti Lavinia</p>
        </div>
      </div>
    </>
  )
}
