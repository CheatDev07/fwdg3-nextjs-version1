'use client'

import { useState } from "react"

export default function AlphabetDisplayComponent(){

  const [letter, setLetter] = useState('');
  // const updateLetter = () => setLetter('A');
  // updateLetter()
  
  return (
    // jsx
    <section>
      {/* result  */}
      <h1>
        {letter} 
      </h1>

      <section className="flex gap-5">
      <button className="border p-2 rounded" onClick={()=>setLetter('A')}>+</button>
      <button className="border p-2 rounded" onClick={()=>setLetter('B')}>B</button>
      <button className="border p-2 rounded" onClick={()=>setLetter('C')}>C</button>
      <button className="border p-2 rounded" onClick={()=>setLetter('D')}>D</button>
      <button className="border p-2 rounded" onClick={()=>setLetter('E')}>E</button>
      <button className="border p-2 rounded" onClick={()=>setLetter('F')}>F</button>
    </section>
    </section>
  )
}