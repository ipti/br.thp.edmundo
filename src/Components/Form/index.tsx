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
      <Column style={{ gap: 32 }}>
        {form.question.map((item, key) => {
          return (
            <Padding padding="0" key={key}>
              <Column>
                <Row id="space-between">
                  <div
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
              <Padding padding="8px" />
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
            </Padding>
          );
        })}
      </Column>
    </div>
  );
};

export default FormComponent;
