import { Dialog } from "primereact/dialog";
import { Rating } from "primereact/rating";
import { Column, Padding, Row } from "../../../Styles/styles";
import { Button } from "primereact/button";
import { Form, Formik } from "formik";
import { useContext } from "react";
import { HomeActivitiesContext } from "../context/context";

const ModalRating = ({ setVisible, visible }: { visible?: boolean | undefined, setVisible: any }) => {
    const propsAplication = useContext(HomeActivitiesContext)

    return (
        <Dialog header="Avalie a atividade" visible={true} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
            <Padding padding="8px" />
            <Formik initialValues={{ rating: 0 }} onSubmit={(values) => { propsAplication?.ActivitiesUserRating(values); setVisible(false) }}>
                {({ values, errors, handleChange, setFieldValue }) => {
                    console.log(values)
                    return (
                        <Form>
                            <Rating
                                value={values.rating}
                                pt={{
                                    onIcon: {
                                        width: 32,
                                        height: 32,
                                        fontSize: 32
                                    }
                                }}
                                onChange={(e) => setFieldValue("rating", e.value)} cancel={false} />
                            <Padding padding="16px" />
                            <Column>
                                <Row id="end">
                                    <Button label="Enviar" />
                                </Row>
                            </Column>

                        </Form>
                    )
                }}
            </Formik>

        </Dialog>
    )
}

export default ModalRating