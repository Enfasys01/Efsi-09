import axios from "axios";
import { useState } from "react";
import Clima from "../Components/Clima";
import Form from "../Components/Form";

const Home = () =>{
  const [city, setCity] = useState('');
	const [country, setCountry] = useState('')
  const [weather, setWeather] = useState(false)
  
  const getWeather = async () =>{
    const {data} = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=buenos%20aires,argentina&APPID=467eb2e2a1738c82e813a30610d7c354')
    console.log(data)
    setWeather(data)
  }
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(city)
    console.log(country)
    getWeather()
  }


    return(
      <>
        <div className="flex">
          <div className="flex-1">
            <Form handleSubmit={handleSubmit} setCity={setCity} setCountry={setCountry}/>
          </div>
          <div className="flex-1 p-12">
            {weather?<Clima data={weather}/>:''}
          </div>
        </div>
      </>
    )
}

export default Home;