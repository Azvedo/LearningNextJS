'use client' // o comando 'use client' é usado para informar ao Vercel que o código deve ser executado no lado do cliente

import { useEffect, useState } from "react";

export default function PageTeste() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data.posts));
    });

    return (
        <div>
            <h1 className="text-center mt-2 mb-2 font-bold text-3xl">
                Página Cliente
            </h1>

        <div className="flex flex-col gap-4" >
            {posts.map((post: any) => (
                <div key={post.id} className="bg-gray-400 mx-2 rounded-md">
                    <h2 className="font-bold">{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
      </div>
        </div>
      );
}