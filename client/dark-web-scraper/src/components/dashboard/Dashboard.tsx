import React , {useState}from 'react'
import {Doughnut,Bar} from 'react-chartjs-2'
import { Chart, DoughnutController, ArcElement, Tooltip, Legend, Title ,BarController} from 'chart.js';
import { FullPasteType, Percentage } from '../../types/paste'
interface props {
    percentage: Percentage;
  }
function Dashboard({ percentage }: props) {
    Chart.register(ArcElement, DoughnutController,BarController, Tooltip, Legend, Title);
    const data = {
        
        labels: ['General', 'Crypto', 'Drugs And Weapons', 'Hacking', 'Illegal Adult Content'],
        datasets: [
          {
            label: '% of pastes',
            data: [
              percentage.General,
              percentage.Crypto,
              percentage.DrugsAndWeapons,
              percentage.Hacking,
              percentage.AdultsContent,
              
            ],
            backgroundColor: [
              'rgb(0, 176, 38)',
              'rgb(252, 149, 23)',
              'rgb(70, 137, 219)',
              'rgb(255, 226, 5)',
              'rgb(215, 20, 55)',
            ],
          },
        ],
      };
    
      const options = {
          
        responsive: true,
        plugins: {
          legend: {
            display: true,
            labels: {
              font: {
                size: 12,
              },
              boxWidth: 10,
              boxHeight: 10,
            },
            position: 'right',
          },
          title: {
            display: true,
            text: '% of pastes by category',
            font: {
              size: 20,
            },
          },
        },
      };

      const data2 = {
        
        labels: ['General', 'Crypto', 'Drugs And Weapons', 'Hacking', 'Illegal Adult Content'],
        datasets: [
          {
            label: '% of pastes',
            data: [
              percentage.General,
              percentage.Crypto,
              percentage.DrugsAndWeapons,
              percentage.Hacking,
              percentage.AdultsContent,
              
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              
              
            ],
            borderWidth: 1
          },
        ],
      };
    
      const options2 = {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
   

  return (
    <div className='doughnutDiv'>
       {/* @ts-ignore */}
      <Doughnut  options={options} data={data}  />
      {/* @ts-ignore */}
      <Bar options={options2} data={data2}/>
    </div>
  )
}

export default Dashboard


    