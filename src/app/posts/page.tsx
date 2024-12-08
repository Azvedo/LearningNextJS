import Link from "next/link";

export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface ResponseProps {
  posts: PostProps[];
}

export default async function Posts() {

  const response = await fetch('https://dummyjson.com/posts');
  const data: ResponseProps = await response.json();
  

  async function handleFetchPosts() {
    //server action
    'use server' //permite que a função seja executada no servidor
    const response = await fetch('https://dummyjson.com/posts');
    const data: ResponseProps = await response.json();

    console.log(data.posts);
  }


  async function handleSearchUsers(formData: FormData) {
    'use server'

    const userId = formData.get('id');

    const response = await fetch(`https://dummyjson.com/posts/user/${userId}`);
    const data: ResponseProps = await response.json();

    console.log(data.posts);
  }


  return (
    <div>
      <h1 className="text-center mt-2 mb-2 font-bold text-3xl">
        Todos os Posts
      </h1>

      <button onClick={handleFetchPosts}>
          Clique aqui
      </button>

      <form 
        className="flex gap-2 my-4"
        action={handleSearchUsers}
      >
        <input 
          type="text" 
          placeholder="id do usuario"
          className="border border-gray-200 p-2"
          name="id"
        />
        <button
          className="bg-blue-500 text-white p-2"
          type="submit"
        >
        Buscar usuário
        </button>
      </form>

      <div className="flex flex-col gap-4" >
        {data.posts.map((post) => (
          <div key={post.id} className="bg-gray-400 mx-2 rounded-md">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
            <Link href={`/posts/${post.id}`} className="text-blue-600">
              Ver detalhes
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

//com o server action nãp é necessário o uso de useState, useEffect e etc