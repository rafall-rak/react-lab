import './App.css';

function App() {
  let title = 'Wall-E';

  function handleChange(event) {
    console.log(event.target.value)
  }

  return (
    <div className="App">
      <h1>My favorite movies to watch</h1>
      <h2>For today it's {title}</h2>
      <input type="text" onChange={handleChange}/>
    </div>
  );
}

export default App;
