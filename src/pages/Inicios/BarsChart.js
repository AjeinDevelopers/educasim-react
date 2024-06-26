import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement, 
    BarElement, 
    Title, 
    Tooltip,
    Legend,
    Filler
);


const progreso = [72, 56, 36, 80, 40, 30, 20, 30, 12, 60,70, 50];
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const misoptions = {
    responsive: true,
    animation: true,
    aspectRatio: 2,
    plugins: {
        legend: {
            display: false
        }
    }, 
    scales: {
        y: {
            min: 0,
            max: 100,
            ticks:{color: '#051C32'}
        },
        x: {
            ticks: { color: '#051C32' }
        }
    }
};

const midata = {
    labels: meses,
    datasets: [
        {       
            label: 'Progreso',
            data: progreso,
            backgroundColor: '#00BB9A',
            borderWidth: 1, 
            borderRadius: 10, 
        }
    ]
};

export default function Bars() {
    return <Bar data={midata} options={misoptions}/>;
}
