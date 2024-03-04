import Image from "next/image"
import { useState } from "react"

const Door = (props: any) => {

  const [ open, setOpen ] = useState(false)

  return (
    <div className="flex flex-col gap-0">
      <div onClick={props.select} className={`
        ${open ? 'bg-black' : 'bg-orange-500'} 
        ${props.selected ? 'border-yellow-200' : 'border-orange-800'} 
        bg-orange-500 w-24 h-48 border-4 border-b-0 mx-auto relative`}>
        <div className={`${open ? 'invisible' : 'visible'} text-orange-800 text-center text-xl`}>{props.number}</div>
        <button onClick={(e) => {e.stopPropagation(); setOpen(!open)}} className={`${open ? 'invisible' : 'visible'} bg-orange-800 w-5 h-1 absolute top-1/2 left-2`}></button>
        <Image className={`${open && props.gift ? 'visible' : 'invisible'} absolute bottom-1 left-1/2 transform -translate-x-1/2`} width="48" height="48" src="/gift.png" alt="Gift" />
      </div>
      <div className="w-32 h-2 bg-slate-200"></div>
    </div>
    
  )
}
export default Door