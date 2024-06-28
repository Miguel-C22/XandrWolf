import React from 'react'

function Remixes() {
  return (
    <div id='remixes' className='bg-black py-12'>
        <div className='flex flex-col gap-12 m-auto max-w-[120vh]'>
            <h2 className='text-4xl text-white font-bold text-center'>Remixes</h2>
            <div className='flex flex-wrap gap-12 justify-center px-4'>
                <img className='w-auto max-h-[40vh]' src="/images/Remixes.png" alt="" />
                <img className='w-auto max-h-[40vh]' src="/images/Remixes.png" alt="" />
                <img  className='w-auto max-h-[40vh]'src="/images/Remixes.png" alt="" />
                <img  className='w-auto max-h-[40vh]'src="/images/Remixes.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Remixes