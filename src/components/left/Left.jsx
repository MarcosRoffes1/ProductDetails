import "./left.css"
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

export default function Left() {
  return (
    <div className="left">
      <h1 className="leftHeading">Air Jordan 1 Mid SE</h1>
      <p className="leftText-1">Zapatos de hombre</p>
      <p className="leftText-2">
      <b>Precio: $200 USD</b><br/>
      <b> Cantidad en stock:15</b><br/><br/>
        Inspirada en el AJ1 original, esta edición de corte mid mantiene el look icónico que te encanta, y los colores selectos y el cuero impecable le dan una identidad distintiva.
      </p>
      <p className="leftText-3">
      <b>DETALLES</b> <br/>
      •La parte superior de cuero, cuero sintético y tela ofrece una mayor sujeción. <br/>
•La entresuela de espuma con amortiguación Nike Air brinda comodidad ligera. <br/>
•La suela de goma cuenta con un punto de giro que brinda tracción duradera.
      </p>
      <button className="leftButton">
        COMPRAR
        <ArrowForwardOutlinedIcon className="leftButtonIcon"/>
      </button>
    </div>
  )
}
