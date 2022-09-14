import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.app}>
      <p>Compteur : {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Incrémenter
      </button>
    </div>
  );
}

export default App;
