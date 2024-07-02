import React from "react";

function Asep(props) {
  const { children = "guest", color = "text-cyan-500" } = props;
  return <h1 className={`text-2xl ${color}`}>hello {children}</h1>;
}

function App() {
  return (
    <>
      <Asep color="text-cyan-300">asep</Asep>
      <Asep />
    </>
  );
}

export default App;
