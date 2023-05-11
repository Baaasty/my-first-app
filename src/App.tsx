import { Component, createSignal, For } from "solid-js";
import { Dynamic } from "solid-js/web";

const RedThing = () => <strong style="color: red">Red Thing</strong>;
const GreenThing = () => <strong style="color: green">Green Thing</strong>;
const BlueThing = () => <strong style="color: blue">Blue Thing</strong>;

const options = {
  red: RedThing,
  green: GreenThing,
  blue: BlueThing,
};

type OptionsEnum = keyof typeof options;

const App: Component = () => {
  const [selected, setSelected] = createSignal<OptionsEnum>("blue");

  return (
    <>
      <select
        value={selected()}
        onInput={(e) => setSelected(e.currentTarget.value as OptionsEnum)}
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
