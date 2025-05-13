import '../App.css'
const Display=(props)=>{
console.log(props.dsply)
  return(
    <input type="text" name="" id="display" value={props.dsply}/>
  );
}

export default Display;