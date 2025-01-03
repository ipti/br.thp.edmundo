import { Form, Formik } from "formik";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputNumber } from "primereact/inputnumber";
import { InputTextarea } from "primereact/inputtextarea";
import { useContext } from "react";
import { Column, Padding, Row } from "../../../../Styles/styles";
import { GroupOneContext } from "../context/context";
import * as Yup from "yup";

const ModalInputs = ({ visible, setOpen }: { visible: any; setOpen: any }) => {
  const props = useContext(GroupOneContext);

  const initialValue: { description: string; metric_percentange: number } = {
    description: visible?.description ?? "",
    metric_percentange: 0,
  };

  const schema = Yup.object().shape({
    description: Yup.string().required("Campo é obrigatório"),
    metric_percentange: Yup.number().required("Campo é obrigatório"),
  });

  return (
    <Dialog
      visible={visible}
      header={visible?.id ? "Editar tag" : "Criar tag"}
      style={{ width: "50%" }}
      onHide={() => setOpen(!visible)}
    >
      <Formik
        initialValues={initialValue}
        validationSchema={schema}
        onSubmit={(values) => {
          if (visible.id) {
            console.log(visible);
            props?.CreateMetricGroup({
              description: values.description,
              metric_percentange: values.metric_percentange,
              idGroup: visible.id,
            });
          }
          setOpen(!visible);
        }}
      >
        {({ values, handleChange, errors, touched, setFieldValue }) => {
            console.log(errors)
          return (
            <Form>
              <div className="grid">
                <div className="col-12 md:col-6">
                  <label>Descrição</label>
                  <Padding />
                  <InputTextarea
                    value={values.description}
                    placeholder="Digite uma descrição"
                    onChange={handleChange}
                    className="w-full"
                    autoResize
                    name="description"
                  />
                  {errors.description && touched.description ? (
                    <div style={{ color: "red", marginTop: "8px" }}>
                      {errors.description}
                    </div>
                  ) : null}
                </div>
                <div className="col-12 md:col-6">
                  <label>Porcetagem da métrica *</label>
                  <Padding />
                  <InputNumber
                    value={values.metric_percentange}
                    className="w-full"
                    placeholder="Digite a porcetagem totalizando 100% em todas as métricas"
                    onValueChange={(e) => {
                      setFieldValue("metric_percentange", e.value);
                    }}
                    min={0}
                    max={100}
                  />
                  <Padding />
                  {errors.metric_percentange && touched.metric_percentange ? (
                    <div style={{ color: "red" }}>
                      {errors.metric_percentange.toString()}
                      <Padding />
                    </div>
                  ) : null}
                </div>
              </div>
              <Padding padding="16px" />
              <Column>
                <Row id="end">
                  <Button
                    type="submit"
                    label={visible.description ? "Salvar" : "Criar"}
                    icon={visible.description ? "pi pi-save" : "pi pi-plus"}
                  />
                </Row>
              </Column>
            </Form>
          );
        }}
      </Formik>
    </Dialog>
  );
};

export default ModalInputs;
