import React from 'react'

function About() {
  return (
    <div id='about' className='flex flex-wrap lg:flex-nowrap justify-center mx-auto gap-12 max-w-screen-xl my-12'>
        <img className='w-auto max-h-[65vh] lg:max-w-[35%] px-4' src='/images/Selfie.png' alt='' />
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