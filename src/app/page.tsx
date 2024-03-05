'use client'

import Link from "next/link";
import { useState } from "react";
import Card from "./_ui/Card";
import NumberInput from "./_ui/NumberInput";

const Setup = () => {

  const [ doorCount, setDoorCount ] = useState(3)
  const [ doorWinner, setDoorWinner ] = useState(1)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-700">
      <div className="grid grid-cols-2 gap-1">
        <Card color="red-700">
          <h1 className="text-5xl">Monty Hall</h1>
        </Card>
        <Card color="white">
          <NumberInput 
            text="Quantidade de portas" 
            value={doorCount} 
            onChange={(n: number) => setDoorCount(n)}/>
        </Card>
        <Card color="white">
          <NumberInput 
            text="Porta com presente" 
            value={doorWinner} 
            onChange={(n: number) => setDoorWinner(n)}/>
        </Card>
        <Card color="green-500">
          <Link href={`/game/${doorCount}/${doorWinner}`}>
            <div className="flex flex-grow h-full items-center justify-center text-3xl">Iniciar</div>
          </Link>
        </Card>
      </div>

    </main>
  );
}

export default Setup