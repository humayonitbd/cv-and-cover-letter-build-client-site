import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeSec2 from '../HomeSec2/HomeSec2';
import HomeSec3 from '../HomeSec3/HomeSec3';
import HomeSec4 from '../HomeSec4/HomeSec4';
import HomeSec5 from '../HomeSec5/HomeSec5';


const Home = () => {
    return (
        <div>
            <HomeBanner />
            <HomeSec2 />
            <HomeSec3 />
            <HomeSec4 />
            <HomeSec5 />
        </div>
    );
};

export default Home;