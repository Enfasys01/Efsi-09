import axios from "axios";
import { useState } from "react";
import Clima from "../Components/Clima";
import Error from "../Components/Error";
import Form from "../Components/Form";
import {TbLoader} from 'react-icons/tb'

const Home = () =>{
  const [err, setErr] = useState(false)
  const [city, setCity] = useState('');
	const [country, setCountry] = useState('')
  const [weather, setWeather] = useState(false)
  const [isloading, setIsloading] = useState(false)
  
  const getWeather = async () =>{
    setIsloading(true)
    const {data} = await axios.get('http://api.openweathermap.org/data/2.5/weather?q='+city+','+country+'&APPID=467eb2e2a1738c82e813a30610d7c354')
    setWeather(data)
  }
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    setWeather(false)
    if(city===''||country===''){
      setErr('Todos los campos deben ser rellenos')
    }else{
      getWeather().then(()=>{setErr(false); setIsloading(false)}).catch(err=>{setErr('No se ha encontrado esa ciudad'); setIsloading(false)})
    }
  }


    return(
      <>
        <div className="flex">
          <div className="flex-1 pt-12">
          {err===false?'':
            <Error err={err}/>
          }
            <Form handleSubmit={handleSubmit} setCity={setCity} setCountry={setCountry}/>
          </div>
          <div className="flex-1 p-12">
            {isloading?
            <div className="text-8xl text-white flex justify-center animate-spin">
            <TbLoader/>
            </div>:''}
            {weather?<Clima data={weather}/>:''}
          </div>
        </div>
      </>
    )
}

export default Home;