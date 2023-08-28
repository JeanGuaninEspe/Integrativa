'use client';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const Formulario = () => {
    const [conductor, setConductor] = useState({
        conductor_id: '',
        nombre: '',
        edad: ''
    });

    const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setConductor((prevConductor) => ({
            ...prevConductor,
            [name]: value
        }));
    };

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        try {
            await axios.post('api/reservas', conductor);
            console.log('Conductor enviado:', conductor);
            // Realiza acciones adicionales aquí, como mostrar un mensaje de éxito.
        } catch (error) {
            console.error('Error al enviar el conductor:', error);
            // Muestra un mensaje de error o realiza acciones de manejo de errores.
        }
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(to bottom, transparent, rgb(var(--background-end-rgb))) rgb(var(--background-start-rgb))' }}>
            <form onSubmit={handleSubmit} style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)', width: '300px', color: 'var(--foreground-rgb)' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px', color: 'black' }}>Insertar un conductor</h2>
                <TextField
                    label="Conductor ID"
                    name="conductor_id"
                    value={conductor.conductor_id}
                    onChange={handleInputChange}
                    variant="outlined"
                    fullWidth
                    margin="dense"
                    color='secondary'
                />
                <TextField
                    label="Nombre"
                    name="nombre"
                    value={conductor.nombre}
                    onChange={handleInputChange}
                    variant="outlined"
                    fullWidth
                    margin="dense"
                />
                <TextField
                    label="Edad"
                    name="edad"
                    value={conductor.edad}
                    onChange={handleInputChange}
                    variant="outlined"
                    fullWidth
                    margin="dense"
                />
                <Button className="bg-blue-600 hover:bg-green-500"
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{ marginTop: '20px', color: 'var(--foreground-rgb)', transition: 'background 0.3s' }}
                >
                    Enviar
                </Button>
            </form>
        </div>
    );
};

export default Formulario;
