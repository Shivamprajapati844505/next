import { Suspense } from 'react';

import SlowComponent5s from '@/components/SlowComponent5s.js';
import SlowComponent2s from '@/components/SlowComponent2s.js';
import TodoItems from '@/components/TodoItems';

export default function Todos() {
  return (
    <div>
      <h1>Todos</h1>

  <TodoItems/>
      <Suspense fallback={<div>Loading.. 1</div>}>
      <SlowComponent2s/>
      </Suspense>

      <Suspense fallback={<div>Loading.. 2</div>}>
        <SlowComponent5s/>
      </Suspense>
    </div>
  );
}

