import React from 'react';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import Tooltip from '@mui/material/Tooltip';

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-b from-transparent to-[rgb(var(--background-end-rgb))] via-[rgb(var(--background-start-rgb))]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Tooltip title="Inicio" placement="bottom">
                                <span className="text-white font-semibold text-lg">
                                    <CardTravelIcon />
                                </span>
                            </Tooltip>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex space-x-4">
                                <Tooltip title="Inicio" placement="bottom">
                                    <a
                                        href="#"
                                        className="text-white hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        <HomeOutlinedIcon />
                                    </a>
                                </Tooltip>
                                <Tooltip title="Información" placement="bottom">
                                    <a
                                        href="#"
                                        className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        <InfoOutlinedIcon />
                                    </a>
                                </Tooltip>

                                <Tooltip title="Contacto" placement="bottom">
                                    <a
                                        href="#"
                                        className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        <ContactPhoneOutlinedIcon />
                                    </a>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
