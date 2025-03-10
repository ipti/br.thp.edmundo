import { Dialog } from "primereact/dialog";
import color from "../../../Styles/colors";
import { answerUserActivitiesIA } from "../type";
import robo from "../../../assets/image/robozinho.svg";
import { Column, Row } from "../../../Styles/styles";

const ModalFeedback = ({
  visible,
  onHide,
}: {
  visible: answerUserActivitiesIA | undefined;
  onHide: any;
}) => {
  return (
    <Dialog
      visible={!!visible}
      onHide={onHide}
      header="Feedback"
      style={{ background: color.colorPrimary, width: "50vw" }}
    >
      {visible && (
        <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
          {visible![visible.length - 1].analyzerFeedback} {`\n`}
        </pre>
      )}
      <Column>
        <Row id="end">
          <img alt="" src={robo} style={{ width: "10%" }} />
        </Row>
      </Column>
    </Dialog>
  );
};

export default ModalFeedback;
