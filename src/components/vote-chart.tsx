'use client';

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React from 'react';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface VoteChartProps {
    data?: {
        optionId: number;
        totalVotes: number;
    }[];
}

const VoteChart: React.FC<VoteChartProps> = ({ data = [] }) => {
    const chartData = {
        labels: data.map((item) => `Option ${item.optionId}`),
        datasets: [
            {
                label: 'Votes',
                data: data.map((item) => item.totalVotes),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'right' as const,
            },
        },
        maintainAspectRatio: false,
    };

    return (
        <div className="w-full max-w-md mx-auto h-[300px]">
            <Pie data={chartData} options={options} />
        </div>
    );
};

export default VoteChart;
