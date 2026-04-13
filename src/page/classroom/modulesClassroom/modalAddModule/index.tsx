import { Dialog } from "primereact/dialog";
import { InputSwitch } from "primereact/inputswitch";
import { InputText } from "primereact/inputtext";
import { useContext, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import color from "../../../../Styles/colors";
import { Column, Padding, Row } from "../../../../Styles/styles";
import { ClassroomModulesContext } from "../context/context";

const ModalAddModule = ({
  onHide,
  visible,
}: {
  visible?: boolean | undefined;
  onHide(): void;
}) => {
  const { id } = useParams();
  const [filter, setFilter] = useState("");

  const props = useContext(ClassroomModulesContext);

  const filteredModules = useMemo(() => {
    const modules = props?.allModules ?? [];
    if (!filter.trim()) return modules;
    const search = filter.toLowerCase();
    return modules.filter(
      (item) =>
        item.name?.toLowerCase().includes(search) ||
        item.description?.toLowerCase().includes(search)
    );
  }, [filter, props?.allModules]);

  return (
    <Dialog
      header="Adicionar Módulos à Turma"
      visible={visible}
      style={{
        width:
          window.innerWidth > 900 ? "56%" : window.innerWidth > 600 ? "72%" : "92%",
      }}
      onHide={onHide}
    >
      <p style={{ margin: 0, color: color.colorsBaseInkLight }}>
        Aqui você vincula ou remove módulos da turma.
      </p>
      <Padding padding="12px" />
      <InputText
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Buscar módulo por nome ou descrição"
        className="w-full"
      />
      <Padding padding="12px" />
      <div style={{ maxHeight: "55vh", overflowY: "auto", paddingRight: 4 }}>
        {filteredModules.map((item) => {
          const classroomModule = item.classroom_module?.[0];
          const isLinked = Boolean(classroomModule);
          const isActive = Boolean(classroomModule?.active);

          return (
            <div
              key={item.id}
              style={{
                border: `1px solid ${color.colorBorderCard}`,
                borderRadius: 12,
                padding: 12,
                marginBottom: 10,
                background: isActive ? "#F5FAFF" : "#FFFFFF",
              }}
            >
              <Row style={{ width: "100%", gap: 12 }} id="space-between">
                <Column style={{ flex: 1 }}>
                  <Row style={{ gap: 8, alignItems: "center" }}>
                    <h4 style={{ margin: 0 }}>{item.name}</h4>
                    <span
                      style={{
                        padding: "2px 8px",
                        borderRadius: 999,
                        background: isLinked ? "#EFF4FF" : "#F3F4F6",
                        color: isLinked ? color.colorPrimary : color.gray,
                        fontSize: 11,
                        fontWeight: 700,
                      }}
                    >
                    {isLinked ? "Vinculado" : "Não vinculado"}
                    </span>
                    {isLinked && (
                      <span
                        style={{
                          padding: "2px 8px",
                          borderRadius: 999,
                          background: isActive ? "#EAF8EF" : "#FFF4E9",
                          color: isActive ? color.green : color.colorSecondary,
                          fontSize: 11,
                          fontWeight: 700,
                        }}
                      >
                        {isActive ? "Visível" : "Oculto"}
                      </span>
                    )}
                  </Row>
                  <Padding padding="6px" />
                  <p
                    style={{
                      margin: 0,
                      color: color.colorsBaseInkLight,
                      fontSize: 13,
                      lineHeight: "18px",
                    }}
                  >
                    {item.description || "Sem descrição"}
                  </p>
                </Column>
                <Column style={{ gap: 8 }}>
                  <Row style={{ gap: 8, alignItems: "center" }}>
                    <span
                      style={{
                        minWidth: 70,
                        fontSize: 12,
                        color: color.colorsBaseInkLight,
                        fontWeight: 700,
                      }}
                    >
                      Vincular
                    </span>
                    <InputSwitch
                      checked={isLinked}
                      onChange={() => {
                        if (!isLinked) {
                          props?.AddModuleClassroom({
                            idClassroom: parseInt(id!),
                            idModule: item.id,
                          });
                          return;
                        }
                        props?.RemoveModuleClassroom({
                          idClassroom: parseInt(id!),
                          idModule: item.id,
                        });
                      }}
                    />
                  </Row>
                </Column>
              </Row>
            </div>
          );
        })}

        {filteredModules.length === 0 && (
          <div
            style={{
              border: `1px dashed ${color.colorBorderCard}`,
              borderRadius: 12,
              padding: 16,
              textAlign: "center",
              color: color.colorsBaseInkLight,
            }}
          >
            Nenhum módulo encontrado para o filtro informado.
          </div>
        )}
      </div>
    </Dialog>
  );
};

export default ModalAddModule;
