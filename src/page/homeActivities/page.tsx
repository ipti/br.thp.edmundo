import { Form, Formik } from "formik";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { ProgressSpinner } from "primereact/progressspinner";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import sound from "../../assets/image/sound_sampler.svg";
import DropFileInput from "../../Components/DragAndDropFile";
import FormComponent from "../../Components/Form";
import Icon from "../../Components/Icon";
import { getDifficulte } from "../../Controller/controllerGlobal";
import { Column, Container, Padding, Row } from "../../Styles/styles";
import HomeActivitiesProvider, {
  HomeActivitiesContext,
} from "./context/context";
import {
  ButtonStart,
  HoverContainer,
  RoboIA,
  TextActivities,
  TextActivitiesCard,
  TextActivitiesParagraphCard,
} from "./styles";

import { CodeiumEditor } from "@codeium/react-code-editor";
import { ProgressBar } from "primereact/progressbar";
import * as Yup from "yup";
import FormViewComponent from "../../Components/FormView";
import color from "../../Styles/colors";
import ModalRating from "./modalRating";
import { PropsCodeEditor } from "./type";
import robo from "../../assets/image/robozinho.svg";
import ModalFeedback from "./modalFeedback";

const optionSchema = Yup.object().shape({
  options_fk: Yup.number().required("Option is required"),
});

const questionSchema = Yup.object().shape({
  question_fk: Yup.number().required("Question ID is required"),
  options: Yup.array().of(optionSchema).min(1, "Marque uma opção"),
});

const createResponseSchema = Yup.object().shape({
  form_fk: Yup.number().required("Form ID is required"),
  question: Yup.array()
    .of(questionSchema)
    .required("At least one question is required"),
});

const HomeActivities = () => {
  return (
    <HomeActivitiesProvider>
      <HomeActivitiesPage />
    </HomeActivitiesProvider>
  );
};

const HomeActivitiesPage = () => {
  const propsAplication = useContext(HomeActivitiesContext);
  const [visibleRating, setVisibleRating] = useState(false);
  const [codeEditor, setCodeEditor] = useState<PropsCodeEditor[]>([]);
  const [roboModal, setRoboModal] = useState<any>();

  const dif = getDifficulte(propsAplication?.activitiesOne?.difficult);

  const { idClassroom } = useParams();

  if (!propsAplication?.activitiesOne?.user_activities)
    return <ProgressSpinner />;

  return (
    <Container
      style={{
        height: "100%",
        background: "linear-gradient(180deg, #FFFFFF 0%, #E6F0FF 100%)",
        padding: "64px 64px",
      }}
    >
      <Row className="grid" id="space-between" style={{ width: "100%" }}>
        <div className="col-12 md:col-4 lg:col:6">
          <div className="card">
            {/* <Row style={{ gap: "4px" }}>
                                  <TextActivitiesParagraph>
                                      Pontos da Atividade:
                                  </TextActivitiesParagraph>
                                  <TextActivities>
                                      25 {`\n`}
                                  </TextActivities>
                              </Row> */}
            <Padding />
            <Row style={{ gap: "4px" }}>
              <TextActivitiesParagraphCard>
                Nível de Complexidade:
              </TextActivitiesParagraphCard>
              <TextActivitiesCard>
                {dif} {`\n`}
              </TextActivitiesCard>
            </Row>
            <Padding />

            <Row style={{ gap: "4px" }}>
              <TextActivitiesParagraphCard>
                Tempo Estimado da Atividade:
              </TextActivitiesParagraphCard>
              <TextActivitiesCard>
                {propsAplication?.activitiesOne?.time_activities} Minutos {`\n`}
              </TextActivitiesCard>
            </Row>
            <Padding />

            <Row style={{ gap: "4px" }}>
              <TextActivitiesParagraphCard>
                Tipo de atividade:
              </TextActivitiesParagraphCard>
              <TextActivitiesCard>
                {propsAplication?.activitiesOne?.type_activities === "QUIZ"
                  ? "Formulário"
                  : propsAplication?.activitiesOne?.type_activities === "CODE"
                    ? "Implementação"
                    : propsAplication?.activitiesOne?.type_activities === "IA"
                      ? "Implementação"
                      : ""}{" "}
                {`\n`}
              </TextActivitiesCard>
            </Row>

            {propsAplication.activitiesOne?.user_activities[0]?.user_avaliation
              ?.total && (
                <>
                  <Padding />
                  <Row style={{ gap: "4px" }}>
                    <TextActivitiesParagraphCard>
                      Nota:
                    </TextActivitiesParagraphCard>
                    <TextActivitiesCard>
                      {
                        propsAplication.activitiesOne?.user_activities[0]
                          ?.user_avaliation?.total
                      }{" "}
                      {`\n`}
                    </TextActivitiesCard>
                  </Row>
                </>
              )}
          </div>
          {propsAplication?.activitiesOne?.user_activities![0] && (
            <div className="grid">
              {propsAplication?.activitiesOne?.activities_group_avaliation?.map(
                (item, index) => {
                  return (
                    <Column className="col-12" key={index}>
                      <h3>Editor para {item?.group_avaliations?.name}</h3>
                      <Padding />
                      <CodeiumEditor
                        value={
                          propsAplication?.activitiesOne?.user_activities[0]
                            .answer_user_activities_group_avaliation
                            ? propsAplication?.activitiesOne?.user_activities[0].answer_user_activities_group_avaliation.find(
                              (props) =>
                                props.group_avaliation_fk ===
                                item.group_avaliation_fk
                            )?.answer
                            : codeEditor![index]?.content ?? ""
                        }
                        language={
                          item?.group_avaliations?.type_group_avaliation
                            ?.value ?? "javascript"
                        }
                        theme="light"
                        containerStyle={{
                          border: "1px solid #BAC7D5",
                          borderRadius: "2px",
                          height: "100%",
                          width: "100%",
                        }}
                        onChange={(e) => {
                          if (codeEditor.find((item) => item.id === index)) {
                            setCodeEditor((prevItems) =>
                              prevItems.map((prvent) =>
                                prvent.id === index
                                  ? { ...prvent, content: e?.toString() ?? "" }
                                  : prvent
                              )
                            );
                          } else {
                            setCodeEditor((prevt) => [
                              ...prevt,
                              {
                                content: e?.toString() ?? "",
                                id: index,
                                group: item?.group_avaliations?.name,
                                idGroup: item.group_avaliation_fk,
                              },
                            ]);
                          }
                        }}
                      />
                    </Column>
                  );
                }
              )}
            </div>
          )}
          <Row id="center">
            <Column style={{ width: "100%", marginTop: "16px" }}>
              {propsAplication?.activitiesOne?.user_activities.length === 0 ? (
                <ButtonStart
                  style={{ marginBottom: 16 }}
                  onClick={() => {
                    propsAplication?.JoinTheActivitiesUser({
                      idActivities: propsAplication.activitiesOne?.id!,
                      idClassroom: parseInt(idClassroom!),
                    });
                  }}
                >
                  <Row id="space-around">
                    <div></div>
                    <Column id="center">Iniciar atividade</Column>{" "}
                    <img style={{ width: 48 }} src={sound} alt="" />
                  </Row>
                </ButtonStart>
              ) : propsAplication?.activitiesOne.type_activities !== "IA" && propsAplication?.activitiesOne?.user_activities[0].status ===
                "COMPLETED" ? (
                <>
                  <ButtonStart type="SUCCESS">
                    <Row id="space-around">
                      <div></div>
                      <Column id="center">Atividade enviada</Column>{" "}
                      <Icon icon="pi pi-check" size="32px" />
                    </Row>
                  </ButtonStart>
                  <Padding padding="16px" />
                </>
              ) : propsAplication?.activitiesOne?.user_activities[0].status ===
                "AWAITING_RESPONSE" ? (
                <Column>
                  <Padding padding="8px" />
                  <>Atvidade em processamento</>
                  <Padding padding="8px" />
                  <ProgressBar
                    mode="indeterminate"
                    style={{ height: "6px" }}
                  ></ProgressBar>
                  <Padding padding="16px" />
                </Column>
              ) : propsAplication?.activitiesOne.type_activities === "CODE" ? (
                <>
                  <h1>1. Anexe sua atividade clicando no botão a seguir:</h1>
                  <Padding padding="8px" />
                  <DropFileInput onFileChange={propsAplication?.onChangeFile} />
                  <Padding padding="8px" />
                  <Button
                    label="Enviar Atividade"
                    onClick={() =>
                      propsAplication?.FinishActivitiesUser(
                        propsAplication?.activitiesOne?.user_activities[0].id!
                      )
                    }
                  />
                  <Padding padding="16px" />
                </>
              ) : propsAplication?.activitiesOne.type_activities === "IA" && propsAplication?.activitiesOne?.user_activities[0].status ===
                "PENDING" ? (
                <>
                  <Padding padding="8px" />
                  <Button
                    label="Enviar Atividade"
                    onClick={() => {
                      // propsAplication.SendAnsweAI({
                      //   id_user_activities:
                      //     propsAplication.activitiesOne?.user_activities[0]
                      //       .id ?? 0,
                      //   tasksDescription:
                      //     propsAplication.activitiesOne?.description ?? "",
                      //   correctAnswer:
                      //     propsAplication.activitiesOne?.expected_return ?? "",
                      //   performanceMetrics:
                      //     propsAplication.activitiesOne?.activities_group_avaliation.map(
                      //       (item) => {
                      //         return {
                      //           idGroup: item.group_avaliation_fk,
                      //           group: item.group_avaliations.name,
                      //           metrics:
                      //             item.group_avaliations.metric_group_avaliation.map(
                      //               (metric) => {
                      //                 return {
                      //                   description: metric.description,
                      //                   idMetric: metric.id,
                      //                   metricPercentage:
                      //                     metric.metric_percentange,
                      //                   correctAnswer:
                      //                     metric?.metric_group_avaliation_correct_answer![0]
                      //                       ?.correct_answer ?? "",
                      //                 };
                      //               }
                      //             ),
                      //         };
                      //       }
                      //     ) ?? [],
                      //   student_answer: codeEditor.map((item) => {
                      //     return {
                      //       answer: item.content,
                      //       idGroup: item.idGroup,
                      //       name: item.group,
                      //     };
                      //   }),
                      // });
                      console.log({
                        id_user_activities:
                          propsAplication.activitiesOne?.user_activities[0]
                            .id ?? 0,
                        tasksDescription:
                          propsAplication.activitiesOne?.description ?? "",
                        correctAnswer:
                          propsAplication.activitiesOne?.expected_return ?? "",
                        performanceMetrics:
                          propsAplication.activitiesOne?.activities_group_avaliation.map(
                            (item) => {
                              return {
                                idGroup: item.group_avaliation_fk,
                                group: item.group_avaliations.name,
                                metrics:
                                  item.group_avaliations.metric_group_avaliation.map(
                                    (metric) => {
                                      return {
                                        description: metric.description,
                                        idMetric: metric.id,
                                        metricPercentage:
                                          metric.metric_percentange,
                                        correctAnswer:
                                          metric?.metric_group_avaliation_correct_answer![0]
                                            ?.correct_answer ?? "",
                                      };
                                    }
                                  ),
                              };
                            }
                          ) ?? [],
                        student_answer: codeEditor.map((item) => {
                          return {
                            answer: item.content,
                            idGroup: item.idGroup,
                            name: item.group,
                          };
                        }),
                      })
                    }}
                  />
                  <Padding padding="16px" />
                </>
              ) : propsAplication?.activitiesOne.type_activities === "IA" && propsAplication?.activitiesOne?.user_activities[0].status ===
                "COMPLETED" ? (
                <>
                  <Padding padding="8px" />
                  <Button
                    label="Enviar Atividade Novamente"
                    onClick={() => {
                     propsAplication.SendAnsweAI({
                        id_user_activities:
                          propsAplication.activitiesOne?.user_activities[0]
                            .id ?? 0,
                        tasksDescription:
                          propsAplication.activitiesOne?.description ?? "",
                        correctAnswer:
                          propsAplication.activitiesOne?.expected_return ?? "",
                        performanceMetrics:
                          propsAplication.activitiesOne?.activities_group_avaliation.map(
                            (item) => {
                              return {
                                idGroup: item.group_avaliation_fk,
                                group: item.group_avaliations.name,
                                metrics:
                                  item.group_avaliations.metric_group_avaliation.map(
                                    (metric) => {
                                      return {
                                        description: metric.description,
                                        idMetric: metric.id,
                                        metricPercentage:
                                          metric.metric_percentange,
                                        correctAnswer:
                                          metric?.metric_group_avaliation_correct_answer![0]
                                            ?.correct_answer ?? "",
                                      };
                                    }
                                  ),
                              };
                            }
                          ) ?? [],
                        student_answer: codeEditor.map((item) => {
                          return {
                            answer: item.content,
                            idGroup: item.idGroup,
                            name: item.group,
                          };
                        }),
                      });
                      console.log({
                        id_user_activities:
                          propsAplication.activitiesOne?.user_activities[0]
                            .id ?? 0,
                        tasksDescription:
                          propsAplication.activitiesOne?.description ?? "",
                        correctAnswer:
                          propsAplication.activitiesOne?.expected_return ?? "",
                        performanceMetrics:
                          propsAplication.activitiesOne?.activities_group_avaliation.map(
                            (item) => {
                              return {
                                idGroup: item.group_avaliation_fk,
                                group: item.group_avaliations.name,
                                metrics:
                                  item.group_avaliations.metric_group_avaliation.map(
                                    (metric) => {
                                      return {
                                        description: metric.description,
                                        idMetric: metric.id,
                                        metricPercentage:
                                          metric.metric_percentange,
                                        correctAnswer:
                                          metric?.metric_group_avaliation_correct_answer![0]
                                            ?.correct_answer ?? "",
                                      };
                                    }
                                  ),
                              };
                            }
                          ) ?? [],
                        student_answer: codeEditor.map((item) => {
                          return {
                            answer: item.content,
                            idGroup: item.idGroup,
                            name: item.group,
                          };
                        }),
                      })
                    }}
                  />
                  <Padding padding="16px" />
                </>
              ) : (
                <></>
              )}
            </Column>
          </Row>
        </div>
        <div
          className="card col-12 md:col-7 lg:col:6"
          style={{ height: "100%" }}
        >
          <Row>
            <Column style={{ width: "100%" }}>
              <Padding padding="32px">
                <div className="grid">
                  {propsAplication?.activitiesOne?.tags_activities?.map(
                    (item) => {
                      return (
                        <>
                          <h4 style={{ color: color.colorPrimary }}>
                            #{item.tag.content}
                          </h4>
                          <Padding />
                        </>
                      );
                    }
                  )}
                </div>
                <Padding />
                <TextActivities>
                  {propsAplication?.activitiesOne?.name}
                </TextActivities>
                <Padding padding="16px" />
                <TextActivities>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: propsAplication?.activitiesOne?.description!,
                    }}
                  />
                </TextActivities>
                <Padding padding="16px" />
                {propsAplication?.activitiesOne?.form &&
                  propsAplication.activitiesOne?.user_activities[0] && (
                    <>
                      <Divider />
                      <Padding padding="8px" />
                      <TextActivities>Formulário</TextActivities>
                      <Padding padding="16px" />
                      {propsAplication?.activitiesOne?.form.answer_form
                        ?.length! > 0 &&
                        propsAplication.activitiesOne.user_activities[0]
                          .status === "COMPLETED" ? (
                        <FormViewComponent
                          form={propsAplication?.activitiesOne?.form}
                        />
                      ) : (
                        <TextActivities>
                          <Formik
                            validationSchema={createResponseSchema}
                            initialValues={propsAplication.initialValueForm}
                            onSubmit={(values) => {
                              propsAplication.ResponseActivities(values);
                              setVisibleRating(true);
                            }}
                          >
                            {({ values, errors, setFieldValue }) => {
                              return (
                                <Form>
                                  <FormComponent
                                    form={propsAplication?.activitiesOne?.form!}
                                    setFieldValue={setFieldValue}
                                    values={values}
                                    errors={errors}
                                  />
                                  <Padding />
                                  {propsAplication?.activitiesOne
                                    ?.user_activities![0]?.status && (
                                      <Row id="end">
                                        <Button
                                          label="Enviar"
                                          disabled={
                                            propsAplication?.activitiesOne
                                              ?.user_activities[0].status ===
                                            "COMPLETED"
                                          }
                                        />
                                      </Row>
                                    )}
                                </Form>
                              );
                            }}
                          </Formik>
                        </TextActivities>
                      )}
                    </>
                  )}
              </Padding>
            </Column>
          </Row>
        </div>
      </Row>
      <Padding padding="8px" />

      {propsAplication?.activitiesOne.type_activities === "IA" && (
        <RoboIA
          onClick={() =>
            setRoboModal(
              propsAplication.activitiesOne?.user_activities[0]
                ?.answer_user_activities_ia
            )
          }
        >
          <img alt="" src={robo} />
          <HoverContainer>
            <p>Feedback</p>
          </HoverContainer>
        </RoboIA>
      )}
      <ModalFeedback
        visible={roboModal}
        onHide={() => {
          setRoboModal(!roboModal);
        }}
      />
      <ModalRating setVisible={setVisibleRating} visible={visibleRating} />
    </Container>
  );
};

export default HomeActivities;
