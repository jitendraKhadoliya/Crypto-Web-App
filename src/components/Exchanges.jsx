import { Container, HStack, VStack ,Image, Heading ,Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { server } from '..';
import ErrorComponent from './ErrorComponent';




const Exchanges = () => {
  
  // i will print that data using useState Hook
  const[fetchedData,setFetchedData] = useState([]);
  const[loading, setLoading] = useState(true);
  const [error , setError] = useState(false);
  
  useEffect(()=>{

    // here i am going to fetch data of exchanges using axios with coingeko api
    const exchangeCoins = async ()=>{

      try{
        const {data} = await axios.get(`${server}/exchanges`);
  
      
        // here for randoring purpose i will set it 
        setFetchedData(data);
        // once my data is randored then i will remove loading screen 
        setLoading(false);
        
      }catch(error){
        setError(true);
        setLoading(false);
      }
      
    }
    exchangeCoins();
  
  },[])



  // here i have rander error condition if if goes false then it will be activated

  if(error) {  return < ErrorComponent message={
    "you got an error in Exchange component"
  } />
}


  return (
    
    <Container maxW={'container.xl'} >

      {loading ? <Loader/> : <>
            <HStack flexWrap={'wrap'}>
                {
                fetchedData.map((i)=>(

                     <ExchangeCart
                     key = {i.id} 
                     name = {i.name}
                     image = {i.image}
                     trustScore = {i.trust_score }
                     trustRank = {i.trust_score_rank}
                     siteUrl = {i.url}
                     yearOfEstablished ={i.year_established}

                     />)
                  )
                } 
            </HStack>
        </>
      }
      
    </Container>
    
    
  )
}


const Loader = ()=>{

  return <div>Loader</div>
}

const ExchangeCart = ({name , image , trustScore ,trustRank ,siteUrl , yearOfEstablished})=>{
  return (
    <a href={siteUrl} target={"blank"}>

          <VStack w={'52'} shadow={'2xl'} p={'5'}  borderRadius = {'lg'} transition ={"all 0.3s"} m ={'4'} 
          css={{
            "&:hover":{
              transform :"scale(1.1)",
            }
          }}
           >
              <Image src = {image}   objectFit={'contain'} alt={"Exchange"} />
              <Text noOfLines = {'1'} > {name}</Text>
              <Heading size={'md'} noOfLines={'1'} >Trust Rank  {trustRank}</Heading>
              <Text noOfLines = {'1'} > Trust Score :{trustScore}</Text>
              <Text noOfLines={'1'} > Year : {yearOfEstablished}</Text>

          </VStack>
    </a>
  )
}


export default Exchanges;
