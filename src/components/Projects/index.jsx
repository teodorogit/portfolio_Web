import React from 'react';
import Cards from '../Cards';

const index = () => {
    return (
        <div
            className="grid w-auto md:w-1/2 gap-4 md:px-12 mt-16"
            style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}
        >
            <Cards title="WebScraping Python & Selenium" link="#" />
            <Cards title="Webhook Python & FastAPI." link="#" />
            <Cards title="FullStack Application ReactJS & NextJS." link="#" />
        </div>
    );
};

export default index;
