import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "..";
import { useParams } from "react-router-dom";
import ErrorComponent from "./ErrorComponent";
import { Box, Container } from "@chakra-ui/react";
import Loader from "./Loader";





// we use param from react router dom for acssesing the url data 


const CoinDetails = ()=>{
    
    // here i am going to create all states
    const [fetchedData, setFetchedData] = useState({});
    const [error,setError] = useState(false);
    const [loading,setLoading] = useState(true);


    const params = useParams();




    useEffect(()=>{

        const coinFetch = async ()=>{

            try{
                const {data} = await axios.get(`${server}/coins/${params.id}`)
                setFetchedData(data);
                setLoading(false)
                console.log(fetchedData);
                
            }catch(error){  
                setError(true);
                setLoading(false); 
            }

        }

        coinFetch();

    },[params.id])


    if(error){
        return  <ErrorComponent message={"something went wrong while fetching coin details data component"} />
    }
    
    return(

       <Container maxW={'container.xl'}>

        {loading ? <Loader /> :
            <>
            
            <Box width={'full'}>
                sdkjljad
            </Box>
            
            </>

         }

       </Container>
    )
}

export default CoinDetails;