'use client';
import React from 'react';
import Projects from '@/pages/Projects';
import Home from '@/pages/Home';
import PersonalInformation from '@/pages/PersonalInformation';
import Experience from '../pages/Experience';
import Layout from '@/components/Layout';

const page = () => {
    return (
        <section className="flex flex-col items-center">
            <Layout>
                <Home />
                <Projects />
                <Experience />
                <PersonalInformation />
            </Layout>
        </section>
    );
};

export default page;
