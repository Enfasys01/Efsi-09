import Select from "react-select";

const Form = () =>{
	const options= [
		{value:'Argentina' ,label:'Argentina' },
		{value:'Chile' ,label:'Chile' },
		{value:'Uruguay' ,label:'Uruguay' },
		{value:'Mexico' ,label:'Mexico' },
		{value:'Brazil' ,label:'Brazil' },
	]
	return(
		<>
			<form>
				<ul className="space-y-2">
					<li>
						<label for='city'>City</label>
					</li>
					<li>
						<input type='text' className='py-1 rounded-md border-[2px]' style={{width:'100%'}}></input>
					</li>
					<li>
						<label for='countries'>Country</label>
					</li>
					<li>
						<Select options={options} placeholder='Select country...'/>
					</li>
					<li>
						<input type='submit' className='bg-yellow-400 rounded-md py-2' style={{width:'100%'}}></input>
					</li>
				</ul>
			</form>
		</>
	);
}

export default Form;