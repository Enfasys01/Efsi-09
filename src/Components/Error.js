const Error = (props) =>{
  return(
    <>
    	<div className=" text-center bg-red-500 rounded-md ring-red-700 ring-1 bg-opacity-70 p-2 my-5">{props.err}</div>
    </>
  )
}
export default Error