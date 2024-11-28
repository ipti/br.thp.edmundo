import { Form, Formik } from "formik"
import { Button } from "primereact/button"
import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"
import { MultiSelect } from "primereact/multiselect"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import ContentPage from "../../../Components/ContentPage"
import Icon from "../../../Components/Icon"
import Loading from "../../../Components/Loading"
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

interface InitialForm {
    selection: { name: string, id: number }[]
}

const ActivitiesSentPage = () => {



    const getNotas = (values: CreateNotasAvaliationType) => {

        var array = []
        if (values.collaboration) array.push({ id: 4, name: "Colaboração" })

        if (values.complete_the_activity_correctly) array.push({ id: 0, name: "Cumpriu a atividade corretamente" })

        if (values.completion_within_the_indicated_deadline) array.push({ id: 2, name: "Conclusão no prazo indicado" })

        if (values.content_organization) array.push({ id: 1, name: "Organização do conteúdo" })

        if (values.creativity_in_the_response) array.push({ id: 3, name: "Criatividade na resposta" })

        if (values.understanding_the_content) array.push({ id: 5, name: "Compreensão sobre o conteúdo" })

        return array
    }

    const history = useNavigate()
    const propsActivitiesSent = useContext(ActivitiesSentContext)

    const initialForm: InitialForm = {
        selection: propsActivitiesSent!.activities?.activities?.classroom_activities[0]?.classroom_avaliation ? getNotas(propsActivitiesSent!.activities?.activities?.classroom_activities[0]?.classroom_avaliation) : []
    }

    const status = {
        COMPLETED: "Finalizado",
        PENDING: "Em andamento"
    }


    if (propsActivitiesSent?.isLoading) return <Loading />



    return (
        <ContentPage title={propsActivitiesSent?.activities?.activities?.name!} description="Visualize as atividades enviadas pelos alunos">
            <Padding padding="16px" />
            {propsActivitiesSent?.activities?.activities?.type_activities === "CODE" && <>
                {propsActivitiesSent?.activities?.activities && <Formik initialValues={initialForm} onSubmit={(values) => {
                    const select: CreateNotasAvaliationType = {
                        collaboration: values.selection.find(props => props.id === 4) ? true : false,
                        complete_the_activity_correctly: values.selection.find(props => props.id === 0) ? true : false,
                        completion_within_the_indicated_deadline: values.selection.find(props => props.id === 2) ? true : false,
                        content_organization: values.selection.find(props => props.id === 1) ? true : false,
                        creativity_in_the_response: values.selection.find(props => props.id === 3) ? true : false,
                        understanding_the_content: values.selection.find(props => props.id === 5) ? true : false,
                    }
                    if (propsActivitiesSent!.activities?.activities?.classroom_activities[0]?.classroom_avaliation) {
                        propsActivitiesSent?.updateAvaliation(select, propsActivitiesSent!.activities?.activities?.classroom_activities[0]?.classroom_avaliation.id)
                    } else {
                        propsActivitiesSent?.createAvaliation(select, propsActivitiesSent.activities.id)
                    }
                }}>
                    {({ values, handleChange }) => {
                        return (
                            <Form>
                                <Row id="space-between">
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <label>Formato de Avaliação</label>
                                        <Padding />
                                        <MultiSelect style={{ width: 320 }} maxSelectedLabels={3} options={question} optionLabel="name" name="selection" onChange={handleChange} value={values.selection} placeholder="Escolha sua forma de avaliação" />
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                        <Button label="Salvar" icon="pi pi-save" />
                                    </div>
                                </Row>
                            </Form>
                        )
                    }}
                </Formik>}
            </>}

            <Padding padding="16px" />
            <DataTable value={propsActivitiesSent?.activities?.activities?.user_activities} tableStyle={{ minWidth: '50rem' }}>
                <Column field="user_classroom.users.name" header="Nome"></Column>
                <Column body={(data) => <>{formatarDataHours(data.createdAt)}</>} header="Última Atualização"></Column>
                <Column body={(data) =>
                    <div style={{ padding: 16, width: 160, borderRadius: 8, background: data?.status === "COMPLETED" ? color.green : data?.status === "PENDING" ? color.colorSecondary : "" }}>
                        <h4 style={{ color: "white", textAlign: "center" }}>{status[data?.status as keyof typeof status]}</h4>
                    </div>}
                    header="Status"></Column>
                <Column field="user_avaliation.total" body={(data) => {
                    return <>{data?.user_avaliation?.total ?? "-"}</>
                }} header="Nota"></Column>

                <Column body={(data) => <div style={{ cursor: data.status === "COMPLETED" ? "pointer" : "not-allowed" }} onClick={() => data.status === "COMPLETED" ? history("correcao/" + data.id) : null}><Icon icon="pi pi-eye" color={data.status === "COMPLETED" ? color.colorPrimary : color.grayOne} /></div>} align="center" header="Visualizar"></Column>

            </DataTable>
        </ContentPage>
    )
}

export default ActivitiesSent