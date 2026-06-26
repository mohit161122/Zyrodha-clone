import React from 'react';

function Hero () {
    return ( 
     <div className='container mb-5 mt-5'>
      <div className='text-center p-3 border-bottom '> 
        <h1>Technology</h1>
        <h3 className='text-muted mt-3 fs-4'>Sleek, modern, and intuitive trading platforms</h3>
        <p className='mt-3 mv-5'> Check out our{" "}
           <a href='/pricing' className='text-decoration-none'> investment offerings <i className="fa-solid fa-arrow-right"></i>  </a>
           
           
           </p>


      </div>
     </div>
      );
}

export default  Hero;