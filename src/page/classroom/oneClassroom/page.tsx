import CardItensClassrooom from "../../../Components/Card/CardItensClassroom";
import ContentPage from "../../../Components/ContentPage";
import { generateCode } from "../../../Controller/controllerGlobal";
import { Column, Padding, Row } from "../../../Styles/styles";
import pessoas from "../../../assets/image/pessoasgray.svg";

import { Form, Formik } from "formik";
import { Button } from "primereact/button";
import { InputSwitch } from "primereact/inputswitch";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../../../Components/TextInput";
import meeting from "../../../assets/image/school_teacher.svg";
import OneClassroomProvider, { OneClassroomContext } from "./context/context";
import { OneClassroomContextType } from "./context/types";


const ClassroomOne = () => {
    return (
        <OneClassroomProvider>
            <ClassroomOnePage />
        </OneClassroomProvider>
    )
}

const ClassroomOnePage = () => {
    const history = useNavigate()
    const [edit, setEdit] = useState<boolean | undefined>()


    const props = useContext(OneClassroomContext) as OneClassroomContextType


    return (
        <ContentPage title={props.classroomOne?.classroom?.name!} description={"Dono da turma: " + props.classroomOne?.owner?.name}>
            <Row id="end"><Button icon="pi pi-pencil" onClick={() => { setEdit(!edit) }} /></Row>

            {edit && <Formik initialValues={{ name: props.classroomOne?.classroom.name, isOpen: props.classroomOne?.classroom.active ? 1 : 0 }} onSubmit={(values) => { }}>
                {({ values, handleChange }) => {
                    return (
                        <Form>
                            <Row id="end">
                                <Button label="Salvar" />
                            </Row>
                            <Padding />
                            <div className="grid">
                                <div className="col-12 md:col-6">

                                    <label>Nome da turma</label>
                                    <Padding />

                                    <TextInput value={values.name} onChange={handleChange} name="name" />
                                </div>
                            </div>
                            <Padding padding="8px" />
                            <Column>
                                <label>Abrir turma?</label>
                                <Padding />

                                <InputSwitch checked={values.isOpen === 1} value={values.isOpen} name="isOpen" onChange={handleChange} />
                            </Column>
                        </Form>
                    )
                }}

            </Formik>}
            <Padding />

            
            <h3>Código da turma: {generateCode(props.classroomOne?.classroom?.id!)}</h3>
            <Padding padding="16px" />
            <div className="grid">
                <div
                    className="col-12 md:col-6"
                    onClick={() => { history('membros') }}
                >
                    <CardItensClassrooom title="Membros" description="Visualize os membros da turma" icon={pessoas} count={props.classroomOne?.classroom._count.user} />
                </div>
                <div className="col-12 md:col-6">
                    <CardItensClassrooom title="Atividades" description="Visualizr as atividades da turma" icon={meeting} />
                </div>


            </div>

        </ContentPage>
    )
}


export default ClassroomOne;