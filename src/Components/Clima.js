const Clima = (props) =>{
  console.log(props.data)
  const parseCelsius = (kelvin) =>{
    return (parseInt(kelvin-273.15))
  }
  return(
    <>
    <div className="bg-white text-center p-5 space-y-6">
      <h1 className="text-3xl">El clima de {props.data.name} es:</h1>
      <h1 className="text-8xl font-semibold">{parseCelsius(props.data.main.temp)}°C</h1>
      <h1 className="text-3xl">Temperatura máxima: {parseCelsius(props.data.main.temp_max)}°C</h1>
      <h1 className="text-3xl">Temperatura mínima: {parseCelsius(props.data.main.temp_min)}°C</h1>
    </div>
    </>
  );
}
export default Clima;