import React,{FC} from 'react'

type props={
  type?:ButtonTypes,
  children?: React.ReactNode;
}

enum ButtonTypes {
  "primary"
}
const primaryStyle:React.CSSProperties={
  padding:"4px 15px",
  backgroundColor:"#1677ff",
  color:"#fff",
  border:"1px solid transparent",
  borderRadius:"6px",
};

const defaultStyle:React.CSSProperties={
  padding:"4px 15px",
  borderColor:"#d9d9d9",
  border:"1px solid transparent",
  borderRadius:"6px",
}

const style=(type:ButtonTypes|undefined)=>{
  switch(type){
    case ButtonTypes.primary:
      return primaryStyle;
    default:
      return defaultStyle;
  }
}

const Button:FC<props>=({type,children})=>{
  
  return (
    <>
      <button style={style(type)}>{children}</button>
    </>
  )
}

export default Button;