import React from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import ChartDataLabels from 'chartjs-plugin-datalabels';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

interface HistoryType {
  History: {
    division: string;
    leaguePoint: number;
    loses: number;
    normalizedPoint: number;
    tier: string;
    updated: number;
    wins: number;
  }[];
}

const ScoreChart = (props: HistoryType) => {
  const { History } = props;
  const pointHistory = History?.map(({ leaguePoint }) => leaguePoint);

  const options = {
    responsive: false,
    plugins: {
      datalabels: {
        display: (lp: any) => {
          return lp.dataIndex === 99;
        },
        color: 'black',
        align: 'end',
        labels: {
          padding: { top: 30 },
          title: {
            font: {
              weight: 'bold',
            },
          },
          value: {
            color: 'green',
          },
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  const labels = History?.map((record) => record.leaguePoint);

  const data = {
    labels: labels,
    datasets: [
      {
        type: 'line',
        label: 'leaguePoint',
        data: pointHistory,
        borderWidth: 1,
        pointStyle: 'circle',
        pointRadius: (lp: any) =>
          lp.index === pointHistory.length - 1 ? 5 : 0,
        tension: 0.1,
        backgroundColor: '#318EEF',
        borderColor: '#318EEF',
      },
    ],
  };

  return (
    <ChartWrap>
      <Line
        options={options}
        data={data}
        style={{ height: '84px', width: '154px' }}
      />
    </ChartWrap>
  );
};

export default ScoreChart;

const ChartWrap = styled.div``;
