import { Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";


const CoinsCart =({image ,symbol,name,price,id, currencySymbol = "₹"})=>{


    return(
        <Link to={`/coin/${id}`}  >
                <VStack w={'52'} bg={'rgb(0 0 0 / 24%)'}  p={'5'} borderRadius ={'lg'} shadow={'2xl'} margin ={'4'} transition ={'all 0.3s'} 
                    css = {{
                        "&:hover" : {
                            transform : "Scale(1.1)",
                        }
                    }}
                    >
                    <Image src={image} objectFit={'contain'} />
                    <Text noOfLines={'1'} fontSize={'lg'} >{symbol}</Text>
                    <Text noOfLines={'1'} fontSize ={'2xl'} >{name}</Text>
                    <Text noOfLines={'1'}>{price ? `${currencySymbol} ${price}`: "NAN"}</Text>
                </VStack>
           </Link>
    )
}


export default CoinsCart;