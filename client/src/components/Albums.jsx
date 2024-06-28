import React from 'react'

function Albums() {
  return (
    <div id='albums' className='bg-customGreen py-12'>
        <div className='flex flex-col gap-12 m-auto max-w-[120vh]'>
            <h2 className='text-4xl text-white font-bold text-center'>Albums</h2>
            <div className='flex flex-wrap gap-12 justify-center px-4'>
                <img className='w-auto max-h-[40vh]' src="/images/Album.png" alt="" />
                <img className='w-auto max-h-[40vh]' src="/images/Album.png" alt="" />
                <img  className='w-auto max-h-[40vh]'src="/images/Album.png" alt="" />
                <img  className='w-auto max-h-[40vh]'src="/images/Album.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Albums