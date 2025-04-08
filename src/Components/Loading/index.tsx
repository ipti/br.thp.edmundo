// import loading from "../../Assets/images/Gif de Carregamento.gif";
import { ProgressSpinner } from "primereact/progressspinner";
import { Column, Row } from "../../Styles/styles";

const Loading = () => {
  return (
    <Column id="center" style={{ height: "100vh" }}>
      <Row id="center">
        <ProgressSpinner />
        {/* <img src={loading} alt="loading..." style={{ width: window.innerWidth > 800 ? 512 : 256 }} /> */}
      </Row>
    </Column>
  );
};

export default Loading;
