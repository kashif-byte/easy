import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carousal.css';

const Carousal = (props) => (
    <AliceCarousel
        autoPlay
        autoPlayInterval={2000}
        animationDuration={2000}
        animationType="slide"
        infinite
        touchTracking={true}
        disableButtonsControls
        items={props.items}
        {...props}
    />
);

export default Carousal;