'use client'
import { useState } from "react";

export function Button () {

    const [nome, setNome] = useState('Rafael');

    function handleChangeName() { 
        setNome('Rafael Alves');
    }

    return (
        <div className="flex flex-col mx-2 my-2 items-center justify-center">
            <button onClick={handleChangeName} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Button
            </button>
            <h3>
                Nome: {nome}
            </h3>
        </div>
        
    );
}