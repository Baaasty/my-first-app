import { Component, For, createSignal } from "solid-js";

const App: Component = () => {
  const [cats, setCats] = createSignal([
    { id: "J---aiyznGQ", name: "Keyboard Cat" },
    { id: "z_AbfPXTKms", name: "Maru" },
    { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" },
  ]);

  return (
    <ul>
      <For each={cats()}>
        {(cat, i) => (
          <li>
            <a target="_blank" href={`https://youtube.com/watch?v=${cat.id}`}>
              {i() + 1}: {cat.name}
            </a>
          </li>
        )}
      </For>
    </ul>
  );
};

export default App;
