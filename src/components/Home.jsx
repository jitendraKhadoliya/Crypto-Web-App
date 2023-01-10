import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcSrc from '../assets/btc.png';
import {motion} from "framer-motion"

const Home = ()=>{
    return(
        <Box h={'85vh'} w={'full'} bgColor={'blackAlpha.900'} >
        <motion.div
         style={{
            height : "80vh"
        }}
        animate={{
            translateY : "20px"
        }}
        transition={{
            duration : 1,
            repeat : Infinity, 
            repeatType : "reverse"
        }}
        
        >
            <Image src={btcSrc} alt="cryptoRank" h={'full'} w={'full'} objectFit={'contain'} filter={'grayscale(1)'}  />    
        </motion.div>
        <Text
        fontSize={'6xl'} fontWeight={'thin'} textAlign={'center'} color={'rgb(252,211,76)'} mt={'-25px'} >cryptoRank</Text>
        </Box>
    )
}

export default Home;
