import React from 'react';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonAppBar from '../../../components/Navbar/index.js';
import './index.css';

const LandingPage = ()=>{

   
    const handleDiscoverStockfolio = ()=>{
    }
    return (
        <>
            <ButtonAppBar />
        <div className='bg'>
        <Container className='home__head__container'>
            <h1 className='invest_h1'>
                Invest in ideas <br />with Stockfolio
            </h1>

            <p className="Intro__info-footer">Build your diversified long-term portfolio of<br/>stocks &amp; ETFs</p>

            <div>
            <Button onClick={handleDiscoverStockfolio} variant="contained">Discover Stockfolio</Button>
            </div>     

            </Container>
        </div>
        </>
    )

}


export default LandingPage;