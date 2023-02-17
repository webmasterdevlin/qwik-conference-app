import { component$, useStore } from "@builder.io/qwik";

export default component$(() => {
  const store = useStore({ count: 0 });
  console.log("Render CounterRoot");
  return (
    <div>
      <CounterChild store={store} />
      <p>
        <button
          type="button"
          class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-10 mb-2"
          onClick$={() => {
            console.log("Click Increment");
            store.count++;
          }}
        >
          Increment
        </button>
      </p>

      <section>
        <button
          type="button"
          class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-10 mb-2"
          onClick$={() => {
            console.log("Click Alert");
            alert("I am an Alert!!");
          }}
        >
          Alert
        </button>
      </section>
    </div>
  );
});

export const CounterChild = component$(
  (props: { store: { count: number } }) => {
    console.log("Render CounterChild");
    return <p>Count: {props.store.count}</p>;
  }
);

////////////////////////////////////////////////////////////////////////////////

// export const Counter_onClick = () => store.count++;

// import { useLexicalScope } from "@builder.io/qwik";
// export const Counter_onClick = () => {
//   const [store] = useLexicalScope();
//   store.count++;
// };
