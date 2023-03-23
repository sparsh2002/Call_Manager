import React from 'react'
import Header from '../components/Header'

function CallList() {
  return (
    <>
    <Header />
    <div className='flex mt-2 ml-2'>
        <div className='left-bar w-4/12'>
            <p>Contacts</p>
        </div>
        <div className='right-bar w-7/12'>
            <p>All Calls</p>
            <div className='sorting-option flex gap-x-4'>
                <p>Sort By</p>
                <p>Date</p>
                <p>Call Duration</p>
            </div>
        </div>
    </div>
    </>

  )
}

export default CallList