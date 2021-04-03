import React from "react";
import useCounter from "../lib/useCounter.ts";
import RotaryKnob from "https://raw.githubusercontent.com/timsusa/react-canvas-rotary-knob/master/src/RotaryKnob.tsx";

export default function Home() {
  const [count, isSyncing, increase, decrease] = useCounter();
  return (
    <div className="page">
      <head>
        <title>Aleph - Deno with React and Server Side Rendering</title>
        <link rel="stylesheet" href="../style/index.css" />
      </head>
      <h1>
        Aleph - Deno with React and Server Side Rendering
      </h1>
      <RotaryKnob width={160} height={160} />
      <div className="counter">
        <span>Counter:</span>
        {isSyncing && (
          <em>...</em>
        )}
        {!isSyncing && (
          <strong>{count}</strong>
        )}
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
    </div>
  );
}
