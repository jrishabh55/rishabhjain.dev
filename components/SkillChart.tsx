'use client';

import { CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, LineProps, PointElement, Title, Tooltip } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ComponentProps } from 'react';
import { Line } from 'react-chartjs-2';

import Card from './lib/Card';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartDataLabels);

export const options: ComponentProps<typeof Line>['options'] = {
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
    },
  },
  responsive: true,
  scales: {
    'y-axis-1': {
      beginAtZero: true,
      max: 10,
    },
  },
};

const labels = {
  Agile: 8,
  Django: 7,
  NextJs: 9,
  NodeJs: 8,
  Python: 8,
  React: 9.5,
  Tailwind: 8,
  TypeScript: 9,
};

export const data: ComponentProps<typeof Line>['data'] = {
  datasets: [
    {
      backgroundColor: '#F05F4E',
      borderColor: '#F05F4E',
      data: Object.values(labels),
      datalabels: {
        align: 'start' as const,
        color: '#F05F4E',
        display: 'auto',
      },
      label: 'Skills Chart',
      yAxisID: 'y-axis-1',
    },
  ],
  labels: Object.keys(labels),
};

const SkillChart = () => {
  return (
    <Card className="w-full max-w-2xl">
      <Line data={data} options={options} plugins={[ChartDataLabels]} />
    </Card>
  );
};

export default SkillChart;
