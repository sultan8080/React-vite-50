// Exo-8. Créer une ProductCard avec les props title, price, inStock et les afficher de manière conditionnelle.
export default function ProductCard(props) {
  return <div
    style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
      marginBottom: "10px",
      width: "250px",
    }}
  >
    <p>{props.title}</p>
    <p>{props.price}€</p>
    {props.inStock ? (
      <p style={{ color: "green" }}> En Stock </p>
    ) : (
      <p style={{ color: "red" }}>Rupture de stock</p>
    )}
  </div>
};
