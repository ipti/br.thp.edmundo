import { Form, Formik } from "formik";
import { Dialog } from "primereact/dialog";
import { Rating } from "primereact/rating";
import { useContext } from "react";
import * as Yup from "yup";
import ButtonComponent from "../../../Components/Button";
import { Column, Padding, Row } from "../../../Styles/styles";
import { HomeActivitiesContext } from "../context/context";

const ModalRating = ({
  setVisible,
  visible,
}: {
  visible?: boolean | undefined;
  setVisible: any;
}) => {
  const propsAplication = useContext(HomeActivitiesContext);

  const schema = Yup.object().shape({
    rating: Yup.string().required("Avalie a atividade"),
  });

  return (
    <Dialog
      header="Avalie a atividade"
      visible={visible}
      style={{ width: window.innerWidth > 800 ? "30vw" : "60vw" }}
      onHide={() => {
        if (!visible) return;
        setVisible(false);
      }}
    >
      <Padding padding="8px" />
      <Formik
        initialValues={{ rating: undefined }}
        validationSchema={schema}
        onSubmit={(values) => {
          propsAplication?.ActivitiesUserRating(values);
          setVisible(false);
        }}
      >
        {({ values, errors, handleChange, setFieldValue, touched }) => {
          return (
            <Form>
              <Rating
                value={values.rating}
                style={{ fontSize: 32 }}
                onChange={(e) => setFieldValue("rating", e.value)}
                cancel={false}
              />
              {errors.rating && touched.rating ? (
                <div style={{ color: "red", marginTop: "8px" }}>
                  {errors.rating}
                </div>
              ) : null}
              <Padding padding="16px" />
              <Column>
                <Row id="end">
                  <ButtonComponent label="Enviar" type="submit" />
                </Row>
              </Column>
            </Form>
          );
        }}
      </Formik>
    </Dialog>
  );
};

export default ModalRating;
