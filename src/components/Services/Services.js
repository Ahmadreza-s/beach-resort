import React from 'react';
import './Services.css';
import Title from '../Title/Title';
import {FaBeer, FaCocktail, FaHiking, FaShuttleVan} from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            icon : <FaCocktail/>,
            title: 'Free Cocktails',
            info : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, exercitationem!'
        },
        {
            icon : <FaHiking/>,
            title: 'Endless Hiking',
            info : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, exercitationem!'
        },
        {
            icon : <FaShuttleVan/>,
            title: 'Free shuttle',
            info : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, exercitationem!'
        },
        {
            icon : <FaBeer/>,
            title: 'Strongest Beer',
            info : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, exercitationem!'
        }
    ];
    return (
        <section className='services'>
            <Title>Services</Title>
            <div className='services-center'>
                {services.map((service, index) => (
                    <article key={index} className='service'>
                        <span>{service.icon}</span>
                        <h6>{service.title}</h6>
                        <p>{service.info}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Services;
