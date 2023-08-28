'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FormControl, InputLabel, Select, MenuItem, Button, Box, Typography,TextField,Grid } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";




const Formularios= ()=> {


    const [pasajero, setPasajero] = useState({
        pasajero_id: '',
        nombre: ''
    });


    const handlePasajeroChange = (event: { target: { name: any; value: any; }; }) => {
        const {name, value} = event.target;
        setPasajero((prevPasajero) => ({
            ...prevPasajero,
            [name]: value
        }));
    }

    const [fechaSalida, setFechaSalida] = useState({
        fechaSalida: ''
    });

    const [fechaLlegada, setFechaLlegada] = useState({
        fechaLlegada: ''
    });


    const [conductores, setConductores] = useState([]);
    const [selectedConductorId, setSelectedConductorId] = useState('');

    useEffect(() => {
        async function fetchConductores() {
            try {
                const response = await axios.get('/api/conductores');
                setConductores(response.data);
            } catch (error) {
                console.error('Error al obtener conductores:', error);
            }
        }

        fetchConductores();
    }, []);

    const [vehiculos, setVehiculos] = useState([]);
    const [selectedVehiculoId, setSelectedVehiculoId] = useState('');

    useEffect(() => {
        async function fetchVehiculos() {
            try {
                const response = await axios.get('/api/vehiculos');
                setVehiculos(response.data);
            } catch (error) {
                console.error('Error al obtener vehiculos:', error);
            }
        }

        fetchVehiculos();
    }, []);

    const [lugares, setLugares] = useState([]);
    const [selectedLugarId, setSelectedLugarId] = useState('');

    useEffect(() => {
        async function fetchLugares() {
            try {
                const response = await axios.get('/api/lugares');
                setLugares(response.data);
            } catch (error) {
                console.error('Error al obtener lugares:', error);
            }
        }

        fetchLugares();
    }, []);


    const handleVehiculoChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedVehiculoId(event.target.value);
    };

    const handleLugarChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedLugarId(event.target.value);
    };


    const handleFechaSalidaChange = (date) => {
        setFechaSalida(date);
    }
    const handleFechaLlegadaChange = (date) => {
        setFechaLlegada(date);
    }
    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        try {
            const data = {
                pasajero_id: pasajero.pasajero_id,
                nombre: pasajero.nombre,
                fechaSalida: fechaSalida,
                conductor_id: selectedConductorId,
                vehiculo_id: selectedVehiculoId,
                lugar_id: selectedLugarId
            };
            await axios.post('api/reservas', data);
            }
            catch (error) {
            console.error('Error al enviar el conductor:', error);
            }
    };
        return (
            <div
                style={{minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(to bottom, transparent, rgb(var(--background-end-rgb))) rgb(var(--background-start-rgb))'}}>
                <form onSubmit={handleSubmit}
                      style={{background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)', width: '500px', color: 'var(--foreground-rgb)'}}>
                    <h2 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px', color: 'black'}}>Reservar
                        un viaje</h2>

                    <Grid container spacing={1} alignItems="center">
                        <Grid item xs={12} sm={8} md={6}>

                            <TextField
                                label="Nombre"
                                name="nombre"
                                value={pasajero.nombre}
                                onChange={handlePasajeroChange}
                                variant="outlined"
                                fullWidth
                                margin="dense"
                                color='secondary'
                            />


                        </Grid>
                        <Grid item xs={12} sm={8} md={6}>
                            <FormControl fullWidth margin="dense">
                                <InputLabel id="vehiculo-label">Vehículo</InputLabel>
                                <Select
                                    labelId="vehiculo-label"
                                    id="vehiculo"
                                    label="Vehículo"
                                    value={selectedVehiculoId}
                                    onChange={handleVehiculoChange}
                                >
                                    {vehiculos.map((vehiculo) => (
                                        <MenuItem key={vehiculo.vehiculo_id} value={vehiculo.vehiculo_id}>
                                            {vehiculo.marca}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={8} md={6}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker label="Fecha de Salida" value={fechaSalida}
                                            onChange={handleFechaSalidaChange}/>
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} sm={8} md={6}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker label="Fecha de Llegada" value={fechaLlegada}
                                            onChange={handleFechaLlegadaChange}/>
                            </LocalizationProvider>
                        </Grid>
                    </Grid>


                    <FormControl fullWidth margin="dense">
                        <InputLabel id="lugar-label">Lugar de Salida</InputLabel>
                        <Select
                            labelId="lugar-label"
                            id="Lugar de Salida"
                            label="Lugar de Salida"
                            value={selectedLugarId}
                            onChange={handleLugarChange}
                        >
                            {lugares.map((lugar) => (
                                <MenuItem key={lugar.lugar_id} value={lugar.lugar_id}>
                                    {lugar.nombre}
                                </MenuItem>
                            ))}
                        </Select>

                    </FormControl>

                    <FormControl fullWidth margin="dense">
                        <InputLabel id="lugar-label2">Lugar de destino</InputLabel>
                        <Select
                            labelId="lugar-label2"
                            id="Lugar de destino"
                            label="Lugar de destino"
                            value={selectedLugarId}
                            onChange={handleLugarChange}
                        >
                            {lugares.map((lugar) => (
                                <MenuItem key={lugar.lugar_id} value={lugar.lugar_id}>
                                    {lugar.nombre}
                                </MenuItem>
                            ))}
                        </Select>

                    </FormControl>


                </form>


            </div>
        );
    };
export default Formularios;



