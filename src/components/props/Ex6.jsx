// Exo-6. Passer plusieurs props (nom, âge) à un composant UserCard et les afficher.
export default function UserCard(props) {
  return (
    <div>
      <h2>{props.nom}</h2>
      <p>Âge: {props.âge}</p>
    </div>
  );
}
