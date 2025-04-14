import React, { useRef } from "react";

export const InputFocus = () => {
  const inputRef = useRef();

  return (
    <div>
      <h3>useRef Input Focus</h3>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click button to focus me"
      />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  );
};
