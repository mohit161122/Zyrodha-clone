import React from 'react';

function Awards() {
    return ( 
       <div className='container mb-5  '>
        <div className='row'>
            <div className='col-6'>
                <img src='media/images/largestBroker.svg'></img>
            </div>
            <div className='col-6 p-5 mt-3'> 
                <h2>Largest stock broker in India </h2>
                <p className='mb-4'>
                    2+ million zerodha clients contribute to ober 15% of all retail order values in india daily by trading and inversting in:
                 <div className='row'>
                      <div className='col-6 p-5 '>
                        <ul>
                            <li>
                                Future and option
                            </li>
                            <li>
                              Commodity derivatives
                            </li>
                            <li>
                              Corrently derivates
                            </li>
                        </ul>
                        
                    </div>
                    <div className='col-6 p-5'>
                        <ul>
                            <li>
                                Future and option
                            </li>
                            <li>
                              Commodity derivatives
                            </li>
                            <li>
                              Corrently derivates
                            </li>
                        </ul>
                    </div>
                 </div>
              
                 <img src='media/images/pressLogos.png' style={{width:"95%"}}></img>
                  
                </p>


            </div>
        </div>

       </div>
        
     );
}

export default Awards;