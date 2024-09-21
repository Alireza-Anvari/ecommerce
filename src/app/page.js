"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [rangeval, setRangeval] = useState(null);

  return (
    <div className="relative">
  <div>
      <input type="range" className="custom-range" min="199" max="3999" 
       onChange={(event) => setRangeval(event.target.value)} />
      <h4>The range value is {rangeval}</h4>
    </div>
    </div>
  );
}
