import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedValue(inputValue);
    setInputValue('');
  };

  return (
    <div className={styles.container}>
      <h1>Input Display App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter something..."
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Submit</button>
      </form>
      {submittedValue && <p>You entered: {submittedValue}</p>}
    </div>
  );
}