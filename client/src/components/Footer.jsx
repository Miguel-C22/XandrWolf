import React from 'react'

function Footer() {
  return (
  <footer className="footer footer-center text-primary-content p-10 bg-customGreen">
    <aside>
      <img className='w-96' src="/images/Banner.png" alt="" srcset="" />
      <p className="font-bold">
          XandrWolf EDM Productions
        <br />
          Bringing beats since 2020
      </p>
      <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
    </aside>
    <nav>
      <div className="flex flex-wrap gap-4 justify-center">
        <a href='https://www.instagram.com/xandrwolfmusic/'>
          <img src="/images/platforms/instagram.png" className='w-12 sm:w-auto' alt="" srcset="" />
        </a>
        <a href='https://www.tiktok.com/@xandrwolfofficial'>
          <img src="/images/platforms/TikTok.png" className='w-12 sm:w-auto' alt="" srcset="" />
        </a>
        <a href='https://www.threads.net/@xandrwolfmusic'>
          <img src="/images/platforms/threads.png" className='w-12 sm:w-auto' alt="" srcset="" />
        </a>
        <a href='https://x.com/XandrWolf00'>
          <img src="/images/platforms/TwitterX.png" className='w-12 sm:w-auto' alt="" srcset="" />
        </a>
        <a href='http://www.youtube.com/@xandrwolf00'>
          <img src="/images/platforms/Youtube.png" className='w-12 sm:w-auto' alt="" srcset="" />
        </a>
        <a href='https://open.spotify.com/artist/6SNZwTc9I8jEGZZT2K1zxx?si=KfFT_9I8Spmqx1_tD8F08A'>
          <img src="/images/platforms/Spotify.png" className='w-12 sm:w-auto' alt="" srcset="" />
        </a>
        <a href='https://music.apple.com/us/artist/xandrwolf/1729946623'>
          <img src="/images/platforms/AppleMusic.png" className='w-12 sm:w-auto' alt="" srcset="" />
        </a>
        <a href='https://on.soundcloud.com/Z1fDWhNSFezc2pbW6'>
          <img src="/images/platforms/SoundCloud.png" className='w-12 sm:w-auto' alt="" srcset="" />
        </a>
        <a href='https://amazon.com/music/player/artists/B0CVFQNR9B/xandrwolf?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_7fduoC5hA5vTNWDCYXTidlfJH'>
          <img src="/images/platforms/amazon.png" className='w-12 sm:w-auto' alt="" srcset="" />
        </a>
        <a href='https://www.pandora.com/artist/xandrwolf/ARbk9lvftr2zbKJ'>
          <img src="/images/platforms/pandora.png" className='w-12 sm:w-auto' alt="" srcset="" />
        </a>
        <a href='https://www.iheart.com/artist/xandrwolf-42373419/'>
          <img src="/images/platforms/iheart.png" className='w-12 sm:w-auto' alt="" srcset="" />
        </a>
      </div>
    </nav>
  </footer>
  )
}

export default Footer