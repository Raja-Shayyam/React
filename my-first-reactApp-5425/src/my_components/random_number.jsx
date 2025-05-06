function Random()
{
  let number = Math.round(Math.random()*10);

  return <div>
    the random number is {number}
  </div>;
}


export default Random;