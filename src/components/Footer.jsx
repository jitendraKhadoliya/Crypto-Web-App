import { Avatar, Box, Link, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const avatarSrc = "https://media.licdn.com/dms/image/C5603AQFGaw-wcD5h1A/profile-displayphoto-shrink_800_800/0/1616858244853?e=1678924800&v=beta&t=wVBW34V8pBMky1twaVlezevD7tjLr0qkXwXIIQgTqZQ";

const Footer = () => {
  return (
   <Box bgColor={'blackAlpha.900'} color={'whiteAlpha.700'} minH={'48'} px={'16'} py={['16','8']}> 

        <Stack h={'full'} direction={['column','row']} alignItems={'center'} >

            <VStack w={'full'} alignItems={['center','flex-start']} >
                <Text fontWeight={'bold'} color={'rgb(252,211,76)'} >About Us</Text>
                <Text fontSize={'sm'}  textAlign={['center','left']}  letterSpacing={'wide'} w={['full','60%']}  >
                I bring you a user-friendly crypto platform using the latest tech. Real-time data, easy navigation and packed with features to help you stay informed and make informed decisions. Thank you for choosing cryptoRank
                    </Text>
            </VStack>


            <VStack  w={['full','40%']} >
                    <Avatar boxSize={'28'} mt={['4','2']} src= {avatarSrc} />
                    <Link color={'rgb(252,211,76)'} h={'none'} target={'blank'}  href={'https://www.linkedin.com/in/jitendrakhadoliya/'} textTransform={'capitalize'} >Jitendra khadoliya</Link>                    
                    <Text h={'auto'} fontWeight={'bold'} letterSpacing={'wider'}> Founder </Text>
            </VStack>

        </Stack>


   </Box> 
  )
}

export default Footer;