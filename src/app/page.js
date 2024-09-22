"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [rangeval, setRangeval] = useState(null);

  return (
    <div className="relative">
  <div>
 
      <h4 className="h-96 w-96 bg-green-600">The range value is {rangeval}</h4>
      <h4 className="h-96 w-96 bg-green-600">The range value is {rangeval}</h4>
      <h4 className="h-96 w-96 bg-green-600">The range value is {rangeval}</h4>
      <h4 className="h-96 w-96 bg-green-600">The range value is {rangeval}</h4>
      <h4 className="h-96 w-96 bg-green-600">The range value is {rangeval}</h4>
      <h4 className="h-96 w-96 bg-green-600">The range value is {rangeval}</h4>
      <h4 className="h-96 w-96 bg-green-600">The range value is {rangeval}</h4>
      <h4 className="h-96 w-96 bg-green-600">The range value is {rangeval}</h4>
    </div>
    </div>
  );
}
