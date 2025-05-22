// Exo-9. Créer un composant ProfilePicture qui prend une URL d’image en prop et l’affiche dans une balise <img>.
const ProfilePicture = (props) => {
  return (
    <div>
      <img src={props.imgUrl} alt="image" height={200} width="auto" />
    </div>
  )
}

export default ProfilePicture
