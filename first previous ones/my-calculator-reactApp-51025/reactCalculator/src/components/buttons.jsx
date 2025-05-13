import style from '../assets/button.module.css'

const Button = ({clicked})=>{
let vals=['C','1','2','+','3','4','-','5','6','*','7','8','/','9','0','.','='];

  return (
    <div 
      style={
        {
          maxWidth:80+'%',
          margin: 20 +'px' + 'auto',
        }
      }
    >
      {
      vals.map((v)=><button className={`${style['btn-display']}`}
        onClick={()=>clicked(v)}
      >
        {v}
        </button>)}
    </div>
  );

}

export default Button;