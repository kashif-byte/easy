import React from 'react'
import Banner from './Banner'
import OurMission from './OurMission'
import MiddleSection from './MiddleSection';
import StudentComp from '../StudentCard/StudentComp';


const Home = () => {

    return (
        <>
            <Banner />
            <OurMission />
            <MiddleSection />
            <StudentComp />
        </>
    )
}

export default Home