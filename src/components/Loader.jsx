import { Box, Spinner, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Loader = ()=>{
    return (
       <VStack h={'90vh'} justifyContent={'center'} alignItems={'center'} >

        <Box transform={'scale(3)'} >
            <Spinner size={'xl'} />
            <Text>fetching...</Text>
         </Box>

       </VStack>
    )
}


export default Loader;