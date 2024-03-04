'use client'

import Link from "next/link";
import Button from "./_ui/Button";
import Input from "./_ui/Input";
import { updateSetup } from "./_functions/core";
import { useEffect, useState } from "react";

const Setup = () => {

  let [ [doorCount, selectedDoor], setSetup ] = useState<[number,number]>([3,1])

  useEffect(() => {
    let doorSetup = localStorage.getItem('doorSetup') ?? "[3,1]"
    setSetup(JSON.parse(doorSetup))
  },[])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-700">
      
      <div className="grid grid-cols-2">

        <div className="bg-red-300 size-28 table">
          <span className="align-middle text-center table-cell text-2xl">Monty Hall</span>
        </div>
        
        <div className="bg-white size-28 flex-col items-center justify-center">
          <span className="inline-block text-center text-sm leading-4 py-2">Quantidade de portas</span>
          <Input value={doorCount} update={(e:any) => updateSetup([+e.target.value,selectedDoor],setSetup)}/>
          <div className="flex flex-row items-center justify-center gap-1 py-1">
            <Button label="-" action={() => updateSetup([--doorCount,selectedDoor],setSetup)}/>
            <Button label="+" action={() => updateSetup([++doorCount,selectedDoor],setSetup)} />
          </div>
        </div>
        
        <div className="bg-white size-28">
          <span className="inline-block text-center text-sm leading-4 py-2">Porta com presente</span>
          <Input value={selectedDoor} update={(e:any) => updateSetup([doorCount,+e.target.value],setSetup)}/>
          <div className="flex flex-row items-center justify-center gap-1 py-1">
            <Button label="-" action={() => updateSetup([doorCount,--selectedDoor],setSetup)}/>
            <Button label="+" action={() => updateSetup([doorCount,++selectedDoor],setSetup)} />
          </div>
        </div>
        
        <Link href="/game">
          <div className="bg-green-300 size-28 table">
            <span className="align-middle text-center table-cell">Iniciar</span>
          </div>
        </Link>

      </div>

    </main>
  );
}

export default Setup