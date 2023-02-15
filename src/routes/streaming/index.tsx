import {
  component$,
  Resource,
  SSRStreamBlock,
  useResource$,
  useStylesScoped$,
} from "@builder.io/qwik";

export function delay(time: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), time);
  });
}

export default component$(() => {
  return (
    <div>
      <SSRStreamBlock>
        <Cmp text="this 1" delay={1000}></Cmp>
        <Cmp text="this 2" delay={2000}></Cmp>
      </SSRStreamBlock>
      <Cmp text="this 3" delay={3000}></Cmp>
      <Cmp text="this 4" delay={4000}></Cmp>
      <Cmp text="this 5" delay={2000}></Cmp>
    </div>
  );
});

export const Cmp = component$((props: { text: string; delay: number }) => {
  useStylesScoped$(`.cmp {
    background: blue;
    color: white;
    width: 100%;
    height: 100px;
    display: block;
    text-align: center;
    font-size: 40px;
    margin: 20px 0;
  }`);

  const resource = useResource$<string>(async ({ track }) => {
    track(() => props.text);
    await delay(props.delay);
    return props.text;
  });

  return (
    <Resource
      value={resource}
      onPending={() => <div class="cmp">Loading...</div>}
      onResolved={(value) => <div class="cmp">{value}</div>}
    />
  );
});
