import { useState } from "react";

export const Form =()=>{
  const [email , setEmail] = useState('')
  const [pswod , setPaswod] = useState('')

  const [formData , setFormdata] = useState([]);
  
  const update=(event)=>{
    // setFormdata({Emal:e , Password:p})
    event.preventDefault()
    const newData = {Nemail:email , Npswod:pswod}

    setFormdata([...formData,newData])
    setEmail('')
    setPaswod('')
  }

  return (
  <>
    <form action="" onSubmit={update}>
      <div>
        <h1>
          <label htmlFor="E-mail">Email </label>
            <input type="email" name="E-mail" autoComplete="OFF" value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
        </h1>
      </div>

      <div>
        <h1>
          <label htmlFor="passwod">PassWord </label>
            <input type="password" name="passwod" autoComplete="OFF" value={pswod}
              onChange={(e)=>setPaswod(e.target.value)}
            />
        </h1>
      </div>
      
      <div>
        <button type="submit"> Submit it </button>
      </div>
    </form>

    <div >
      {formData.map((fd)=>{
        const {Nemail ,Npswod} = fd;
        // <h2 key={fd.Password}>Email: {fd.Emal} and password: {fd.Password}</h2>
        return <h2 key={Npswod}>Email: {Nemail} and password: {Npswod}</h2>
        })
        }
    </div>

  </>
  );

}