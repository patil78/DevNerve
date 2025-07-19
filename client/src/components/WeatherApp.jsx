// import Searchbox from "./Searchbox";
// import InfoBox from "./InfoBox";
// import { useState } from "react";

// export default function WeatherApp(){
//     const [weatherinfo, setweatherinfo] = useState({
//         city: "Delhi",
//         feelslike: 24.24,
//         temp: 25.05,
//         tempmin: 25.05,
//         tempmax: 25.05,
//         humidity: 47,
//         weather: "Haze",
//     });
//     let updateinfo =(newinfo) =>{
//         setweatherinfo(newinfo);
//     };
//     return (
//         <div style={{textAlign:"center"}}>
//             <h2>Weather App by devNerve</h2>
//             <Searchbox updateinfo = {updateinfo}/>
//             <InfoBox info={weatherinfo}/>
//         </div>
//     )

// }
import Searchbox from "./Searchbox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherinfo, setWeatherinfo] = useState(null);

    const updateinfo = (newinfo) => {
        setWeatherinfo(newinfo);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h2>DevNerve</h2>
            <Searchbox updateinfo={updateinfo} />
            
            {/* Show InfoBox only when weatherinfo is available */}
            {
                weatherinfo ? (
                    <div className="fade-in">
                    <InfoBox info={weatherinfo} />
                    </div>
                ) : (
                    <p style={{ marginTop: "2rem" }}>🌤️ Get weather information for your city above.</p>
                )
            }
        </div>
    );
}
