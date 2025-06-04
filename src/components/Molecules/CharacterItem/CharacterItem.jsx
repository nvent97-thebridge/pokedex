import "./CharacterItem.scss";

const CharacterItem = ({name, img}) => {
  return (
    <div className="characterItem">
        <p>{name}</p>
        <img src={img} alt={`Image of ${name}`}/>
    </div>
  )
}

export {CharacterItem}