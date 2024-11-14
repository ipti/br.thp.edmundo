import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog"
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { useContext, useRef } from "react";
import { OneClassroomContext } from "../context/context";
import { OneClassroomContextType } from "../context/types";
import Stamp from "../../../../Components/Stamp";
import { Column, Padding, Row } from "../../../../Styles/styles";
import RadioButtonComponent from "../../../../Components/RadioButton";
import { MultiSelect } from "primereact/multiselect";
import { Form, Formik } from "formik";
import color from "../../../../Styles/colors";

const ModalDistributeStamps = ({ onHide, visible }: { visible: boolean, onHide(): void }) => {
    const stepperRef = useRef<any>(null);

    const props = useContext(OneClassroomContext) as OneClassroomContextType
    return (
        <Dialog header={"Distribuir selos"} visible={visible} style={{ width: "60vw" }} onHide={onHide} >
            <Formik initialValues={{ idStamps: undefined, items: [] }} onSubmit={() => { }}>
                {({ values, errors, handleChange, setFieldValue }) => {
                    console.log(values)
                    return (
                        <Form>
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
                                                    <div onClick={(e) => { setFieldValue("idStamps", item.id) }} className="col-12 md:col-3 lg:col-2 sm:col-4  card" style={{ background: values.idStamps === item.id ? color.colorCard : "", cursor: "pointer" }} >
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

                                    </div>
                                    <div className="flex pt-4 justify-content-end">
                                        <Button label="Continuar" disabled={!values.idStamps} icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                                    </div>
                                </StepperPanel>
                                <StepperPanel header="Alunos">
                                    <div className="flex flex-column h-12rem">
                                        <Column id="center" style={{ height: "100%" }}>
                                            <MultiSelect placeholder="Escolha os membros" options={props.classroomMembersList!.classroom.user} value={values.items} name="items" onChange={handleChange} optionLabel="users.name" optionValue="usersId" />
                                        </Column>
                                    </div>
                                    <div className="flex pt-4 justify-content-between">
                                        <Button label="Back" severity="info" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
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