import React from 'react'

export default function Contact() {
  return (
    <div id='contact' className='text-center flex flex-col gap-12 my-12'>
        <h2 className='text-4xl font-bold'>Get in Touch</h2>
        <form action="" method="POST" className='flex flex-col flex-wrap items-center m-auto gap-8'>
        <input type="hidden" name="access_key" value="5b05f2ae-1c9c-405a-92d9-840648b31621" />
        <input type="hidden" name="subject" value="Quote For Dahl Builders"></input>
        <input type="hidden" name="from_name" value="New Quote"></input>
        <div className='flex flex-col sm:flex-row gap-8 w-full '>
            <input name='first_name' type="text" placeholder="First Name" required className="input input-bordered w-full max-w-xs" />
            <input name='last_name' type="text" placeholder="Last Name" required  className="input input-bordered w-full max-w-xs" />
        </div>
        <div className='flex flex-col sm:flex-row gap-8 w-full'>
            <input name='email' type="email" placeholder="Email" required  className="input input-bordered w-full" />
        </div>
        <textarea name='message' className="textarea textarea-bordered w-full h-64" required  placeholder="Message"></textarea>
        <div className='w-full'>
           <button className='btn bg-blue-500 w-full text-white font-bold text-lg'>Submit</button>
        </div>
        </form>
    </div>
  )
}
