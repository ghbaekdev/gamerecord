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
  const recentTier = History[History.length - 1].tier;
  const recentUpdated = History[History.length - 1].updated;
  const date = new Date(recentUpdated);
  console.log(History);

  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let updatedDate =
    year.toString().slice(-2) +
    '.' +
    ('00' + month.toString()).slice(-2) +
    '.' +
    ('00' + day.toString()).slice(-2);

  const options = {
    // responsive: false,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        display: (lp: any) => {
          return lp.dataIndex === 99;
        },
        color: 'black',
        align: 'left',
        font: {
          size: '9px',
        },
        formatter: (value: number) => {
          return `         
         ${recentTier}
             ${value} LP
            ${updatedDate}`;
        },
        labels: {
          value: {
            color: 'black',
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
          lp.index === pointHistory.length - 1 ? 2 : 0,
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
        style={{ height: '65px', width: '174px' }}
      />
    </ChartWrap>
  );
};

export default ScoreChart;

const ChartWrap = styled.div`
  position: relative;
  width: 174px;
  height: 77px;
`;
