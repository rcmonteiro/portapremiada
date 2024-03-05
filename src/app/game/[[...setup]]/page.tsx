'use client'

import { Suspense, useEffect, useState } from "react"
import Door from "../../_ui/Door"
import Link from "next/link"
import { createDoors, updateDoors } from "../../_functions/core"
import DoorModel from "@/app/_model/door"
import Loading from "./loading"
import { useRouter } from "next/navigation"

const Game = ({ params }: { params: { setup: string } }) => {
  const router = useRouter()

  const [ doors, setDoors ] = useState<DoorModel[]>(createDoors([0,0]))
  const [ validDoors, setValid ] = useState<string>('')

  useEffect(() => {
    
    let doorSetup: [number, number] = [3,1]
    
    if (params.setup) doorSetup = [+params.setup[0] ?? 3, +params.setup[1] ?? 1]
    else {
      let localSetup = localStorage.getItem('doorSetup') ?? "[3,1]"
      localSetup = JSON.parse(localSetup)
      doorSetup = [+localSetup[0] ?? 3, +localSetup[1] ?? 1]
    }
    
    if(doorSetup[0]<3)
      setValid("A quantidade de portas não pode ser menor que 3!")
    
      if(doorSetup[1]<=0 || doorSetup[1]>doorSetup[0])
      setValid("A porta premiada deve estar dentro do total de portas configurado")

    localStorage.setItem('doorSetup',JSON.stringify(doorSetup))
    
    setDoors(createDoors(doorSetup))

  },[params.setup, router])

  const renderDoors = () => {
    return !validDoors ? doors.map((door,i) => (
      <Door 
        key={i} 
        value={door} 
        onChange={(newDoor) => setDoors(updateDoors(doors, newDoor))}
      />
    )): ( <h1 className="bg-red-700 text-xl py-2 px-4 text-white rounded-full">{validDoors}</h1>)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-700">
      <Suspense fallback={<Loading/>}>
        <div className="flex flex-row flex-wrap gap-2 self-stretch justify-around">
          {renderDoors()}
        </div>
        <Link href="/" className="bg-red-600 hover:bg-red-500 text-white my-4 px-4 py-1 rounded-md">Reiniciar</Link>
      </Suspense>
    </main>      
  )
}

export default Game