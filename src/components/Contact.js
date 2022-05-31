import React from 'react';
import Backdrop from './Backdrop';
import { Link } from 'react-router-dom'
import Form from "./Form";
import { ChakraProvider, CSSReset, Box } from "@chakra-ui/react";


function Contact() {

    return(
        <div className='bgc'>
        <Backdrop />
        <div className="btn-box">Contact: </div> 

        
        <div class="form">

            <ChakraProvider>
            <CSSReset />
                <Box  p={4}>
                    <Form />
                </Box>
            </ChakraProvider>
        </div>


        <ul class="social">
        <a className='github' href='https://www.github.com/tyohare'>  Github </a>

        </ul>
    

    
    </div>
    )
}

export default Contact;