import { Dialog } from "primereact/dialog";
import color from "../../../Styles/colors";
import { answerUserActivitiesIA } from "../type";

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
     {visible && <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
                  {
                    visible![0].analyzerFeedback
                  }{" "}
                  {`\n`}
                </pre>}
    </Dialog>
  );
};

export default ModalFeedback;
