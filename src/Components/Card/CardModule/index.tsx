import { ConfirmDialog } from "primereact/confirmdialog";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Column, Padding, Row } from "../../../Styles/styles";
import IconClassroom from "./../../../assets/image/project_card.svg";
import { Container } from "./style";


const CardModule = ({
  title,
  id
}: {
  title: string;
  classroomCount?: number;
  registrationCount?: number,
  id: number;
}) => {
  const [visible, setVisible] = useState(false);
  const history = useNavigate()

  return (
    <>
      <Container className="card" onClick={() => {history(`/modulos/`+ id); }}>
        <Row id="space-between">
          <Row >
            <div className={`boxQuantity`}>
              <img src={IconClassroom} alt="" style={{ height: 32 }} />
            </div>
            <Padding padding="4px" />
            <Column id="center">
              <h3>{title}</h3>
            </Column>
          </Row>
          {/* <div
            className="cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setVisible(true);
            }}
          >
            <Icon icon="pi pi-trash" color={styles.colors.colorGrayElephant} size="1rem" fontWeight="900" />
          </div> */}
        </Row>
        < Padding padding="8px" />
      </Container>
      <ConfirmDialog
        visible={visible}
        onHide={() => setVisible(false)}
        message="Tem certeza de que deseja prosseguir?"
        header="Confirmation"
        icon="pi pi-exclamation-triangle"
        // accept={() => props.DeleteClassroom(id)}
        reject={() => setVisible(false)}
      />
    </>
  );
};

export default CardModule;
