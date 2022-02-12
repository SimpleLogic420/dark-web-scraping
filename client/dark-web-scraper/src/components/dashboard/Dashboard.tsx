import React , {useState}from 'react'
import {Doughnut} from 'react-chartjs-2'
import { Chart, DoughnutController, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { FullPasteType, Percentage } from '../../types/paste'
interface props {
    percentage: Percentage;
  }
function Dashboard({ percentage }: props) {
    Chart.register(ArcElement, DoughnutController, Tooltip, Legend, Title);
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

      
   

  return (
    <div className='doughnutDiv'>
       {/* @ts-ignore */}
      <Doughnut  options={options} data={data}  />
     
    </div>
  )
}

export default Dashboard


    