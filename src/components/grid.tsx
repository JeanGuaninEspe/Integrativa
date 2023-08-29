import ActionAreaCard from "@/components/Cards";
import React from "react";
import Grid from '@mui/material/Grid';

const image1="https://www.costacruceros.es/content/dam/costa/costa-magazine/articles-magazine/islands/galapagos-islands/5-isole-galapagos-694x390.jpg.image.694.390.low.jpg"
const image2='https://www.costacruceros.es/content/dam/costa/costa-magazine/articles-magazine/islands/galapagos-islands/5-isole-galapagos-694x390.jpg.image.694.390.low.jpg';
const image3='https://www.costacruceros.es/content/dam/costa/costa-magazine/articles-magazine/islands/galapagos-islands/5-isole-galapagos-694x390.jpg.image.694.390.low.jpg';

export default function GridCards()
{

   return (
       <Grid container spacing={2}>
           <Grid item xs={12} sm={6} md={4}>
               <ActionAreaCard image={image1} height={140} title={"Quito"}/>
           </Grid>
           <Grid item xs={12} sm={6} md={4}>
               <ActionAreaCard image={image2} height={140} title={"Guayaquil"}/>
           </Grid>
           <Grid item xs={12} sm={6} md={4}>
               <ActionAreaCard image={image3} height={140} title={"Santo Domingo"}/>
           </Grid>
       </Grid>
    );
}
