//trabalhando com rotas dinâmicas
import { PostProps } from "../page";

export default async function DetailPost({
    params
}:{
    params : Promise<{id: string}>
}){

    const {id} = await params;

    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    const data: PostProps = await response.json();

    return (
        <div>
            <h1 className="text-center mt-2 mb-2 font-bold text-3xl">
                Detalhes do Post : {id}
            </h1>

            <div className="my-4">
                <h2 className="font-bold text-xl">
                    {data.title}
                </h2>
                <p>
                    {data.body}
                </p>
            </div>

        </div>
    );
}