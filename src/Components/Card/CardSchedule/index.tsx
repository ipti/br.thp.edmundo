import { ConfirmDialog } from "primereact/confirmdialog";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Column, Padding, Row } from "../../../Styles/styles";
import Icon from "../../Icon";
import IconSchedule from "./../../../Assets/images/calendar.png";
import { Container } from "./style";

const CardSchedule = ({
  title,
  subtitle,
  id,
}: {
  title: string;
  subtitle: string;
  id: number;
}) => {
  // const props = useContext(ScheduleContext) as ScheduleTypes;
  const [visible, setVisible] = useState(false);
  const history = useNavigate();

  return (
    <>
      <Container
        className="card cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          history(`/cronograma/${id}`);
        }}
      >
        <Row id="space-between">
          <h3>Cronograma</h3>
          <div
            className="cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setVisible(true);
            }}
          >
            <Icon icon="pi pi-trash" size="1rem" />
          </div>
        </Row>
        <Padding padding="8px" />
        <Row>
          <div className={`boxQuantity`}>
            <img src={IconSchedule} alt="" style={{ height: 40 }} />
          </div>
          <Padding />
          <Column>
            <div className={"boxDescriptionSchedule"}>{title}</div>
            <Padding />
            <div className={"boxDescriptionScheduleSubtitle"}>{subtitle}</div>
          </Column>
        </Row>
      </Container>
      <ConfirmDialog
        visible={visible}
        onHide={() => setVisible(false)}
        message="Tem certeza de que deseja prosseguir?"
        header="Confirmation"
        icon="pi pi-exclamation-triangle"
        // accept={() => props.DeleteSchedule(id)}
        reject={() => setVisible(false)}
      />
    </>
  );
};

export default CardSchedule;
