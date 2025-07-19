import Card from '@mui/material/Card';
import "./info.css";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';


export default function InfoBox({info}){
    const intial_url = "https://media.istockphoto.com/id/1089026982/photo/image-of-winter-fog-scene-in-delhi-with-india-gate-as-a-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=MQ6ONlYlQ75EzP0d9wX-VTcR_LtAjYXALooBxaCCNcs="
    const hot_url = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const cold_url = "https://images.unsplash.com/photo-1674407866481-a39b2239f771?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const rain_url = "https://plus.unsplash.com/premium_photo-1725408051956-a6dc142169bd?q=80&w=997&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="infobox">
        {/* <h3>Weather Information : {info.weather}</h3> */}
        <div className='cardcontainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {info.humidity > 80 
            ? rain_url
            : (info.temp > 15)
            ?hot_url 
            : cold_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Weather is: <i>{info.weather}</i></p>
            <p>The weather feels like: {info.feelslike}</p>
            <p>Temperature: {info.temp}&deg;C</p>
            <p>Humidity: {info.humidity}</p>
            <p>Max temp: {info.tempmax}</p>
            <p>Min temp: {info.tempmin}</p>
            

            
          
        </Typography>
      </CardContent>
      
    </Card>
        </div>
         
        </div>
    )
}