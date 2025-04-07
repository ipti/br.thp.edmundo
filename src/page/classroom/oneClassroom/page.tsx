import CardItensClassrooom from "../../../Components/Card/CardItensClassroom";
import ContentPage from "../../../Components/ContentPage";
import { generateCode, ROLE } from "../../../Controller/controllerGlobal";
import { Column, Padding, Row } from "../../../Styles/styles";
import pessoas from "../../../assets/image/iconsMenu/classroom.svg";

import activities from "../../../assets/image/activities.svg";


import { Form, Formik } from "formik";
import { ProgressSpinner } from "primereact/progressspinner";
import { SelectButton } from "primereact/selectbutton";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ButtonComponent from "../../../Components/Button";
import CardQuant from "../../../Components/Chart/CardQuant";
import Icon from "../../../Components/Icon";
import TextInput from "../../../Components/TextInput";
import color from "../../../Styles/colors";
import meeting from "../../../assets/image/iconsMenu/module.svg";
import { AplicationContext } from "../../../context/context";
import { PropsAplicationContext } from "../../../context/type";
import OneClassroomProvider, { OneClassroomContext } from "./context/context";
import { OneClassroomContextType } from "./context/types";
import ModalDistributeStamps from "./modalDistributeStamps";
import ModalMigrationMeuBen from "./modalMigrationMeuBen";


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
    const [visibleMigration, setVisibleMigration] = useState(false)
    const [visible, setVisible] = useState(false)
    const { id } = useParams()
    const propsAplication = useContext(AplicationContext) as PropsAplicationContext

    const options2 = [
        { name: 'Liberar', value: true },
        { name: 'Bloquear', value: false }
    ];
    const props = useContext(OneClassroomContext) as OneClassroomContextType


    return (
        <ContentPage title={props.classroomOne?.classroom?.name!} description={"Dono da turma: " + props.classroomOne?.owner?.name}>
            {(!edit && propsAplication.user?.role !== ROLE.STUDENT) && <Row id="end"><ButtonComponent label={window.innerWidth > 600 ? "Editar turma" : undefined} icon="pi pi-pencil" onClick={() => { setEdit(!edit) }} /></Row>}

            {edit && <Formik initialValues={{ name: props.classroomOne?.classroom.name, isOpen: props.classroomOne?.classroom.isOpen }} onSubmit={(values) => { props.UpdateClassroom(id!, { name: values.name!, isOpen: values.isOpen ? true : false }); setEdit(!edit) }}>
                {({ values, handleChange }) => {
                    return (
                        <Form>
                            <Row id="end" style={{ gap: "10px" }}>
                                <ButtonComponent label="Salvar" icon={"pi pi-save"} type="submit" />
                                <ButtonComponent label="Cancelar" type="button" severity="secondary" style={{ color: "black" }} onClick={() => { setEdit(!edit) }} />
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
                                <label>Periodo de entrada da turma</label>
                                <Padding />
                                <SelectButton value={values.isOpen} onChange={handleChange} name="isOpen" options={options2} optionLabel="name" />
                                <Padding padding="8px" />
                            </Column>
                        </Form>
                    )
                }}

            </Formik>}
            <Padding />
            {!edit && <Row id="center" onClick={() => { setEdit(!edit) }} style={{ padding: 12, background: props.classroomOne?.classroom.isOpen ? color.green : '#dd0201', width: 256, borderRadius: 8, cursor: "pointer" }}>
                <Column id="center">
                    <h3 style={{ textAlign: "center", color: "white" }}>
                        Turma {props.classroomOne?.classroom.isOpen ? <>Liberada</> : <>Bloqueada</>}
                    </h3>
                </Column>
                <Padding />
                <Icon color={color.white} icon={props.classroomOne?.classroom.isOpen ? "pi pi-lock-open" : "pi pi-lock"} />
            </Row>}
            <Padding padding="8px" />
            <h3>Código da turma: {generateCode(props.classroomOne?.classroom?.id!)}</h3>
            <Padding padding="8px" />
            <Row>
                <ButtonComponent label="Distribuir selos" icon={"pi pi-crown"} iconPos="right" onClick={() => {
                    setVisible(!visible)
                }} />
                <Padding padding="8px" />
                <ButtonComponent label="Migrar turma" icon={"pi pi-upload"} iconPos="right" onClick={() => {
                    setVisibleMigration(!visibleMigration)
                }} />
            </Row>
            <Padding padding="8px" />
            <h2>
                Informações
            </h2>
            <Padding padding="8px" />
            {props.classroomChart ? <div className="grid">
                <div className="col-12 md:col-4 lg:col-2">
                    <CardQuant quant={props.classroomChart?.activities_pending} title="Atividades pendentes" color="primary" />
                </div>
                <div className="col-12 md:col-4 lg:col-2">
                    <CardQuant quant={props.classroomChart?.completed_user_activities} title="Atividades finalizadas" color="third" />
                </div>
                <div className="col-12 md:col-4 lg:col-2">
                    <CardQuant quant={props.classroomChart?.code_activities} title="Atividades de código" color="secondary" />
                </div>
                <div className="col-12 md:col-4 lg:col-2">
                    <CardQuant quant={props.classroomChart?.quiz_activities} title="Múltipla escolha" color="primary" />
                </div>
                <div className="col-12 md:col-4 lg:col-2">
                    <CardQuant quant={props.classroomChart?.media_notas?.toFixed(2)} title="Média da turma" color="secondary" />
                </div>
            </div> : <ProgressSpinner />}
            <Padding padding="16px" />
            <div className="grid">
                <div
                    className="col-12 md:col-6"
                    onClick={() => { history('membros') }}
                >
                    <CardItensClassrooom title="Membros" description="Visualize os membros da turma" icon={pessoas} count={props.classroomOne?.classroom?._count.user} />
                </div>
                <div className="col-12 md:col-6" onClick={() => { history('modulos') }}>
                    <CardItensClassrooom title="Módulos" description="Visualize os módulos adicionados a turma" icon={meeting} />
                </div>
                <div className="col-12 md:col-6" onClick={() => { history('atividades') }}>
                    <CardItensClassrooom title="Atividades" description="Visualize as atividades entregues pelos alunos" icon={activities} />
                </div>
            </div>

            <ModalDistributeStamps visible={visible} onHide={() => { setVisible(!visible) }} />

            <ModalMigrationMeuBen visible={visibleMigration} onHide={() => { setVisibleMigration(!visibleMigration) }} />
        </ContentPage>
    )
}


export default ClassroomOne;