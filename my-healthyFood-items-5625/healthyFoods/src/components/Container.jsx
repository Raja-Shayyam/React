import style from'../allCSS/Container.module.css'

const Container = (props)=>{


  return(
    
      <div className={style.container}>
        {props.children}
      </div>
    
  );

}

export default Container;