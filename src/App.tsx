/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
// src/App.tsx
import React, { useState, memo } from 'react'; 
import type { FC } from 'react';
import './App.css'; 

// Definición de Tipos para las Props
interface ItemListProps {
  items: string[];
}

// Componente ItemList
const ItemList: FC<ItemListProps> = ({ items }) => {
  console.log('ItemList rendered'); // Para ver en consola cuándo se renderiza
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

// Creamos una versión memoizada de ItemList
const MemoizedItemList = memo(ItemList); 

// Componente App
const App: FC = () => {
  console.log('App rendered'); // Para ver en consola cuándo se renderiza App
  const [count, setCount] = useState<number>(0);
  const [items, _setItems] = useState<string[]>(
    Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`) 
  );

  return (
    <div>
      <h1>Profiling en React</h1>
      <button onClick={() => setCount(count + 1)}>Incrementar ({count})</button>
      {/* Usamos el componente memoizado */}
      <MemoizedItemList items={items} />
    </div>
  );
};

export default App;