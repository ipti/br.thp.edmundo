import { Divider } from "primereact/divider";
import { InputSwitch } from "primereact/inputswitch";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import ButtonComponent from "../../../Components/Button";
import ContentPage from "../../../Components/ContentPage";
import Empty from "../../../Components/Empty";
import Icon from "../../../Components/Icon";
import color from "../../../Styles/colors";
import { Column, Padding, Row } from "../../../Styles/styles";
import ClassroomModulesProvider, {
  ClassroomModulesContext,
} from "./context/context";
import { Class } from "./context/type";
import ModalAddModule from "./modalAddModule";
import Loading from "../../../Components/Loading";

const ClassroomModules = () => {
  return (
    <ClassroomModulesProvider>
      <ClassroomModulesPage />
    </ClassroomModulesProvider>
  );
};

const ClassroomModulesPage = () => {
  const props = useContext(ClassroomModulesContext);
  const [visible, setVisible] = useState(false);
  const [hiddenModules, setHiddenModules] = useState<Record<number, boolean>>({});

  if (props?.isLoading) return <Loading />;
  return (
    <ContentPage
      title="Módulos da turma"
      description="Gerencie os módulos, aulas e atividades da turma"
    >
      <Padding padding="16px" />
      <ButtonComponent
        label="Adicionar módulo"
        icon="pi pi-plus"
        onClick={() => setVisible(!visible)}
      />
      <Padding padding="16px" />
      {props?.modulesClassroomList?.map((item) => {
        const classesCount = item.classes?.length ?? 0;
        const activeClassesCount =
          item.classes?.filter((classes) => classes.classroom_classes[0]?.active)
            .length ?? 0;
        const activitiesCount =
          item.classes?.reduce(
            (total, classes) => total + (classes.activities?.length ?? 0),
            0
          ) ?? 0;

        return (
          <div className="card" style={{ padding: 16, marginBottom: 16 }}>
            <Row id="space-between">
              <Column>
                <h2 style={{ margin: 0 }}>{item.name}</h2>
                <Padding padding="6px" />
                <p style={{ margin: 0, color: color.colorsBaseInkLight }}>
                  {item.description || "Sem descrição do módulo"}
                </p>
                <Padding padding="10px" />
                <Row style={{ gap: 8, flexWrap: "wrap" }}>
                  <span
                    style={{
                      padding: "4px 10px",
                      borderRadius: 999,
                      background: "#EFF4FF",
                      color: color.colorPrimary,
                      fontSize: 12,
                      fontWeight: 700,
                    }}
                  >
                    {classesCount} aulas
                  </span>
                  <span
                    style={{
                      padding: "4px 10px",
                      borderRadius: 999,
                      background: "#EAF8EF",
                      color: color.green,
                      fontSize: 12,
                      fontWeight: 700,
                    }}
                  >
                    {activeClassesCount} aulas ativas
                  </span>
                  <span
                    style={{
                      padding: "4px 10px",
                      borderRadius: 999,
                      background: "#FFF4E9",
                      color: color.colorSecondary,
                      fontSize: 12,
                      fontWeight: 700,
                    }}
                  >
                    {activitiesCount} atividades
                  </span>
                </Row>
              </Column>
              <Row style={{ gap: 10, alignItems: "center" }}>
                <Row
                  style={{
                    cursor: "pointer",
                    border: `1px solid ${color.colorBorderCard}`,
                    borderRadius: 999,
                    padding: "6px 10px",
                    gap: 8,
                  }}
                  onClick={() =>
                    setHiddenModules((prev) => ({
                      ...prev,
                      [item.id]: !prev[item.id],
                    }))
                  }
                  title={hiddenModules[item.id] ? "Expandir módulo" : "Recolher módulo"}
                >
                  <Icon
                    icon={hiddenModules[item.id] ? "pi pi-chevron-down" : "pi pi-chevron-up"}
                    color={color.colorPrimary}
                    size="1.2rem"
                  />
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: color.colorPrimary,
                    }}
                  >
                    {hiddenModules[item.id] ? "Expandir" : "Recolher"}
                  </span>
                </Row>
                <InputSwitch
                  tooltip={
                    item.classroom_module[0]?.active
                      ? "Remover Módulo"
                      : "Disponibilizar Módulo"
                  }
                  tooltipOptions={{ position: "bottom" }}
                  checked={item.classroom_module[0]?.active}
                  onChange={() => {
                    props.UpdateModuleClassroom(
                      { active: !item.classroom_module[0]?.active },
                      item.classroom_module[0].id
                    );
                  }}
                />
              </Row>
            </Row>

            {item.classroom_module[0]?.active && !hiddenModules[item.id] && (
              <>
                <Padding padding="12px" />
                <Divider />
                {item.classes.map((classes) => {
                  return <ListActivities key={classes.id} classes={classes} />;
                })}
              </>
            )}
          </div>
        );
      })}

      {props?.modulesClassroomList?.length === 0 && <Empty title="módulos" />}
      <ModalAddModule onHide={() => setVisible(!visible)} visible={visible} />
    </ContentPage>
  );
};

const ListActivities = ({ classes }: { classes: Class }) => {
  const props = useContext(ClassroomModulesContext);
  const { id } = useParams();
  const [activeClasses, setActiveClasses] = useState(true);

  return (
    <div
      style={{
        border: `1px solid ${color.colorBorderCard}`,
        borderRadius: 10,
        padding: 12,
        marginBottom: 12,
        background: "#FAFCFF",
      }}
    >
      <Row id="space-between" style={{ alignItems: "flex-start" }}>
        <Row
          style={{ cursor: "pointer" }}
          onClick={() => setActiveClasses(!activeClasses)}
        >
          <Column id="center">
            <Icon
              color={
                !classes.classroom_classes[0]?.active
                  ? color.colorFourth
                  : "black"
              }
              icon={
                activeClasses && classes.classroom_classes[0]?.active
                  ? "pi pi-chevron-up"
                  : "pi pi-chevron-down"
              }
              size="16px"
            />
          </Column>
          <Padding />
          <Column>
            <h4
              style={{
                margin: 0,
                color: !classes.classroom_classes[0]?.active
                  ? color.colorFourth
                  : "black",
              }}
            >
              {classes.name}
            </h4>
            <Padding padding="6px" />
            <Row style={{ gap: 8, flexWrap: "wrap" }}>
              <span
                style={{
                  padding: "3px 8px",
                  borderRadius: 999,
                  background: "#EFF4FF",
                  color: color.colorPrimary,
                  fontSize: 11,
                  fontWeight: 700,
                }}
              >
                {classes.duration}h
              </span>
              <span
                style={{
                  padding: "3px 8px",
                  borderRadius: 999,
                  background: "#FFF4E9",
                  color: color.colorSecondary,
                  fontSize: 11,
                  fontWeight: 700,
                }}
              >
                {classes.activities?.length ?? 0} atividades
              </span>
            </Row>
          </Column>
        </Row>
        <Column>
          <InputSwitch
            tooltip={
              classes.classroom_classes[0]?.active
                ? "Remover Aula"
                : "Disponibilizar Aula"
            }
            tooltipOptions={{ position: "bottom" }}
            pt={{
              slider: {
                style: {
                  backgroundColor: classes.classroom_classes[0]?.active
                    ? color.colorSecondary
                    : "#ced4da",
                },
              },
            }}
            checked={classes.classroom_classes[0]?.active}
            onChange={(e) =>
              classes.classroom_classes[0]
                ? props!.UpdateclasseClassroom(
                  { active: !classes.classroom_classes[0]?.active },
                  classes.classroom_classes[0].id
                )
                : props!.AddclasseClassroom({
                  idClasse: classes.id,
                  idClassroom: parseInt(id!),
                })
            }
          />
        </Column>
      </Row>

      {(classes.objective || classes.necessary_material) && (
        <>
          <Padding padding="10px" />
          <div style={{ color: color.colorsBaseInkLight, fontSize: 13 }}>
            {classes.objective && (
              <p style={{ margin: "0 0 6px 0" }}>
                <strong>Objetivo:</strong> {classes.objective}
              </p>
            )}
            {classes.necessary_material && (
              <p style={{ margin: 0 }}>
                <strong>Material:</strong> {classes.necessary_material}
              </p>
            )}
          </div>
        </>
      )}

      {activeClasses && classes.classroom_classes[0]?.active && (
        <div>
          <Padding padding="8px" />
          <Divider />

          {classes.activities.map((activities) => {
            return (
              <Padding padding="12px">
                <Row id="space-between">
                  <Row style={{ gap: 10 }}>
                    <Icon icon="pi pi-file" />
                    <Column>
                      <div style={{ fontWeight: 700 }}>{activities.name}</div>
                      <Padding padding="4px" />
                      <Row style={{ gap: 8, flexWrap: "wrap" }}>
                        <span
                          style={{
                            padding: "3px 8px",
                            borderRadius: 999,
                            background: "#EFF4FF",
                            color: color.colorPrimary,
                            fontSize: 11,
                            fontWeight: 700,
                          }}
                        >
                          {activities.type_activities}
                        </span>
                        <span
                          style={{
                            padding: "3px 8px",
                            borderRadius: 999,
                            background: "#EAF8EF",
                            color: color.green,
                            fontSize: 11,
                            fontWeight: 700,
                          }}
                        >
                          {activities.points_activities} pts
                        </span>
                        <span
                          style={{
                            padding: "3px 8px",
                            borderRadius: 999,
                            background: "#FFF4E9",
                            color: color.colorSecondary,
                            fontSize: 11,
                            fontWeight: 700,
                          }}
                        >
                          {activities.time_activities} min
                        </span>
                      </Row>
                    </Column>
                  </Row>
                  <Column>
                    <InputSwitch
                      tooltip={
                        activities.classroom_activities[0]?.active
                          ? "Remover atividade"
                          : "Disponibilizar atividade"
                      }
                      tooltipOptions={{ position: "bottom" }}
                      pt={{
                        slider: {
                          style: {
                            backgroundColor: activities.classroom_activities[0]
                              ?.active
                              ? color.colorThird
                              : "#ced4da",
                          },
                        },
                      }}
                      checked={activities.classroom_activities[0]?.active}
                      onChange={(e) =>
                        activities.classroom_activities[0]
                          ? props!.UpdateActivitiesClassroom(
                            {
                              active:
                                !activities.classroom_activities[0]?.active,
                            },
                            activities.classroom_activities[0].id
                          )
                          : props!.AddActivitiesClassroom({
                            idActivities: activities.id,
                            idClassroom: parseInt(id!),
                          })
                      }
                    />
                  </Column>
                </Row>
              </Padding>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ClassroomModules;
