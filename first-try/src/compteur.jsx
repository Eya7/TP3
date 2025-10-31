import React, { useState } from 'react';

function Compteur() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h3>Compteur : {count}</h3>
      <button onClick={handleIncrement}>
        Incrémenter {count} fois
      </button>
      <button onClick={handleDecrement}>
        Décrémenter {count} fois
      </button>
    </div>
  );
}

export default Compteur;

