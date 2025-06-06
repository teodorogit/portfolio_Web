import React from 'react';
import { Card, CardBody } from '@heroui/react';

const CardComponent = ({ icon, text, description }) => {
    return (
        <div>
            <Card className=" h-80 flex flex-col py-4 px-2 w-[250px] hover:shadow-md hover:shadow-slate-900/80 hover:cursor-pointer ">
                <CardBody className="font-nunito text-slate-700 dark:text-slate-200 0 ">
                    <div className="flex justify-between  items-center mb-3">
                        <h2 className="font-nunito font-semibold text-slate-800 dark:text-orange-600">{text}</h2>
                        <p className="text-3xl text-center ">{icon}</p>
                    </div>

                    <p className="font-nunito">{description}</p>
                </CardBody>
            </Card>
        </div>
    );
};

export default CardComponent;
