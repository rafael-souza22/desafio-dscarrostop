import "./styles.css";
import carImg from "../../assets/car.png";

export default function Card() {
  return (
    <>
      <div className="ct-cards">
        <img src={carImg} alt="Carros" />
        <p>Lorem ipsum dolor</p>
      </div>
    </>
  );
}
