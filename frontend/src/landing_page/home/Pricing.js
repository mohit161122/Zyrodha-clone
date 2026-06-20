import React from 'react';

function Pricing() {
    return (
        <div className='container mt-5'>
            <div className='row'>  
                <div className='col-6'>
                <div className='col-8'>
                    <h2>
                        Unbeatable pricing
                    </h2>
                    <p>
                        We pioneered the concept of discount broking and price
                        transparency in India. Flat fee and no hidden charges.
                    </p>
                    <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#">
                          See Pricing <i class="fa-solid fa-arrow-right"></i>
                                 </a>

                </div>
                </div>
                <div className='col-6'  >
                  <div className='row' style={{border:"0.1px solid black"}}>
                    <div className='col-6 text-center' style={{border:"0.1px solid black"}}>
                      <h1>₹0</h1>
                      <p>Free equity delivery and direct multual funds</p>
                    </div>
                    <div className='col-6 text-center ' style={{border:"0.1px solid black"}}>
                      <h1>₹20</h1>
                      <p>Intraday and F&O</p>
                    </div>
                  </div>


                </div>
            </div>
        </div>
    );
}

export default Pricing;