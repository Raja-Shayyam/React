const InputField = ({onkeydown})=>{
  
  return(
    <div
      style={{
        margin:5 +'px',
        fontFamily : "fantasy"
      }}
    >
    <label htmlFor="text">Search : </label>
    <input  type="text"
      placeholder="Entre Food items ..."
      onKeyDown={onkeydown}
      style={{
        margin:5 +'px',
        fontFamily :"monospace",
        width : 70+'%', 
        border : 1+'px solid '+ 'black',
        padding : 3+'px'
      }}
    > </input>
    </div>
  );

}

export default InputField;


/**
 * 5-7-25
 * const InputField = ()=>{
  let i=0;
  const Onchange = (e)=>{
      //console.log( i++ +'>', e)
      console.log(">>| "+ i++ , e.target.value)
    
  }

  return(
    <div
      style={{
        margin:5 +'px',
        fontFamily : "fantasy"
      }}
    >
    <label htmlFor="text">Search : </label>
    <input  type="text"
      placeholder="Entre Food items ..."
      onChange={
        Onchange
      }
      style={{
        margin:5 +'px',
        fontFamily :"monospace",
        width : 70+'%', 
        border : 1+'px solid '+ 'black',
        padding : 3+'px'
      }}
    > </input>
    </div>
  );

}

export default InputField;
 * 
 */