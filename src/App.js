export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <State />
    </div>
  );
}

function Logo() {
  return <h1>🏝️Travel-ToDo👜</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your trip?</h3>
    </div>
  );
}
function PackingList() {
  return <div className="list">Test</div>;
}

function State() {
  return (
    <footer className="stats">
      You have x items on the list , and you have already packed x (X%)
    </footer>
  );
}
