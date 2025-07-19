import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./Searchbox.css";
import { useState } from 'react';


export default function Searchbox({updateinfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"; 
    const API_KEY = "4d8f4a02a475b9773b0ec32f35eba034";

    const getWeatherInfo = async () => {
        try{
             let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            const jsonResponse = await response.json();
            console.log(jsonResponse);

            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempmin : jsonResponse.main.temp_min,
                tempmax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelslike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            };
            console.log(result);
            return result;

        }
        catch(err){
            throw(err);

        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
        if (!city.trim()) return;//
        console.log("Searching weather for:", city);

        let newinfo = await getWeatherInfo();
        updateinfo(newinfo);
        }
        catch(err){
            setError(true);
        }
        
    };
    
    return (
        <div className='searchbox'>
            {/* <h3>Search for the weather</h3> */}
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br /><br />
                <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    type="submit" 
                >
                    Search
                </Button>
                {error && <p style={{color: "red"}}>Invalid Cities!</p>}
            </form>
        </div>
    );
}
