import { ConfirmDialog } from "primereact/confirmdialog";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import { Column } from "../../../Styles/styles";
import { Divider } from "primereact/divider";


const CardActivities = ({
  title,
  handleDelete,
  index,
  id,
  idClassroom
}: {
  title: string;
  handleDelete?: any;
  index: number
  id: number;
  idClassroom: number
}) => {
  const history = useNavigate();
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Container
        className="card"
        onClick={() => {
          history(`/turma/${idClassroom}/atividades/${id}`);
        }}
      >
        <Column>
          <p>
            Atividade {index+1}
          </p>
          <Divider />
          <h3>
            {title}
          </h3>
        </Column>
      </Container>
      <ConfirmDialog
        visible={visible}
        onHide={() => setVisible(false)}
        message="Tem certeza de que deseja prosseguir?"
        header="Confirmation"
        icon="pi pi-exclamation-triangle"
        accept={() => handleDelete(id)}
        reject={() => setVisible(false)}
      />
    </>
  );
};

export default CardActivities;
