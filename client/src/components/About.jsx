import React from 'react'

function About() {
  return (
    <div className='flex flex-wrap lg:flex-nowrap justify-center m-auto gap-12 max-w-[120vh] my-12'>
        <img className='w-auto max-h-[50vh] px-4' src='/images/Selfie.png' alt='' />
        <div className='flex flex-col gap-4 text-xl px-4 lg:px-0 sm:px-24'>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ac placerat vestibulum lectus mauris ultrices eros. Enim sed faucibus turpis in. 
                Commodo odio aenean sed adipiscing diam donec. Nulla aliquet porttitor lacus luctus 
                accumsan tortor posuere.  
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ac placerat vestibulum lectus mauris ultrices eros. Enim sed faucibus turpis in. 
                Commodo odio aenean sed adipiscing diam donec. Nulla aliquet porttitor lacus luctus 
                accumsan tortor posuere.  
            </p>
        </div>
    </div>
  )
}

export default About