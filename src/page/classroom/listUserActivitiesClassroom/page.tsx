import { Form, Formik } from "formik";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { MultiSelect } from "primereact/multiselect";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ButtonComponent from "../../../Components/Button";
import ContentPage from "../../../Components/ContentPage";
import Icon from "../../../Components/Icon";
import Loading from "../../../Components/Loading";
import {
  formatarDataHours,
  question,
} from "../../../Controller/controllerGlobal";
import color from "../../../Styles/colors";
import { Padding, Row } from "../../../Styles/styles";
import ActivitiesSentProvider, {
  ActivitiesSentContext,
} from "./context/context";
import { CreateNotasAvaliationType } from "./service/types";

const ActivitiesSent = () => {
  return (
    <ActivitiesSentProvider>
      <ActivitiesSentPage />
    </ActivitiesSentProvider>
  );
};

interface InitialForm {
  selection: number[];
}

const ActivitiesSentPage = () => {

    const {idClassroomUser} = useParams()
  const getNotas = (values: CreateNotasAvaliationType) => {
    const array: number[] = [];
    if (values.collaboration) array.push(4);

    if (values.complete_the_activity_correctly)
      array.push(0);

    if (values.completion_within_the_indicated_deadline)
      array.push(2);

    if (values.content_organization)
      array.push(1);

    if (values.creativity_in_the_response)
      array.push(3);

    if (values.understanding_the_content) array.push(5);

    return array;
  };

  const history = useNavigate();
  const propsActivitiesSent = useContext(ActivitiesSentContext);

  const initialForm: InitialForm = {
    selection: propsActivitiesSent!.activities?.activities
      ?.classroom_activities[0]?.classroom_avaliation
      ? getNotas(
          propsActivitiesSent!.activities?.activities?.classroom_activities[0]
            ?.classroom_avaliation
        )
      : [],
  };

  const status = {
    COMPLETED: "Finalizado",
    PENDING: "Em andamento",
  };

  if (propsActivitiesSent?.isLoading) return <Loading />;

  return (
    <ContentPage
      title={propsActivitiesSent?.activities?.activities?.name!}
      description="Visualize as atividades enviadas pelos alunos"
    >
      <Padding padding="16px" />
      {propsActivitiesSent?.activities?.activities?.type_activities ===
        "CODE" && (
        <>
          {propsActivitiesSent?.activities?.activities && (
            <Formik
              initialValues={initialForm}
              onSubmit={(values) => {
                const select: CreateNotasAvaliationType = {
                  collaboration: values.selection.includes(4),
                  complete_the_activity_correctly: values.selection.includes(0),
                  completion_within_the_indicated_deadline: values.selection.includes(2),
                  content_organization: values.selection.includes(1),
                  creativity_in_the_response: values.selection.includes(3),
                  understanding_the_content: values.selection.includes(5),
                };
                if (
                  propsActivitiesSent!.activities?.activities
                    ?.classroom_activities[0]?.classroom_avaliation
                ) {
                  propsActivitiesSent?.updateAvaliation(
                    select,
                    propsActivitiesSent!.activities?.activities
                      ?.classroom_activities[0]?.classroom_avaliation.id
                  );
                } else {
                  propsActivitiesSent?.createAvaliation(
                    select,
                    propsActivitiesSent.activities.id
                  );
                }
              }}
            >
              {({ values, setFieldValue }) => {
                const selectedQuestions = question.filter((item) =>
                  values.selection.includes(item.id)
                );
                return (
                  <Form>
                    <div
                      style={{
                        border: `1px solid ${color.colorBorderCard}`,
                        borderRadius: 12,
                        background: "#FFFFFF",
                        padding: 12,
                        marginBottom: 16,
                      }}
                    >
                      <Row id="space-between" style={{ alignItems: "flex-end", gap: 12, flexWrap: "wrap" }}>
                        <div style={{ display: "flex", flexDirection: "column", flex: 1, minWidth: 280 }}>
                          <label style={{ fontWeight: 700 }}>Formato de avaliação</label>
                          <p style={{ margin: "6px 0 10px 0", color: color.colorsBaseInkLight, fontSize: 13 }}>
                            Defina quais critérios serão usados para calcular a nota dos envios.
                          </p>
                          <MultiSelect
                            style={{ width: "100%" }}
                            display="chip"
                            options={question}
                            optionLabel="name"
                            optionValue="id"
                            name="selection"
                            value={values.selection}
                            onChange={(e) => setFieldValue("selection", e.value)}
                            placeholder="Escolha os critérios de avaliação"
                            selectedItemsLabel={`${values.selection.length} critérios selecionados`}
                          />
                          <Padding padding="8px" />
                          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                            <ButtonComponent
                              label="Selecionar tudo"
                              className="p-button-text"
                              loading={false}
                              onClick={() => setFieldValue("selection", question.map((item) => item.id))}
                            />
                            <ButtonComponent
                              label="Limpar"
                              className="p-button-text"
                              loading={false}
                              onClick={() => setFieldValue("selection", [])}
                            />
                          </div>
                          {selectedQuestions.length > 0 && (
                            <>
                              <Padding padding="8px" />
                              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                                {selectedQuestions.map((item) => (
                                  <span
                                    key={item.id}
                                    style={{
                                      padding: "4px 10px",
                                      borderRadius: 999,
                                      background: "#EFF4FF",
                                      color: color.colorPrimary,
                                      fontSize: 12,
                                      fontWeight: 700,
                                    }}
                                  >
                                    {item.name}
                                  </span>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                          <ButtonComponent label="Salvar formato" icon="pi pi-save" type="submit" />
                        </div>
                      </Row>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          )}
        </>
      )}
      {propsActivitiesSent?.activities?.activities?.type_activities ===
        "QUIZ" && (
        <div
          style={{
            border: `1px solid ${color.colorBorderCard}`,
            borderRadius: 12,
            background: "#FFFFFF",
            padding: 12,
            marginBottom: 16,
          }}
        >
          <Row id="space-between" style={{ gap: 12, flexWrap: "wrap" }}>
            <div>
              <h4 style={{ margin: 0 }}>Atualização de notas</h4>
              <p style={{ margin: "6px 0 0 0", color: color.colorsBaseInkLight }}>
                Recalcule automaticamente as notas das respostas do formulário.
              </p>
            </div>
            <ButtonComponent label="Atualizar notas" onClick={() => {propsActivitiesSent.updateAvaliationAll(parseInt(idClassroomUser ?? "0"))}} />
          </Row>
        </div>
      )}
      <Padding padding="16px" />
      <DataTable
        value={propsActivitiesSent?.activities?.activities?.user_activities}
        tableStyle={{ minWidth: "50rem" }}
        stripedRows
        responsiveLayout="scroll"
      >
        <Column field="user_classroom.users.name" header="Nome"></Column>
        <Column
          body={(data) => <>{formatarDataHours(data.createdAt)}</>}
          header="Última Atualização"
        ></Column>
        <Column
          body={(data) => (
            <div
              style={{
                padding: 10,
                width: 140,
                borderRadius: 999,
                background:
                  data?.status === "COMPLETED"
                    ? color.green
                    : data?.status === "PENDING"
                    ? color.colorSecondary
                    : "",
              }}
            >
              <h4 style={{ color: "white", textAlign: "center", margin: 0, fontSize: 13 }}>
                {status[data?.status as keyof typeof status]}
              </h4>
            </div>
          )}
          header="Status"
        ></Column>
        <Column
          field="user_avaliation.total"
          body={(data) => {
            return <>{data?.user_avaliation?.total?.toFixed(2) ?? "-"}</>;
          }}
          header="Nota"
        ></Column>

        <Column
          body={(data) => (
            <div
              style={{
                cursor: data.status === "COMPLETED" ? "pointer" : "not-allowed",
              }}
              onClick={() =>
                data.status === "COMPLETED"
                  ? history("correcao/" + data.id)
                  : null
              }
            >
              <Icon
                icon="pi pi-eye"
                color={
                  data.status === "COMPLETED"
                    ? color.colorPrimary
                    : color.grayOne
                }
              />
            </div>
          )}
          align="center"
          header="Visualizar"
        ></Column>
      </DataTable>
    </ContentPage>
  );
};

export default ActivitiesSent;
