import React from 'react';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import Tooltip from '@mui/material/Tooltip';
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-b from-transparent to-[rgb(var(--background-end-rgb))] via-[rgb(var(--background-start-rgb))]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Tooltip title="Bienvenido :)" placement="bottom">
                                <span className="text-white font-semibold text-lg">
                                    <CardTravelIcon />
                                </span>
                            </Tooltip>
                        </div>

                        <div className="hidden md:block">
                            <div className="ml-10 flex space-x-4">
                                <div className="ml-2">
                                <Tooltip title="Inicio" placement="bottom">
                                    <Link href="/" >

                                       <HomeOutlinedIcon />

                                    </Link>
                                </Tooltip>
                            </div>
                                <div className="ml-2">
                                <Tooltip title="Crear Reserva" placement="bottom">

                                    <Link href="/Reserva" className="ml-5">
                                        <InfoOutlinedIcon />

                                    </Link>
                                </Tooltip>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
