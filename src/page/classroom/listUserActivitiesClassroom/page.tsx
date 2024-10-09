import { Form, Formik } from "formik"
import { Button } from "primereact/button"
import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"
import { MultiSelect } from "primereact/multiselect"
import { ProgressSpinner } from "primereact/progressspinner"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import ContentPage from "../../../Components/ContentPage"
import Icon from "../../../Components/Icon"
import { formatarDataHours, question } from "../../../Controller/controllerGlobal"
import color from "../../../Styles/colors"
import { Padding, Row } from "../../../Styles/styles"
import ActivitiesSentProvider, { ActivitiesSentContext } from "./context/context"
import { CreateNotasAvaliationType } from "./service/types"

const ActivitiesSent = () => {
    return (
        <ActivitiesSentProvider>
            <ActivitiesSentPage />
        </ActivitiesSentProvider>
    )
}

const ActivitiesSentPage = () => {

    const history = useNavigate()

    const status = {
        COMPLETED: "Finalizado",
        PENDING: "Em andamento"
    }

    const propsActivitiesSent = useContext(ActivitiesSentContext)

    if (propsActivitiesSent?.isLoading) return <ProgressSpinner />



    return (
        <ContentPage title={propsActivitiesSent?.activities?.activities?.name!} description="Visualize as atividades enviadas pelos alunos">
            <Padding padding="16px" />
            <Formik initialValues={{ selection: { id: undefined, name: undefined, } }} onSubmit={(values) => {
                const select: CreateNotasAvaliationType = {
                    collaboration: question.find(props => props.id === values.selection.id)?.id === 4 ? true : false,
                    complete_the_activity_correctly: question.find(props => props.id === values.selection.id)?.id === 0 ? true : false,
                    completion_within_the_indicated_deadline: question.find(props => props.id === values.selection.id)?.id === 2 ? true : false,
                    content_organization: question.find(props => props.id === values.selection.id)?.id === 2 ? true : false,
                    creativity_in_the_response: question.find(props => props.id === values.selection.id)?.id === 3 ? true : false,
                    understanding_the_content: question.find(props => props.id === values.selection.id)?.id === 5 ? true : false,
                }
                propsActivitiesSent?.createAvaliation(select, 2)
            }}>
                {({ values, handleChange }) => {
                    return (
                        <Form>
                            <Row id="">
                                <div className="grid">
                                    <div className="col-12 md:col-4">
                                        <label>Formato de Avaliação</label>
                                        <Padding />
                                        <MultiSelect style={{ width: 320 }} maxSelectedLabels={3} options={question} optionLabel="name" name="selection" optionValue="id" onChange={handleChange} value={values.selection} placeholder="Escolha sua forma de avaliação" />
                                    </div>
                                </div>
                                <Button label="Salvar" icon="pi pi-save" />
                            </Row>
                        </Form>
                    )
                }}
            </Formik>
            <Padding padding="16px" />
            <DataTable value={propsActivitiesSent?.activities?.activities?.user_activities} tableStyle={{ minWidth: '50rem' }}>
                <Column field="user_classroom.users.name" header="Nome"></Column>
                <Column body={(data) => <>{formatarDataHours(data.createdAt)}</>} header="Última Atualização"></Column>
                <Column body={(data) =>
                    <div style={{ padding: 16, width: 160, borderRadius: 8, background: data?.status === "COMPLETED" ? color.green : data?.status === "PENDING" ? color.colorSecondary : "" }}>
                        <h4 style={{ color: "white", textAlign: "center" }}>{status[data?.status as keyof typeof status]}</h4>
                    </div>}
                    header="Status"></Column>
                {propsActivitiesSent?.activities?.activities?.user_activities[0]?.user_avaliation?.total &&
                    <Column field="user_avaliation.total" header="Nota"></Column>
                }
                <Column body={(data) => <div style={{ cursor: data.status === "COMPLETED" ? "pointer" : "not-allowed" }} onClick={() => data.status === "COMPLETED" ? history("correcao/" + data.id) : null}><Icon icon="pi pi-eye" color={data.status === "COMPLETED" ? color.colorPrimary : color.grayOne} /></div>} align="center" header="Visualizar"></Column>

            </DataTable>
        </ContentPage>
    )
}

export default ActivitiesSent