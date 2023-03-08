import type { Component } from 'solid-js';
import {Counter} from '@/components'

const App: Component = () => {
  return (
    <div>
      <div>Counter Application:</div>
      <Counter />
    </div>
  );
};

export default App;