import React ,{useEffect} from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {  FullPasteType, Percentage } from '../../types/paste'
import {getHours} from '../../services/helpers'
interface props {
  percentage: Percentage;
  pastelist: FullPasteType[];
}

function Barchart({ percentage,pastelist }: props) {

  function formatDateTo_DD_MM_YYYY(date: Date) {
    let dateStr=date.toString()
    let date1= dateStr.substring(4,15)
    const rightFormatDate=date1.split(" ")[1] + " " + date1.split(" ")[0] + " " + date1.split(" ")[2]
    return rightFormatDate;
 }
 const specificDayUploadHours=(specificDayArray:FullPasteType[])=>{
 const hoursArray =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] //24 indexes for every hour at day
 for(let paste of specificDayArray){
   const pasteUploadHourNumber=Number(paste.date.substring(13,15))
   hoursArray[pasteUploadHourNumber]+=1
   
 }
 return hoursArray;
 }
 
 const getSpecificDayPastes=()=>{
   const date1= new Date();
   const date= formatDateTo_DD_MM_YYYY(date1);
   const specificDayArray=[]
   for(let paste of pastelist){
     const croppedDate=paste.date.substring(0,11);
     if(croppedDate===date){
       specificDayArray.push(paste)
     }
   }
   const specificDayUploads=specificDayUploadHours(specificDayArray)
   return specificDayUploads;
 }
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
 const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Current day uploads',
      },
    },
  };
  const labels = getHours();


 const data = {
  labels,
  datasets: [
    {
      label: 'Uploads in Specific hour',
      data: getSpecificDayPastes(),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
    ],
    borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        
    ],
    borderWidth: 1
    }
  ],
};
 
  return (
    <div className='barChartDiv'>
      {/* @ts-ignore */}
      <Bar options={options} data={data}/>
    </div>
  )
}

export default Barchart