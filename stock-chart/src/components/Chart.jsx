import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = ({ data }) => {
    // Ensure the data is valid
    if (!data || data.length === 0) {
        return <p>No data available for the selected company.</p>;
    }

    // Debugging: Log the data to ensure it's correct
    console.log('Chart Data:', data);

    // Extract labels and values
    const labels = data.map((row) => row['index_date']); // Replace 'index_date' with the actual date field name
    const chartValues = data.map((row) => parseFloat(row['close_index_value'] || 0)); // Replace 'close_index_value' with the correct field for the chart values

    // Debugging: Log labels and values to ensure correctness
    console.log('Labels:', labels);
    console.log('Values:', chartValues);

    // Preparing the chart data
    const chartData = {
        labels, // Dates as labels
        datasets: [
            {
                label: 'Closing Price',
                data: chartValues, // Closing prices
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                tension: 0.4, // Smooth line
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Stock Price Chart',
            },
        },
    };

    return (
        <div style={{ height: '400px', width: '100%' }}>
            <Line data={chartData} options={options} />
        </div>
    );
};

export default Chart;
