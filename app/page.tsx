'use client';

import Image from "next/image";
import Logo from './components/Logo';
import { useState } from 'react';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col sm:flex-row gap-[32px] row-start-2 items-center sm:items-start">
       
        <Logo />
        <div className="flex flex-row gap-8">
          <div 
            className="relative w-[300px] h-[300px] cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
          
          </div>
          <div className="relative w-[300px] h-[300px]">
           
          </div>
        </div>
      </main>
    </div>
  );
}
