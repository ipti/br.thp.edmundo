import { ProgressSpinner } from "primereact/progressspinner";
import { Column, Row } from "../../Styles/styles";

const Loading = () => {
  return (
      <Column id="center" style={{height: "100vh"}}>
        <Row id="center">
          {/* <img src={loading} alt="loading..." style={{ width: window.innerWidth > 800 ? 512 : 256 }} /> */}
          <ProgressSpinner />
        </Row>
      </Column>
  );
};

export default Loading;
