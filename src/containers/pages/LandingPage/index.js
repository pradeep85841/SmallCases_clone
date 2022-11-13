import React from 'react';
import { Container, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonAppBar from '../../../components/Navbar/index.js';
import './index.css';
import easyuse from '../../../Assets/easyuse.gif';
import understand from '../../../Assets/understand.svg';
import professional from '../../../Assets/professional.svg';
import customise from '../../../Assets/customise.svg';

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
       <h2>A stockfolio is a basket of stocks that reflects an idea</h2>
        <p>stockfolio are portfolios of stocks or ETFs, that track a theme, strategy or objective</p>
        <img className='gif'  src= {easyuse} alt="display gif" />
       </Grid>
       </Grid>

       <Grid container item xs={6} direction="column" >

       <Grid container spacing={2} >

       <Grid container item xs={6} direction="column" >
       <Grid item>
       <img className='understandimg'  src= {understand} alt="understand img" />
       </Grid>
       <Grid item>
       <img className='professionalimg'  src= {professional} alt="professional img" />
       </Grid>
       <Grid item>
       <img className='customiseimg'  src= {customise} alt="customise img" />
       </Grid>
       </Grid>

       <Grid container item xs={6} direction="column" >
       <Grid item>
       <h3>Simple to understand</h3>
       <p>stockfolio are modern investing products based on simple ideas you can understand.</p>
       </Grid>
       <Grid item>
       <h3>Managed by professionals</h3>
       <p>stockfolio are created by India’s leading finance experts & backed by solid research.</p>
       </Grid>
       <Grid item>
       <h3>Designed for you</h3>
       <p>stockfolio are fully customizable. Auto Edited list constituents any time.</p>
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