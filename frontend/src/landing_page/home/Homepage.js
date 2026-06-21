import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Pricing from './Pricing';
import States from './States';
import Education from './Education';

import OpenAccount from '../OpenAccount';


function HomePage () {
    return ( 
        <>
        <Hero/>
        <Awards/>
        <States/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        </>
     );
}

export default HomePage ;