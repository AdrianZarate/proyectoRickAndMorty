import Card from '../Card/Card';
import style from './Cards.module.css'

function Cards(props) {
   const { characters, onClose } = props;
   return (
      <div className={style.containerCards}>
         {characters.map(({name, species, gender, image, id}) => {
            return <Card
               name={name}
               species={species}
               gender={gender}
               image={image}
               onClose={() => onClose(id)}
            />
         })}
      </div>
   );
}

export default Cards;