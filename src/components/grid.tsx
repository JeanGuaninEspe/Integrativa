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
               <ActionAreaCard image={image1} height={140} title={"Quito"} description="Quito es la capital de Ecuador, situada en la cordillera de los Andes. En el centro histórico de la ciudad, declarado Patrimonio de la Humanidad por la UNESCO, se encuentra la Plaza de la Independencia, rodeada por edificios gubernamentales barrocos y neoclásicos. La basílica del Voto Nacional, de estilo neogótico, tiene unas vistas panorámicas desde sus torres. En el centro de la ciudad se encuentra el palacio de Carondelet, sede presidencial."/>
           </Grid>
           <Grid item xs={12} sm={6} md={4}>
               <ActionAreaCard image={image2} height={140} title={"Guayaquil"} description="Guayaquil es una ciudad portuaria ecuatoriana, situada en la costa del Pacífico. Es conocida por sus numerosos parques, como el Parque Seminario, que alberga iguanas y loros, y el Parque Histórico, que cuenta con una granja y una villa colonial. La plaza de la Administración, que data del siglo XIX, tiene una fuente central y palmeras. La plaza de San Francisco, con su iglesia barroca, se encuentra junto al río Guayas y al Museo Nahim Isaías, que alberga artefactos históricos."/>
           </Grid>
           <Grid item xs={12} sm={6} md={4}>
               <ActionAreaCard image={image3} height={140} title={"Santo Domingo"} description="Santo Domingo de los Colorados, también conocida como Santo Domingo, es una ciudad ecuatoriana; cabecera cantonal del Cantón Santo Domingo, así como la cuarta urbe más grande y poblada de la Provincia de Santo Domingo de los Tsáchilas. Se localiza al centro-norte de la región litoral del Ecuador, en una extensa llanura atravesada por el río Toachi, a una altitud de 663 msnm y con un clima tropical de 23 °C en promedio."/>
           </Grid>
       </Grid>
    );
}
