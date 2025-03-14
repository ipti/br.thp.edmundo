import { Form, Formik } from "formik";
import { Dialog } from "primereact/dialog";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import * as yup from 'yup';
import ButtonComponent from "../../../../Components/Button";
import RadioButtonComponent from "../../../../Components/RadioButton";
import Stamp from "../../../../Components/Stamp";
import color from "../../../../Styles/colors";
import { Column, Padding, Row } from "../../../../Styles/styles";
import { UpdateUserContext } from "../context/context";
import { UpdateUserContextType } from "../context/types";

const ModalDistributeStamps = ({ onHide, visible }: { visible: boolean, onHide(): void }) => {

    const { idMember } = useParams()

    const props = useContext(UpdateUserContext) as UpdateUserContextType

    const schema = yup.object().shape({
        idStamps: yup.number().required('É obrigatório selecionar um selo').integer('idStamps deve ser um número inteiro'),
    });

    return (
        <Dialog header={"Adicionar selos"} visible={visible} style={{ width: "60vw" }} onHide={onHide} >
            <Formik validationSchema={schema} initialValues={{
                idStamps: undefined,
            }} onSubmit={(values) => {


                props.handleAddStampsUser({ idStamp: values.idStamps!, idUser: parseInt(idMember!) })
                onHide()
            }}>
                {({ values, errors, handleChange, setFieldValue, touched }) => {
                    return (
                        <Form>

                            <Column>{(errors.idStamps && touched.idStamps) && <label style={{ color: color.red }}>{errors.idStamps}</label>}</Column>

                            <label>
                                Selecione o selo
                            </label>
                            <Padding padding="16px" />
                            <div className="flex flex-column h-20rem" style={{ overflowY: "auto", overflowX: "hidden" }}>
                                <Padding />
                                <div className="grid gap-2" style={{ paddingTop: 8, paddingLeft: 16 }}>

                                    {props.stamps?.map((item) => {
                                        return (
                                            <div key={item.id} onClick={(e) => { setFieldValue("idStamps", item.id) }} className="col-12 md:col-3 lg:col-2 sm:col-4  card" style={{ background: values.idStamps === item.id ? color.colorCard : "", cursor: "pointer" }} >
                                                <Row id="center">
                                                    <Column style={{ width: "100%" }}>
                                                        <Row id="center">

                                                            <Stamp url={item?.img_url} description={item?.description} type={item.type} />
                                                        </Row>
                                                        <Padding />
                                                        <Row>
                                                            <RadioButtonComponent label={item.name} checked={values.idStamps === item.id} name="idStamps" value={values} onChange={(e) => { setFieldValue("idStamps", item.id) }} />
                                                        </Row>
                                                    </Column>
                                                </Row>
                                            </div>
                                        )
                                    })}
                                </div>
                                <Padding />
                                {(errors.idStamps && touched.idStamps) && <label style={{ color: color.red }}>{errors.idStamps}</label>}
                            </div>
                            <div className="flex pt-4 justify-content-end">
                                <ButtonComponent label="Finalizar" disabled={!values.idStamps} icon="pi pi-save" iconPos="right" type="submit" />
                            </div>
                        </Form>

                    )
                }}

            </Formik>
        </Dialog>
    )
}

export default ModalDistributeStamps