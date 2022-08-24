import axios from "axios";
import { useState } from "react";
import Form from "../Components/Form";

const Home = () =>{
  const [city, setCity] = useState('');
	const [country, setCountry] = useState('')

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(city)
    console.log(country)
  }

  const getWeather = async () =>{
    const {data} = axios.get()
  }

    return(
      <>
        <div className="flex">
          <div className="flex-1">
            <Form handleSubmit={handleSubmit} setCity={setCity} setCountry={setCountry}/>
          </div>
          <div className="flex-1">
            sdfsd
          </div>
        </div>
      </>
    )
}

export default Home;