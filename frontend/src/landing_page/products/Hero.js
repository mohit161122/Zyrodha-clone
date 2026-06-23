import React from 'react';

function Hero () {
    return ( 
     <div className='container mt-5'>
      <div className='text-center border-bottom '> 
        <h1>Technology</h1>
        <p>Sleek, modern, and intuitive trading platforms</p>
        <p> Check out our
           <a href='/pricing' className='text-decoration-none'> investment offerings <i className="fa-solid fa-arrow-right"></i>  </a>
           
           
           </p>


      </div>
     </div>
      );
}

export default  Hero;