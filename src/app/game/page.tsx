'use client'

import { useEffect, useState } from "react"
import Door from "../_ui/Door"
import Link from "next/link"

const Game = () => {
  
  let [ [doorCount, winnerDoor], setSetup ] = useState<[number,number]>([3,1])
  let [ selected, setSelected ] = useState<any>(false)

  useEffect(() => {
    let doorSetup = localStorage.getItem('doorSetup') ?? "[3,1]"
    setSetup(JSON.parse(doorSetup))
  },[])

  const renderDoor = () => {
    let doors: any[] = []
    for (let index = 1; index <= doorCount; index++)
      doors.push(index)
    
    return (
      doors.map((number) => (
        <Door 
          key={number} 
          number={number} 
          gift={number===winnerDoor?true:false} 
          selected={number===selected?true:false} 
          select={() => setSelected(number)}
        />
      ))
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-700">
      <div className="flex flex-row gap-2">
        {renderDoor()}
      </div>
      <Link href="/" className="bg-slate-300 hover:bg-slate-200 my-4 px-4 py-1 rounded-md">Reiniciar</Link>
    </main>      
  )
}

export default Game