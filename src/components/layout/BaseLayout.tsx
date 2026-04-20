import React from 'react';
import {useRouter} from 'next/router';


export default function BaseLayout({ children, }: { children: React.ReactNode }) {

    const router = useRouter();
    
  return (
    <div className="w-full h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">BAPAS Website Inovasi</h1>
      </header>
      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
  );
}