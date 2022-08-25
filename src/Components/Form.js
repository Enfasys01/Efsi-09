import { useState } from "react";
import Select from "react-select";

const Form = (props) =>{
	const options= [
		{value:'Argentina' ,label:'Argentina' },
		{value:'Chile' ,label:'Chile' },
		{value:'Uruguay' ,label:'Uruguay' },
		{value:'Mexico' ,label:'Mexico' },
		{value:'Brazil' ,label:'Brazil' },
	]

	return(
		<>
			<form onSubmit={props.handleSubmit}>
				<ul className="space-y-2">
					<li>
						<label htmlFor='city'>City</label>
					</li>
					<li>
						<input 
						type='text' 
						className='py-1 rounded-md border-[2px] px-2 focus:outline-none focus:border-blue-500' 
						style={{width:'100%'}}
						onChange={function(event){props.setCity(event.target.value)}}></input>
					</li>
					<li>
						<label htmlFor='countries'>Country</label>
					</li>
					<li>
						<Select 
						options={options} 
						placeholder='Select country...'
						onChange={function(event){props.setCountry(event.value)}}/>
					</li>
					<li>
						<input type='submit' className='ring ring-offset-0 ring-yellow-400 bg-yellow-400 rounded-md py-1 mt-4  hover:ring-yellow-500 cursor-pointer focus:outline-none focus:ring-yellow-500 active:bg-yellow-500' style={{width:'100%'}}></input>
					</li>
				</ul>
			</form>
		</>
	);
}

export default Form;