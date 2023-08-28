import React from "react";
import Navbar from '@/components/principal';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

import GridCards from "@/components/grid";


const TravelBookingPage1 = () => {
    return <>
        <><Navbar/>
            <div
                className="bg-gradient-to-b from-transparent to-[rgb(var(--background-end-rgb))] via-[rgb(var(--background-start-rgb))] min-h-screen flex flex-col justify-center items-center">
                <div
                    className="bg-gradient-to-b from-transparent to-[rgb(var(--background-end-rgb))] via-[rgb(var(--background-start-rgb))] p-8 rounded-lg shadow-lg text-center">

                    <Tooltip title="Reservar un Viaje" placement="bottom">
                        <FlightTakeoffIcon className="text-white-800 text-9xl mb-6"/>
                    </Tooltip>
                    <h1 className="text-4xl font-semibold text-white-800 mb-4">Reserva de Viajes</h1>
                    <p className="text-white-800 text-lg mb-6">
                        Encuentra y reserva tus próximas aventuras.
                    </p>
                    <GridCards/>

                    <Button
                        variant="contained"
                        className="px-6 py-3 rounded-lg shadow-md hover:bg-blue-800 bg-blue-600 text-white-900 transition duration-300"
                    >
                        Ver Viajes Disponibles
                    </Button>
                </div>
            </div>
        </>
    </>;
}

export default TravelBookingPage1;