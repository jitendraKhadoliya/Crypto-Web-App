import { HStack ,Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header =()=>{

    return(

        <HStack p={'4'} bg={'blackAlpha.900'} shadow={'base'}>

            <Button variant={'unstyled'} color={'white'}>
                <Link to="/" >Home</Link>
            </Button>

            <Button variant={'unstyled'} color={'white'}>
                <Link to='/exchanges'>Exchanges</Link>
            </Button>

            <Button variant={'unstyled'} color={'white'}>
                <Link to='/coins'>Coins</Link>
            </Button>

        </HStack>

    )
}


export default Header;

