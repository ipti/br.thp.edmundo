import { Form, Formik } from "formik";
import { Dialog } from "primereact/dialog";
import { InputNumber } from "primereact/inputnumber";
import { InputTextarea } from "primereact/inputtextarea";
import { useContext } from "react";
import * as Yup from "yup";
import ButtonComponent from "../../../../Components/Button";
import { Column, Padding, Row } from "../../../../Styles/styles";
import { Group } from "../../listGroup/service/types";
import { GroupOneContext } from "../context/context";

const ModalInputs = ({ visible, setOpen, group }: { visible: any; setOpen: any, group?: Group }) => {
  const props = useContext(GroupOneContext);


  const initialValue: { description: string; metric_percentange?: number | undefined } = {
    description: visible?.description ?? "",
    metric_percentange: visible?.metric_percentange ?? undefined,
  };

  const total = group?.metric_group_avaliation?.reduce(function(total: number, item){
      return total + item.metric_percentange;
     }, 0) ?? 0
  const schema = Yup.object().shape({
    description: Yup.string().required("Campo é obrigatório"),
    metric_percentange: Yup.number().required("Campo é obrigatório").moreThan(0, "Métricas ultrapassaram 100%").lessThan((visible?.metric_percentange ? 100 - (total - visible?.metric_percentange) : 100 - total)+1, `O valor deve ser menor ou igual que ${visible?.metric_percentange ? 100 - (total - visible?.metric_percentange) : 100 - total}%` ),
  });



  return (
    <Dialog
      visible={visible}
      header={visible?.description ? "Editar métrica" : "Criar métrica"}
      style={{ width: "50%" }}
      onHide={() => setOpen(!visible)}
    >
      <Formik
        initialValues={initialValue}
        validationSchema={schema}
        onSubmit={(values) => {
          if (visible.name) {
            props?.CreateMetricGroup({
              description: values.description,
              metric_percentange: values.metric_percentange ?? 0,
              idGroup: visible.id,
            });
          }

          if(visible.description){
            props?.UpdateGroupMetric({
              description: values.description,
              metric_percentange: values.metric_percentange
            }, visible.id)
          }
          setOpen(!visible);
        }}
      >
        {({ values, handleChange, errors, touched, setFieldValue }) => {
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
                  <label>Porcetagem de nota (resta {visible.metric_percentange ? 100 - (total - visible.metric_percentange) : 100 - total}%)*</label>
                  <Padding />
                  <InputNumber
                    value={values.metric_percentange}
                    className="w-full"
                    placeholder="Digite a porcetagem da nota"
                    suffix="%"
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
              {(visible.metric_percentange ? 100 - (total - visible.metric_percentange) : 100 - total) <= 0 && <p style={{color: "red"}}>Limite de porcetagem de nota atingido</p>}

              <Padding padding="16px" />
              <Column>
                <Row id="end">
                  <ButtonComponent
                    type="submit"
                    disabled={(visible.metric_percentange ? 100 - (total - visible.metric_percentange) : 100 - total) <= 0}
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
