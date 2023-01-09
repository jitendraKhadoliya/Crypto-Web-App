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

// 6:15

const Chart = ({arr =[] ,days , currency })=>{

    console.log("chart componet array" ,arr);
    const dates = [];
    const prices = [];


    for(let i=0; i< arr.length; i++ ){

        
        dates.push(new Date(arr[i][0]).toLocaleDateString() );
        prices.push(arr[i][1])
        // console.log(dates);
    }

    // console.log(prices);



    return <Line 
    options={{
        responsive : true,
    }}

    data= {{

        labels : dates, 
        datasets : [
            {
                label : `price in ${currency}`,
                data : prices,
                borderColor : 'red',
                // backgroundColor : "white" 
            }
        ]
    }
    }
     />
}

export default Chart;