import { Form, Formik } from "formik";
import { Calendar } from "primereact/calendar";
import { Dialog } from "primereact/dialog";
import { useContext } from "react";
import * as yup from 'yup';
import DropdownComponent from "../../../../Components/Dropdown";
import TextInput from "../../../../Components/TextInput";
import { Column, Padding, Row } from "../../../../Styles/styles";
import { OneClassroomContext } from "../context/context";
import { OneClassroomContextType } from "../context/types";
import { ProjectsTs } from "../service/type";
import { Button } from "primereact/button";
import { useParams } from "react-router-dom";

const ModalMigrationMeuBen = ({ onHide, visible }: { visible: boolean, onHide(): void }) => {

    const props = useContext(OneClassroomContext) as OneClassroomContextType

    const { id } = useParams()


    const schema = yup.object().shape({
        year: yup.date().required('Campo é obrigatório'),
        name: yup.string().required('Campo é obrigatório'),
        tsOne: yup.object().required('Campo é obrigatório'),
        project: yup.object().required('Campo é obrigatório'),
    });

    const initialValue: { name: string, project?: any, idClassroom?: number, year?: Date, tsOne?: ProjectsTs } = {
        name: props.classroomOne?.classroom.name ?? "",
        project: undefined,
        tsOne: undefined,
        idClassroom: undefined,
        year: undefined,
    }

    return (
        <Dialog header={"Migração para MeuBen"} visible={visible} style={{ width: "60vw" }} onHide={onHide} >
            <Formik validationSchema={schema} initialValues={initialValue} onSubmit={(values) => {
                console.log(values)
                props.handleMigrateMeuben({ idClassroom: parseInt(id!), name: values.name, project: values.project?.id, year: values.year?.getFullYear() })
                onHide()
            }}>
                {({ values, errors, handleChange, setFieldValue, touched }) => {

                    console.log(errors);
                    return (
                        <Form>
                            <div className="grid">
                                <div className="col-12 md:col-6">
                                    <label>Nome turma</label>
                                    <Padding />
                                    <TextInput
                                        value={values.name}
                                        placeholder="Nome turma"
                                        onChange={handleChange}
                                        name="name"
                                    />
                                    {errors.name && touched.name ? (
                                        <div style={{ color: "red", marginTop: "8px" }}>
                                            {errors.name}
                                        </div>
                                    ) : null}
                                </div>
                                <div className="col-12 md:col-6">
                                    <label>Tecnológia social *</label>
                                    <Padding />
                                    <DropdownComponent
                                        name="tsOne"
                                        placerholder="Escolha a tecnológia social "
                                        optionsLabel="name"
                                        optionsValue="id"
                                        value={values.tsOne}
                                        onChange={handleChange}
                                        options={
                                            props.projectMigration
                                        }
                                    />
                                    <Padding />
                                    {errors.tsOne && touched.tsOne ? (
                                        <div style={{ color: "red" }}>
                                            {errors?.tsOne.toString()}
                                            <Padding />
                                        </div>
                                    ) : null}
                                </div>
                                <div className="col-12 md:col-6">
                                    <label>Projetos *</label>
                                    <Padding />
                                    <DropdownComponent
                                        name="project"
                                        placerholder="Escolha o tipo de selo "
                                        value={values.project}
                                        onChange={handleChange}
                                        options={
                                            values.tsOne?.project
                                        }
                                    />
                                    <Padding />
                                    {errors.project && touched.project ? (
                                        <div style={{ color: "red" }}>
                                            {errors.project.toString()}
                                            <Padding />
                                        </div>
                                    ) : null}
                                </div>
                                <div className="col-12 md:col-6">
                                    <label>Ano da turma *</label>
                                    <Padding />
                                    <Calendar value={values.year} onChange={handleChange} name="year" view="year" style={{ width: "100%" }} dateFormat="yy" />
                                    <Padding />
                                    {errors.project && touched.project ? (
                                        <div style={{ color: "red" }}>
                                            {errors.project!.toString()}
                                            <Padding />
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            <Padding padding="8px" />
                            <Column>
                                <Row id="end">
                                    <Button label="Criar" type="submit" icon="pi pi-plus" />
                                </Row>
                            </Column>
                        </Form>
                    )
                }}
            </Formik>
        </Dialog>
    )
}

export default ModalMigrationMeuBen