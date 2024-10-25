import { ConfirmDialog } from "primereact/confirmdialog";
import { useState } from "react";
import avatar from "../../../assets/image/avatar.svg";
import { ROLE } from "../../../Controller/controllerGlobal";
import { Column, Padding, Row } from "../../../Styles/styles";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";

const CardRegistration = ({
  title,
  subtitle,
  idRegistration,
  userId,
  status,
  url_avatar
}: {
  title: string;
  subtitle: string;
  idRegistration: number;
  status: string;
  userId: number;
  url_avatar?: string
}) => {
  const [visible, setVisible] = useState(false);
  const history = useNavigate()


  console.log(url_avatar)
  return (
    <>
      <Container
        className="card cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          history(`${userId}`)
          // if ((propsAplication.user?.role === ROLE.ADMIN ||
          //   propsAplication.user?.role === ROLE.COORDINATORS)) {
          //   history(`/turma/${id}/aluno/${idRegistration}`);
          // }
        }}
      >
        <Row id="space-between">

          {/* {(propsAplication.user?.role === ROLE.ADMIN ||
            propsAplication.user?.role === ROLE.COORDINATORS) && <div
              className="cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setVisible(true);
              }}
            >
              <Icon icon="pi pi-trash" size="1rem" />
            </div>} */}
        </Row>
        {/* <Padding padding="8px" /> */}
        <Row>
          <div className={`boxQuantity`}>
            <Column id="center">
              <img
                src={
                  url_avatar ? url_avatar :
                  avatar
                }
                alt=""
                style={{ height: 72, width: 72, borderRadius: "50%" }}
              />
            </Column>
          </div>
          <Padding />
          <Column>
            <h3>{subtitle.substring(0, 24)}{subtitle.length > 24 && "..."}</h3>
            <Padding />
            <div className={"boxDescriptionSchedule"}>
              {"Matricula - " + title}
            </div>
            <Padding />
            <div className={"boxDescriptionScheduleSubtitle"}>
              {status === ROLE.STUDENT
                ? "Aluno"
                : status === ROLE.TEACHER
                  ? "Professor"
                  : status === ROLE.ADMIN
                    ? "Administrador"
                    : ""}
            </div>
          </Column>
        </Row>
      </Container>
      <ConfirmDialog
        visible={visible}
        onHide={() => setVisible(false)}
        message="Tem certeza de que deseja prosseguir?"
        header="Confirmation"
        icon="pi pi-exclamation-triangle"
        // accept={() => props.DeleteRegistration(idRegistration)}
        reject={() => setVisible(false)}
      />
    </>
  );
};

export default CardRegistration;
