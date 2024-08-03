import React from 'react';
import mail from '../assets/img/mail-icon.png'
import phone from '../assets/img/phone-icon.png'
import logo from '../assets/img/logo-white-circle.png'
import location from '../assets/img/location-icon.png'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const Footer = () => {
    const shopDetailsList = [
        {image: location, text:'Shop Location'},
        {image: phone, text:' +XX XXX XXX XXXX (Shop Admin)'},
        {image: mail, text:'info@shop.com'},
    ];
    
    return (
        <>
            <div className="flex justify-between bg-[#003080] py-[60px] px-[80px]">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-2">
                        <div>
                            <img src={logo} alt="Logo" />
                            <h2 className="mt-8 font-bold text-[#FFE600] text-[28px]">Shop Name</h2>
                        </div>
                        
                        {shopDetailsList.map((list, index) => (
                            <div key={index} className="flex gap-2">
                                <img src={list.image} alt="icon" />
                                <span className="font-semibold text-base text-white">{list.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                <LoadScript  googleMapsApiKey="https://maps.googleapis.com/maps/api/js?sensor=false&callback=myMap">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                        className="rounded"
                    >
                        { /* Child components, such as markers, info windows, etc. */ }
                    </GoogleMap>
                    </LoadScript>
                </div>
            </div>
            <div className="bg-black py-3.5">
                <p className="text-center font-bold text-[13px] text-white">© 2024 Shop. All rights reserved</p>
            </div>
        </>
    )
}

export default Footer;