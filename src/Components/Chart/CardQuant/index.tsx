import styles from "../../../Styles";
import { Column } from "../../../Styles/styles";

const CardQuant = ({ title, quant, color }: { title: string; quant: number | string, color?: "primary"| "secondary"| "third" }) => {
  return (
    <div className="card" style={{background: color === "primary" ? styles.colors.colorPrimary : color === "secondary" ? styles.colors.colorSecondary : color === "third" ? styles.colors.colorThird : "",  height: "100%", borderRadius: "32px"}}>
      <Column id="space-between" style={{alignItems: "center", height: "100%"}}>
        <p style={{textAlign: "center", color: "white", fontSize: 12}}>{title}</p>
        <h1 style={{color: "white", fontSize: 24}}>{quant}</h1>
      </Column>
    </div>
  );
};

export default CardQuant;
