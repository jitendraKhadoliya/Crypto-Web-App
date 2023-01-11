import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
 } from "chart.js";

 
 ChartJS.register(CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
    );



const Chart = ({arr =[] ,days , currency })=>{

    const dates = [];
    const prices = [];


    for(let i=0; i< arr.length; i++ ){
        if(days === "4h" ) { 
            dates.push(new Date(arr[i][0]).toLocaleTimeString());
        }else{
            dates.push(new Date(arr[i][0]).toLocaleDateString());
        }
            
        prices.push(arr[i][1]);
    }

    const data ={

        labels : dates, 
        datasets : [
            {
                label : `price in ${currency}`,
                data : prices,
                borderColor : 'rgb(252,211,76)',
                backgroundColor : "white",
            }
        ]
    }

    // here i am using line chart

    return <Line 
    options={{
        responsive : true, 
        radius : 1,
        
    }}

    data= {data}
     />
}

export default Chart;