import { Form, Formik } from "formik";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { MultiSelect } from "primereact/multiselect";
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { useContext, useRef } from "react";
import RadioButtonComponent from "../../../../Components/RadioButton";
import Stamp from "../../../../Components/Stamp";
import { ROLE } from "../../../../Controller/controllerGlobal";
import color from "../../../../Styles/colors";
import { Column, Padding, Row } from "../../../../Styles/styles";
import { OneClassroomContext } from "../context/context";
import { OneClassroomContextType } from "../context/types";
import { Item } from "../service/type";
import * as yup from 'yup';

const ModalDistributeStamps = ({ onHide, visible }: { visible: boolean, onHide(): void }) => {
    const stepperRef = useRef<any>(null);

    const props = useContext(OneClassroomContext) as OneClassroomContextType

    const schema = yup.object().shape({
        items: yup.array().min(1, 'É obrigatório selecionar um aluno').required('items é obrigatório'),
        idStamps: yup.number().required('É obrigatório selecionar um selo').integer('idStamps deve ser um número inteiro'),
    });

    return (
        <Dialog header={"Distribuir selos"} visible={visible} style={{ width: "60vw" }} onHide={onHide} >
            <Formik validationSchema={schema} initialValues={{
                idStamps: undefined,
                items: []
            }} onSubmit={(values) => {
                var users: Item[] = []

                for (const idUser of values.items!) {
                    users.push({ idUser: idUser })
                }
                props.handleDistributeStamps({ ...values, items: users })
                onHide()
            }}>
                {({ values, errors, handleChange, setFieldValue, touched }) => {
                    return (
                        <Form>

                            <Column>{(errors.idStamps && touched.idStamps) && <label style={{ color: color.red }}>{errors.idStamps}</label>}{(errors.items && touched.items) && <label style={{ color: color.red }}>{errors.items}</label>}</Column>
                            <Stepper ref={stepperRef} >

                                <StepperPanel header="Selos">
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
                                                        <Column>
                                                            <Row id="center">
                                                                <Column>
                                                                    <Row id="center">

                                                                        <Stamp url={item?.img_url} />
                                                                    </Row>
                                                                    <Padding />
                                                                    <Row>
                                                                        <RadioButtonComponent label={item.name} checked={values.idStamps === item.id} name="idStamps" value={values} onChange={(e) => { setFieldValue("idStamps", item.id) }} />
                                                                    </Row>
                                                                </Column>
                                                            </Row>
                                                        </Column>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <Padding />
                                        {(errors.idStamps && touched.idStamps) && <label style={{ color: color.red }}>{errors.idStamps}</label>}
                                    </div>
                                    <div className="flex pt-4 justify-content-end">
                                        <Button label="Continuar" disabled={!values.idStamps} icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                                    </div>
                                </StepperPanel>
                                <StepperPanel header="Alunos">
                                    <div className="flex flex-column h-12rem">
                                        <Column id="center" style={{ height: "100%" }}>
                                            <MultiSelect placeholder="Escolha os membros" options={props.classroomMembersList!.classroom.user.filter((item) => item.users.role === ROLE.STUDENT)} value={values.items} name="items" onChange={handleChange} optionLabel="users.name" optionValue="usersId" />
                                            <Padding />
                                            {(errors.items && touched.items) && <label style={{ color: color.red }}>{errors.items}</label>}
                                        </Column>
                                    </div>
                                    <div className="flex pt-4 justify-content-between">
                                        <Button label="Voltar" severity="info" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                                        <Button label="Finalizar" icon="pi pi-save" iconPos="right" type="submit" />
                                    </div>
                                </StepperPanel>

                            </Stepper>
                        </Form>

                    )
                }}

            </Formik>
        </Dialog>
    )
}

export default ModalDistributeStamps