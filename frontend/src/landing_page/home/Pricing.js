import React from 'react';

function Pricing() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <h2>
                        Unbeatable pricing
                    </h2>
                    <p>
                        We pioneered the concept of discount broking and price
                        transparency in India. Flat fee and no hidden charges.
                    </p>
                </div>
                <div className='col-6'  >
                  <div className='row' style={{border:"0.1px solid black"}}>
                    <div className='col-6' style={{border:"0.1px solid black"}}>
                      <h1>₹0</h1>
                    </div>
                    <div className='col-6 ' style={{border:"0.1px solid black"}}>
                      <h1>₹20</h1>
                    </div>
                  </div>


                </div>
            </div>
        </div>
    );
}

export default Pricing;