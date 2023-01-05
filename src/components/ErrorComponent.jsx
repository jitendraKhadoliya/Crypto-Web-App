import { Alert, AlertIcon  } from "@chakra-ui/react";
import React from "react";

const ErrorComponent = ({message})=>{

    return (
       <Alert 
            status="error"
            position={'fixed'}
            left={'50%'}
            justifyContent={'center'}
            transform={'translateX(-50%)'}
            bottom = {'40'}
            w={'container.xl'}
       >
        <AlertIcon/>
      {message} 

       </Alert>
    )
}

export default ErrorComponent;