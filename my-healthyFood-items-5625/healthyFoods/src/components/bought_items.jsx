const Brought = ({buyed}) =>{
console.log(` this is ${buyed}`)
  return(
    <>
      <span style={{
        display:"block",
        margin : 5+'px',
        paddingLeft : 3+'px',
        color:"white",
        textAlign:"center"
      }}
      >{buyed}</span>
    </>
  );

}

export default Brought;