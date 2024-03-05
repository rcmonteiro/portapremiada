import Button from "./Button"

interface NumberInput {
  text: string
  value: number
  onChange: any
}

const NumberInput = (props: NumberInput) => {

  const dec = () => props.onChange(props.value - 1)
  const inc = () => props.onChange(props.value + 1)

  return (
    <div className="flex flex-col flex-grow h-full items-center justify-center gap-2">
      <div className="text-slate-500">{props.text}</div>
      <div className="text-slate-700 text-7xl">{props.value}</div>
      <div className="flex flex-row gap-2">
        <button 
          className="size-7 border text-slate-600 rounded-md border-slate-300 bg-slate-200 hover:bg-slate-100"
          onClick={() => dec() }
        >-</button>
        <button 
          className="size-7 border text-slate-600 rounded-md border-slate-300 bg-slate-200 hover:bg-slate-100"
          onClick={() => inc() }
        >+</button>
      </div>
      
    </div>
  )
}
export default NumberInput