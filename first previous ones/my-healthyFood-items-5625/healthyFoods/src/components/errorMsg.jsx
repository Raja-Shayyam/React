export function Error({Items})
{
  console.log(Items)
  return(
    <>
    {Items.length === 0 &&
      <span> <li>I am Still hungary</li> Items in cart {Items.length} </span>}
    </>
  );

}


/**
 * export function Error(props)
{
  return(
    <>
    {props.length === 0 &&
      <span> <li>I am Still hungary</li> Items in cart {props.length} </span>}
    </>
  );

}
 */