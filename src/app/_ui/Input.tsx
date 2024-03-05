const Input = (props: any) => {
  return (
    <input
      type="number"
      value={props.value}
      onChange={props.update}
      className="w-3/4 mx-auto block border border-slate-300 rounded-md text-center"/>
  )
}

export default Input