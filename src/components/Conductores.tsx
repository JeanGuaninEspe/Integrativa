'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FormControl, InputLabel, Select, MenuItem, Button, Box, Typography,TextField,Grid } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";





const Formularios= ()=> {

    const [tarifaCalculada, setTarifaCalculada] = useState(0);
    const [selectedVehiculoData, setSelectedVehiculoData] = useState<tarifa | null>(null);
    const calcularTarifa = (vehiculoData: { tarifa_base: number; tarifa_por_kilometro: number; } | null) => {
        if (vehiculoData) {
            const distanciaRecorrida = 100; // Ejemplo: distancia en kilómetros
            const tarifaTotal = vehiculoData.tarifa_base + (distanciaRecorrida * vehiculoData.tarifa_por_kilometro);
            setTarifaCalculada(tarifaTotal);
        }
    };
    useEffect(() => {
        calcularTarifa(selectedVehiculoData);
    }, [selectedVehiculoData]);

    const [pasajero, setPasajero] = useState({
        pasajero_id: '',
        nombre: ''
    });
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
const [alertMessage, setAlertMessage] = useState('');

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

    const [vehiculos, setVehiculos] = useState<Vehiculo[]>([]);
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

    const [lugares, setLugares] = useState<Lugar[]>  ([]);
    const [selectedLugarId, setSelectedLugarId] = useState('');
const [selectedLugarLlegadaId, setSelectedLugarLlegadaId] = useState('');
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

    const handleVehiculoChange1 = async (event: { target: { value: any; }; }) => {
        const selectedVehiculoId = event.target.value;
        setSelectedVehiculoId(selectedVehiculoId);

        try {
            const response = await axios.get(`/api/vehiculos/${selectedVehiculoId}`);
            const selectedVehiculoData = response.data;
            setSelectedVehiculoData(selectedVehiculoData);
            calcularTarifa(selectedVehiculoData);
        } catch (error) {
            console.error('Error al obtener los datos del vehículo:', error);
            setSelectedVehiculoData(null);
            setTarifaCalculada(0);
        }
    };

    const handleVehiculoChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedVehiculoId(event.target.value);
    };

    const handleLugarChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedLugarId(event.target.value);
    };

    const handleLugarLlegadaChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedLugarLlegadaId(event.target.value);
    }


    const handleFechaSalidaChange = (date: React.SetStateAction<{ fechaSalida: string; }>) => {
        setFechaSalida(date);
    }
    const handleFechaLlegadaChange = (date: React.SetStateAction<{ fechaLlegada: string; }>) => {
        setFechaLlegada(date);
    }
    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        try {
            // Verificar que el nombre del pasajero no esté vacío y no contenga números
            if (pasajero.nombre === '' || /\d/.test(pasajero.nombre)) {
                setAlertMessage('El nombre solo puede contener letras');
                setShowAlert(true);
                return;
            }

            // Verificar que el lugar de salida no sea el mismo que el de llegada
            if (selectedLugarId === selectedLugarLlegadaId) {
                setAlertMessage('El lugar de salida no puede ser el mismo que el de llegada');
                setShowAlert(true);
                return;
            }

            // Datos del pasajero
            const pasajeroData = {
                nombre: pasajero.nombre,
            };

            // Insertar pasajero en la tabla Pasajeros
            await axios.post('api/pasajeros', pasajeroData);

            // @ts-ignore
            const fechaSalidaDate = new Date(fechaSalida);

            // Datos de la reserva
            const reservaData = {
                pasajero_nombre: pasajero.nombre,
                vehiculo_id: selectedVehiculoId,
                origen_id: selectedLugarId,
                destino_id: selectedLugarLlegadaId,
                fecha: fechaSalidaDate.toISOString().split('T')[0], // Convertir a formato "YYYY-MM-DD"
                precio_estimado: tarifaCalculada,
            };

            // Insertar reserva en la tabla Reservas
            const success= await axios.post('api/reservas', reservaData);

            // Mostrar la alerta de éxito
    setAlertMessage('Reserva creada con éxito')
            setShowSuccessAlert(true);
            setShowAlert(false);
            console.log('Reserva enviada:', reservaData);


        } catch (error) {
            console.error('Error al crear la reserva', error);
            setShowAlert(true); // Mostrar el alerta de error
            setShowSuccessAlert(false); // Ocultar el alerta de éxito
        }
    };


    interface Lugar {
        lugar_id: number;
        nombre: string;
    }
    interface Vehiculo {
        vehiculo_id: number;
        marca: string;
    }
    interface tarifa {
        vehiculo_id: number;
        marca: string;
        tarifa_base: number;
        tarifa_por_kilometro: number;

    }
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore

    // @ts-ignore
    // @ts-ignore
    return (
            <div
                style={{minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(to bottom, transparent, rgb(var(--background-end-rgb))) rgb(var(--background-start-rgb))'}}>
                <form onSubmit={handleSubmit}
                      style={{background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)', width: '500px', color: 'var(--foreground-rgb)'}}>
                    <h2 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px', color: 'black'}}>Reservar
                        un viaje</h2>

                    {showAlert && (
                        <Alert severity="warning">
                            <AlertTitle>Error!</AlertTitle>
                            <strong>{alertMessage}</strong>
                        </Alert>
                    )}

                    {showSuccessAlert && (
                        <Alert severity="success">
                            <AlertTitle>Exito!</AlertTitle>
                            <strong> Reserva creada exitosamentes</strong>
                        </Alert>
                    )}


                    <Grid container spacing={1} alignItems="center">
                        <Grid item xs={12} sm={8} md={12}>

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
                                    onChange={handleVehiculoChange1}
                                >

                                    {vehiculos.map((vehiculo) => (
                                        // @ts-ignore
                                        <MenuItem key={vehiculo.vehiculo_id} value={vehiculo.vehiculo_id}>

                                            {vehiculo.marca}
                                        </MenuItem>
                                    ))}
                                </Select>


                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} >
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker label="Fecha de Salida" value={fechaSalida}
                                    // @ts-ignore
                                            onChange={handleFechaSalidaChange} format="YYYY-MM-DD"  />
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
                            value={selectedLugarLlegadaId}
                            onChange={handleLugarLlegadaChange}
                        >

                            {lugares.map((lugar) => (

                                <MenuItem key={lugar.lugar_id} value={lugar.lugar_id}>

                                    {lugar.nombre}
                                </MenuItem>
                            ))}
                        </Select>

                        {selectedVehiculoData && (

                            <Alert severity="info" className="mt-3">
                                <p className="text-black">Tarifa Base: {selectedVehiculoData.tarifa_base}</p>
                                <p>Tarifa Calculada: {tarifaCalculada}</p>
                            </Alert>
                        )}

                    </FormControl>

                    <Button variant="contained" type="submit" className="ml-40 mt-3 px-6 py-3 rounded-lg shadow-md hover:bg-blue-800 bg-blue-600 text-white-900 transition duration-300">
                        Reservar
                    </Button>

                </form>

            </div>
        );
    };
export default Formularios;



