import { FormikErrors } from "formik";
import { useState } from "react";
import { Form } from "../../page/activities/type";
import { CreateResponse } from "../../page/homeActivities/type";
import { Column, Padding, Row } from "../../Styles/styles";
import ButtonComponent from "../Button";
import ModalEditForm from "./ModalEditForm";
import RenderCheckBoxCard from "./View/checkbox";
import RenderRadioButtonCard from "./View/radiobutton";

const FormComponent = ({
  form,
  setFieldValue,
  values,
  errors,
  isAlter,
}: {
  form: Form;
  isAlter?: boolean;
  values?: CreateResponse;
  errors?: any;
  setFieldValue?: (
    field: string,
    value: any,
    shouldValidate?: boolean
  ) => Promise<void | FormikErrors<CreateResponse>>;
}) => {
  const [visible, setVisible] = useState<any>(false);

  return (
    <div>
      <Column style={{ gap: 16 }}>
        {form.question.map((item, key) => {
          return (
            <div
              key={key}
              style={{
                border: "1px solid #D9E3F0",
                borderRadius: 12,
                background: "#FFFFFF",
                padding: 12,
              }}
            >
              <Column style={{ gap: 8 }}>
                <Row id="space-between" style={{ alignItems: "flex-start", gap: 8 }}>
                  <span
                    style={{
                      minWidth: 24,
                      height: 24,
                      borderRadius: 999,
                      background: "#EFF4FF",
                      color: "#2458D3",
                      fontSize: 12,
                      fontWeight: 700,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {key + 1}
                  </span>
                  <div
                    style={{ flex: 1 }}
                    dangerouslySetInnerHTML={{
                      __html: item.content,
                    }}
                  />
                  {isAlter && (
                    <ButtonComponent
                      icon="pi pi-pencil"
                      onClick={() => setVisible(item)}
                    />
                  )}
                </Row>
              </Column>
              <Padding padding="4px" />
              {item.type === "MULTIPLE_CHOICE" && (
                <RenderRadioButtonCard
                  question={item}
                  errors={errors}
                  values={values}
                  setFieldValue={setFieldValue!}
                  indexQuestion={key}
                />
              )}
              {item.type === "SELECTION_BOX" && (
                <RenderCheckBoxCard
                  question={item}
                  errors={errors}
                  values={values}
                  setFieldValue={setFieldValue!}
                  indexQuestion={key}
                />
              )}
              {errors?.question ? (
                <div style={{ color: "red", marginTop: "8px", fontSize: 12 }}>
                  {errors?.question[key]?.options}
                </div>
              ) : null}
              <ModalEditForm
                visible={visible}
                onHide={() => {
                  setVisible(false);
                }}
              />
            </div>
          );
        })}
      </Column>
    </div>
  );
};

export default FormComponent;
