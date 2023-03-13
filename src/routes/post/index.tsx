import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import axios from "axios";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const usePostLoader = routeLoader$(async () => {
  // this could be sending an HTTP request to a microservice for example
  const { data } = await axios.get<IPost[]>(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return data;

  /*
   another examples could be:
   use a JavaScript ORM like TypeORM or Prisma for SQL databases
   use a JavaScript ODM like Mongoose for MongoDB
  */
});

export default component$(() => {
  const posts = usePostLoader();

  return (
    <div class="container mx-auto">
      <h1>Posts of the day</h1>
      <ol class="list-decimal">
        {posts.value?.map((p) => {
          return <li key={p.id}>{p.title}</li>;
        })}
      </ol>
    </div>
  );
});
