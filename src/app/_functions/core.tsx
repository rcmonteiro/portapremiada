import DoorModel from "../_model/door"

const createDoors = ([count, winnerDoor]: [number,number]): DoorModel[] => {
  return Array.from({ length: count }, (_,i) => {
    const number = i + 1
    const hasGift = number === winnerDoor ? true : false
    return new DoorModel(number, hasGift)
  })
}

const updateDoors = (doors: DoorModel[], updatedDoor: DoorModel) => {
  return doors.map((currentDoor) => {
    if (currentDoor.number===updatedDoor.number)
      return updatedDoor
    return updatedDoor.opened ? currentDoor : currentDoor.unSelect()
  })
}

export { 
  createDoors,
  updateDoors
}