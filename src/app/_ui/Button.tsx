const Button = (props: any) => {
  return (
    <button 
      className="size-7 border rounded-md border-slate-300 bg-slate-200 hover:bg-slate-100"
      onClick={props.action}
    >{props?.label}</button>
  )
}

export default Button