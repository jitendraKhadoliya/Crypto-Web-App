import { HStack ,Button, Stack } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink,  } from "react-router-dom";

const Header =()=>{

    return(
        <>

       
        <Stack p={'3'} bg={'blackAlpha.900'} shadow={'base'}  flexDirection={'row'}  justifyContent={'space-around'} >

        <HStack color={'white'} textTransform={'capitalize'} letterSpacing={'wider'} alignSelf ={'flex-end'} w={'sm'} >
            <Button variant={'unstyled'} color={'white'} >
                <NavLink to={"/"}>cryptoRank</ NavLink >
            </Button>
        </HStack>

        <HStack justifyContent={'space-around'}  >

            <Button variant={'unstyled'} color={'white'} mr={'1'}  >
                <Link to="/" >Home</Link>
            </Button>

            <Button variant={'unstyled'} color={'white'} mr={'1'}>
                <Link to='/exchanges'>Exchanges</Link>
            </Button>

            <Button variant={'unstyled'} color={'white'} mr={'1'}>
                <Link to='/coins'>Coins</Link>
            </Button>
        </HStack>

        </Stack>

        </>
    )
}


export default Header;

