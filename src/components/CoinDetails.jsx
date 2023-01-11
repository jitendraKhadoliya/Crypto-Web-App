import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "..";
import { useParams } from "react-router-dom";
import ErrorComponent from "./ErrorComponent";
import { Badge, Box, Button, Container, HStack, Image, Progress, Radio, RadioGroup, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text, VStack } from "@chakra-ui/react";
import Loader from "./Loader";
import Chart from "../components/Chart";





// we use param from react router dom for acssesing the url data 


const CoinDetails = ()=>{
    
    // here i am going to create all states
    const params = useParams();
    const [fetchedData, setFetchedData] = useState({});
    const [error,setError] = useState(false);
    const [loading,setLoading] = useState(true);
    const [currency, setCurrency] = useState("inr");
    const [days , setDays] = useState("4h");
    const [chartArray , setChartArray ] = useState([])
    const [timeframe , setTimeframe] = useState("4h")
   
    const currencySymbol = (currency === "inr") ? "₹" : (currency === "eur") ? "€"  : "$" ;

    const allBtns = ["4h","8h","24h","30d","60d","6m","1y","all"]



    
    const switchstate =  (key)=>{
        setTimeframe(key);
   switch (key) {
    case "4h": setDays("4h");
     break;
    case "8h": setDays("8h");
      break;
    case "24h": setDays("24h");
      break;
    case "30d": setDays("30d");
      break;
    case "60d": setDays("60d");
      break;
    case "6m": setDays("180d");
      break;
    case "1y": setDays("365d");
      break;
    case "all": setDays("max");
      break;
   
    default:setDays("4h");
          break;
   }

}


    useEffect(()=>{

        // here i am doing for testing purpose
        
        const coinFetch = async ()=>{

            try{
                setLoading(true);
                // here we are fetching data of coins 
                const {data} = await axios.get(`${server}/coins/${params.id}`)

                // here we will fetch data of coin chart data 

                const { data : chartData } =  await axios.get(`${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`)

                // i am setting here chartData.prices because i want only prices and dates data
                // console.log(chartArray);
                setFetchedData(data);
                setChartArray(chartData.prices);
                setLoading(false);
                
                
            }catch(error){  
                setError(true);
                setLoading(false); 
            }
            
        }
        
        coinFetch();
        
    },[params.id, currency ,days,timeframe ])
    

    if(error){
        return  <ErrorComponent message={"something went wrong while fetching coin details data component"} />
    }
    
    return(

       <Container maxW={'container.xl'}>

        {loading ? <Loader /> :(
            <>
             
            <Box width={'full'} borderWidth={'4'}>

                {/* here i am creating chart for it */}
                <Chart 
                arr={chartArray}
                currency={currencySymbol}
                days ={days}
                />
            </Box>



             {/* <Button    for changeing time  */}

             <HStack p={'4'} wrap={'wrap'} >
                 {/* here i am showing which timeframe i am on */}
                 <Text fontSize={'2xl'} pr={'2'} borderRight ={'2px'} >your current timeframe is - {timeframe}</Text>

                {allBtns.map((singlebtn)=>{
                  return  <Button key={singlebtn} variant={'ghost'} onClick={()=>(
                       
                      switchstate(singlebtn) 
                  )
            
                } 
                    >{singlebtn}</Button>
                })}


             </HStack>
            

             {/* here i am creating an radio button for real time changeing the data */}

             <RadioGroup value={currency} onChange={setCurrency} p={'5'}  > 
                    <HStack spacing={'4'}>
                        <Radio value="inr" >INR</Radio>
                        <Radio value="eur" >EUR</Radio>
                        <Radio value="usd" >USD</Radio>
                    </HStack>
                </RadioGroup>




                <VStack spacing={'4'} p={'16'} alignItems={"flex-start"} bg={'rgb(252,211,76)'} >

                    <Text alignSelf={'center'} fontSize={'small'} >
                        Last Updated On {Date(fetchedData.market_data.last_updated).split("G")[0]}
                    </Text>

                    <Image src={fetchedData.image.large} h={'16'} w={'16'} objectFit ={'contain'} alt={"CryptoRank Coin logo"} />

                    {/* now i will give all the statical data here i am taking real values that are name , currencySymbol , and total price change in last 24 hours */}
                    <Stat>
                        <StatLabel>
                            {fetchedData.name}
                        </StatLabel>

                        <StatNumber>
                            {currencySymbol}{fetchedData.market_data.current_price[currency]}
                        </StatNumber>

                        <StatHelpText>
                            <StatArrow type={fetchedData.market_data.price_change_percentage_24h > 0 ? "increase" : "decrease" }/>
                            {fetchedData.market_data.price_change_percentage_24h}%
                        </StatHelpText>
                     </Stat>

                    {/* in the badge i am assigning it for ranking of the coin */}
                    <Badge fontSize={'2xl'} bg={'blackAlpha.800'} color={'whiteAlpha.900'} >#{fetchedData.market_cap_rank}</Badge>
                    
                    {/* here i am going to create custom bar for showing data in last 24hour */}

                    <CustomBar 
                    low ={`${currencySymbol}${fetchedData.market_data.low_24h[currency]}`}
                    high = {`${currencySymbol}${fetchedData.market_data.high_24h[currency]}`}     
                     />

                     {/* after creating custom bar i will create value here for supply where i am going to show max supply */}
                   

                     <Box w={'full'} p={'4'}  >
                   
                        <Item title ={"Max Supply"} value={fetchedData.market_data.max_supply}  />
                        <Item title ={"Circulating Supply"} value={fetchedData.market_data.circulating_supply} />
                        <Item title ={"Market Cap"} value={`${currencySymbol} ${fetchedData.market_data.market_cap[currency]}`} />
                        <Item title ={"All Time Low"} value={`${currencySymbol} ${fetchedData.market_data.atl[currency]}`} />
                        <Item title ={"All Time High"} value={`${currencySymbol} ${fetchedData.market_data.ath[currency]}`} />
                     </Box>

                </VStack>



            </>
         )}

       </Container>
    )
}

const CustomBar = ({low,high})=>(
    <VStack w={'full'}>
        <Progress value={50} colorScheme={'teal'} w={'full'} />
        <HStack justifyContent={'space-between'} w={'full'} >
            <Badge children ={low} colorScheme={'red'} />
            <Text fontSize={'sm'} >24 Hour Range</Text>
            <Badge children={high} colorScheme={'green'} />
        </HStack>
    </VStack>
)

const Item = ({title,value}) =>(
    <HStack w={'full'} justifyContent={'space-between'} my={'4'} fontFamily={'Roboto'} >
        <Text textShadow={'dark-lg'} fontSize={'xl'} letterSpacing={'tight'} >{title}</Text>
        <Text textShadow={'dark-lg'} fontSize={'xl'} >{value ? value : NaN}</Text>
        {/* here i am checking first i have values or not if have then only i am going to print */}
    </HStack>
)



export default CoinDetails;