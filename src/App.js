import { useState } from 'react';
export default function App() {
  return <DateCounter />;
}

function DateCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  function handleInput(e) {
    setCount(Number(e.target.value));
  }

  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div className="App">
      <h1>Time Tracker</h1>
      <div>
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        ></input>{' '}
        <span>{step}</span>
      </div>

      <button onClick={() => setCount((s) => s - step)}>-</button>
      <input
        type="text"
        placeholder="0"
        value={count}
        onChange={handleInput}
      ></input>
      <button onClick={() => setCount((s) => s + step)}>+</button>
      <br></br>

      {count !== 0 || step !== 1 ? (
        <button
          type="reset"
          onClick={() => {
            setCount(0);
            setStep(1);
          }}
          _
        >
          Reset
        </button>
      ) : (
        ''
      )}

      <p>
        <span>
          {count === 0 && 'Today is '}
          {count < 0 &&
            `${Math.abs(count)} ${
              count === -1 ? 'day ago from ' : 'days ago from '
            }`}
          {count > 0 &&
            `${Math.abs(count)} ${count === 1 ? 'day  from ' : 'days  from '}`}
        </span>{' '}
        {date.toDateString()}
      </p>
    </div>
  );
}
