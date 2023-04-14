import style from "./Card.module.css"

export default function Card(props) {
   return (
      <div className={style.tarjeta}>
         <button className={style.boton} onClick={() => props.onClose(props.id)}>X</button>
         <img className={style.image} src={props.image} alt="not found" />
         <h4 className={style.name}>{props.name}</h4>
         <div className={style.text}>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </div>
      </div>
   );
}
