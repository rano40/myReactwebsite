import React from 'react';
import Common from './Common';
import web from './images/Home.png';
const Home = () => {
    return (
        <>
            <Common
                name="Grow your Business with" visit='/service'
                btname='Get Started' imgsrc={web}
            />
        </>
    );
}

export default Home;
