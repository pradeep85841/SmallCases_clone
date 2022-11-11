import React from 'react';
import { Container, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonAppBar from '../../../components/Navbar/index.js';
import './index.css';
import easyuse from '../../../Assets/easyuse.gif'

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
        <Container className='home__body__container'>
        <Grid container spacing={2} >
       <Grid container item xs={6} direction="column" >
       <Grid item>
       <h2>A smallcase is a basket of stocks that reflects an idea</h2>
        <p>smallcases are portfolios of stocks or ETFs, that track a theme, strategy or objective</p>
        <img className='gif'  src= {easyuse} alt="display gif" />
       </Grid>
       </Grid>

       <Grid container item xs={6} direction="column" >

       <Grid container spacing={2} >

       <Grid container item xs={6} direction="column" >
       <Grid item>

       </Grid>
       </Grid>

       <Grid container item xs={6} direction="column" >
       <Grid item>
       <h3>Simple to understand</h3>
       <p>smallcases are modern investing products based on simple ideas you can understand.</p>
       </Grid>
       </Grid>
       
       </Grid>
       </Grid>
       </Grid>
      </Container>
        </>
    )

}


export default LandingPage;