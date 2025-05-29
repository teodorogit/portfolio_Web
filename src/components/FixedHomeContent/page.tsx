'use client';
import Navbar from '../Navbar';
import React from 'react';
import MainSection from '../MainSection/index';
import Footer from '../Footer/index';
import Projects from '../Projects';
import Formulario from '../Formulario';

const page = () => {
    return (
        <div>
            <div className="flex flex-col  md:flex-row px-12 mt-24 ">
                <Projects />
                <Formulario />
            </div>
            <Footer />
        </div>
    );
};

export default page;
