import style from './Card.module.css'

function Card({name, gender, onClose, species, image}) {
   return (
      <div className={style.card}>
         <div className={style.cardTop}>
            <button onClick={onClose} className={style.btn}>X</button>
            <img src={image} alt={name} />
            <h2>{name}</h2>
         </div>

         <div className={style.cardBotton}>
            <h2>Species:{species}</h2>
            <h2>Gender:{gender}</h2>
         </div>
      </div>
   );
}
export default Card;