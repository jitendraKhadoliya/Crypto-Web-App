import { Button, Container, HStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState }  from "react";
import { server } from "..";
import CoinsCart from "./CoinsCart";
import ErrorComponent from "./ErrorComponent";
import Loader from "./Loader";

const Coins =()=>{
    const[loading, setLoading] = useState(true);
    const [fetchedData ,setFetchedData] = useState([])
    const[error, setError] = useState(false);
    const[currency, setCurrency] = useState("inr");
    const[page,setPage] = useState(1);

    const currencySymbol = (currency === "inr") ? "₹" : (currency === "eur") ? "€"  : "$" ;

    const changePage =(page)=>{

        setPage(page);
        setLoading(true);
    }

    useEffect(()=>{

        
        const coinsFetch = async()=>{


            try{
                const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
                console.log(data);
                setFetchedData(data);
                setLoading(false);

            }catch(error){
                setError(true);
                setLoading(false);
            }
            
        }

        coinsFetch();

    },[currency][page] )

    // error handing inside the new component


    if(error){
      return <ErrorComponent message={"something is problem inside the coins component"} /> 
    }




    return (
        <Container maxW={'container.xl'}>


            {loading ? <Loader /> :   
            <HStack flexWrap={'wrap'}>
                { 
                fetchedData.map((i)=>{

                    // here i am creating an extra page component for extra details and styleing them

                        return < CoinsCart 
                        id = {i.id}
                        key={i.id}
                        image = {i.image} 
                        symbol = {i.symbol}
                        name = {i.name} 
                        price ={i.current_price}
                        currencySymbol = {currencySymbol}

                         />
                    })
                }   

                </HStack>
            }   

            {/* <Button bg={'blackAlpha.900'} color={'white'} onClick = {()=> changePage(2) } >2</Button> */}
        </Container>
        
    )
}

export default Coins;