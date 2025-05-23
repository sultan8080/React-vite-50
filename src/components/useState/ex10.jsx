// Exo-10. Créer un compteur avec les boutons + et - utilisant useState.
import { useState } from "react";
const Compteur = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Compteur : {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default Compteur;
