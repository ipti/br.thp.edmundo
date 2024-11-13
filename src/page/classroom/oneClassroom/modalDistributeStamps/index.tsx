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

const ModalDistributeStamps = ({ onHide, visible }: { visible: boolean, onHide(): void }) => {
    const stepperRef = useRef<any>(null);

    const props = useContext(OneClassroomContext) as OneClassroomContextType
    return (
        <Dialog visible={visible} style={{ width: "60vw" }} onHide={onHide} >
            <Formik initialValues={{}} onSubmit={() => { }}>
                <Form>
                    <Stepper ref={stepperRef} >

                        <StepperPanel header="Selos">
                            <label>
                                Selecione o selo
                            </label>
                            <Padding padding="16px" />
                            <div className="flex flex-column h-12rem grid">
                                {props.stamps?.map((item) => {
                                    return (
                                        <div className="col-12 md:col-2 card" >
                                            <Column>
                                                <Row id="center">
                                                    <Column>
                                                        <Stamp url={item?.img_url} />
                                                        <Padding />
                                                        <Row>
                                                            <RadioButtonComponent label={item.name} />
                                                        </Row>
                                                    </Column>
                                                </Row>
                                            </Column>
                                        </div>
                                    )
                                })}

                            </div>
                            <div className="flex pt-4 justify-content-end">
                                <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                            </div>
                        </StepperPanel>
                        <StepperPanel header="Alunos">
                            <div className="flex flex-column h-12rem">
                                <MultiSelect options={[]} />
                            </div>
                            <div className="flex pt-4 justify-content-between">
                                <Button label="Back" severity="info" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                                <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                            </div>
                        </StepperPanel>

                    </Stepper>
                </Form>

            </Formik>
        </Dialog>
    )
}

export default ModalDistributeStamps