import React from 'react'

function Singles() {
  return (
    <div id='singles' className='bg-gray-500 py-12'>
        <div className='flex flex-col gap-12 m-auto max-w-[120vh]'>
            <h2 className='text-4xl text-white font-bold text-center'>Singles</h2>
            <div className='flex flex-wrap gap-12 justify-center px-4'>
                <img className='w-auto max-h-[40vh]' src="/images/Singles.png" alt="" />
                <img className='w-auto max-h-[40vh]' src="/images/Singles.png" alt="" />
                <img  className='w-auto max-h-[40vh]'src="/images/Singles.png" alt="" />
                <img  className='w-auto max-h-[40vh]'src="/images/Singles.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Singles