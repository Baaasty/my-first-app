import { Component, createSignal, For } from "solid-js";
import { Dynamic } from "solid-js/web";

const options = {
  red: () => <strong style="color: red">Red Thing</strong>,
  green: () => <strong style="color: green">Green Thing</strong>,
  blue: () => <strong style="color: blue">Blue Thing</strong>,
};

type OptionsUnion = keyof typeof options;

const App: Component = () => {
  const [selected, setSelected] = createSignal<OptionsUnion>("blue");

  return (
    <>
      <select
        value={selected()}
        onInput={(e) => setSelected(e.currentTarget.value as OptionsUnion)}
      >
        <For each={Object.keys(options)}>
          {(color) => <option value={color}>{color}</option>}
        </For>
      </select>

      <Dynamic component={options[selected()]} />
    </>
  );
};

export default App;
