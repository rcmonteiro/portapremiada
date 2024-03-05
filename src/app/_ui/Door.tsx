import Gift from "./Gift"
import DoorModel from "../_model/door"

interface DoorProps {
  value: DoorModel,
  onChange: (newDoor: DoorModel) => void
}

const Door = (props: DoorProps) => {

  const door = props.value

  const switchSelected = (e:any) => {
    if(!door.opened) props.onChange(door.switchSelected())
  }
  const open = (e:any) => {
    e.stopPropagation()
    props.onChange(door.open())
  }

  const renderDoor = () => {
    return (
      <div className={`bg-orange-500 relative flex-grow`}>
        <div className="text-white py-2 text-center text-xl">{door.number}</div>
        <button onClick={(e:any) => open(e)} className="bg-orange-800 w-4 h-4 rounded-full absolute top-1/2 -mt-2 left-2"></button>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-0">
      <div onClick={(e:any) => switchSelected(e)} className={`${door.selected ? 'border-yellow-200' : 'border-orange-800'} w-24 h-48 border-4 border-b-0 mx-auto relative bg-black flex`}>
        {!door.opened ? renderDoor() : door.hasGift ? <Gift /> : null }
      </div>
      <div className="w-32 h-2 bg-slate-200"></div>
    </div>    
  )
}
export default Door 