import { Form, Formik } from "formik";
import { Dialog } from "primereact/dialog";
import * as yup from 'yup';
import DropdownComponent from "../../../../Components/Dropdown";
import TextInput from "../../../../Components/TextInput";
import { Padding } from "../../../../Styles/styles";
import { Calendar } from "primereact/calendar";

const ModalMigrationMeuBen = ({ onHide, visible }: { visible: boolean, onHide(): void }) => {

    // const props = useContext(OneClassroomContext) as OneClassroomContextType

    const schema = yup.object().shape({
        items: yup.array().min(1, 'É obrigatório selecionar um aluno').required('items é obrigatório'),
        idStamps: yup.number().required('É obrigatório selecionar um selo').integer('idStamps deve ser um número inteiro'),
    });

    const initialValue: { name: string, project?: number, idClassroom?: number, year?: any } = {
        name: "",
        project: undefined,
        idClassroom: undefined,
        year: "",
    }

    return (
        <Dialog header={"Migração para MeuBen"} visible={visible} style={{ width: "60vw" }} onHide={onHide} >
            <Formik validationSchema={schema} initialValues={initialValue} onSubmit={() => {

                onHide()
            }}>
                {({ values, errors, handleChange, setFieldValue, touched }) => {
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
                                    <label>Projetos *</label>
                                    <Padding />
                                    <DropdownComponent
                                        name="type"
                                        placerholder="Escolha o tipo de selo "
                                        optionsLabel="name"
                                        optionsValue="id"
                                        value={values.project}
                                        onChange={handleChange}
                                        options={
                                            []
                                        }
                                    />
                                    <Padding />
                                    {errors.project && touched.project ? (
                                        <div style={{ color: "red" }}>
                                            {errors.project}
                                            <Padding />
                                        </div>
                                    ) : null}
                                </div>
                                <div className="col-12 md:col-6">
                                    <label>Ano da turma *</label>
                                    <Padding />
                                    <Calendar value={values.year} onChange={handleChange} view="year" dateFormat="yy" />
                                    <Padding />
                                    {errors.project && touched.project ? (
                                        <div style={{ color: "red" }}>
                                            {errors.project!}
                                            <Padding />
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </Dialog>
    )
}

export default ModalMigrationMeuBen