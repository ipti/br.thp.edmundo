import { useContext } from "react"
import ContentPage from "../../../Components/ContentPage"
import { ImageConfig } from "../../../Components/DragAndDropFile/imageConfig"
import Icon from "../../../Components/Icon"
import { formatarDataHours } from "../../../Controller/controllerGlobal"
import color from "../../../Styles/colors"
import { Column, Padding, Row } from "../../../Styles/styles"
import ClassroomCorrectionOfActivitiesProvider, { ClassroomCorrectionOfActivitiesContext } from "./context/context"
import { ProgressSpinner } from "primereact/progressspinner"

const ClassroomCorrectionOfActivities = () => {
    return (
        <ClassroomCorrectionOfActivitiesProvider>
            <ClassroomCorrectionOfActivitiesPage />
        </ClassroomCorrectionOfActivitiesProvider>
    )
}

const ClassroomCorrectionOfActivitiesPage = () => {

    const status = {
        COMPLETED: "Finalizado",
        PENDING: "Em andamento"
    }

    const propsClassroomCorrectionOfActivities = useContext(ClassroomCorrectionOfActivitiesContext)

    if(propsClassroomCorrectionOfActivities?.isLoading) return <ProgressSpinner />



    return (
        <ContentPage title={propsClassroomCorrectionOfActivities?.activities?.activities.name!} description="Visualize a atividade enviado pelo aluno">
            <Padding padding="16px" />
            <>
                <Row id="space-between" style={{ marginBottom: "8px" }}>
                    <Column>
                        <h3>
                            {propsClassroomCorrectionOfActivities?.activities?.user_classroom.users.name}
                        </h3>
                        <Padding />
                        <p>Última atualização: {formatarDataHours(propsClassroomCorrectionOfActivities?.activities?.updatedAt!)}</p>
                    </Column>
                    <div style={{ padding: 16, cursor: "pointer", borderRadius: 8, background: propsClassroomCorrectionOfActivities?.activities?.status === "COMPLETED" ? color.green : propsClassroomCorrectionOfActivities?.activities?.status === "PENDING" ? color.colorSecondary : "" }}>
                        <h4 style={{ color: "white" }}>{status[propsClassroomCorrectionOfActivities?.activities?.status as keyof typeof status]}</h4>
                    </div>
                </Row>
                {
                    propsClassroomCorrectionOfActivities?.activities?.user_activities_archives.length! > 0 ? (
                        <div className="drop-file-preview">
                            <p className="drop-file-preview__title">
                                Arquivos anexados
                            </p>
                            {
                                propsClassroomCorrectionOfActivities?.activities?.user_activities_archives.map((item, index: number) => (
                                    <div key={index} className="drop-file-preview__item">
                                        <img src={ImageConfig[item.archive_url.split('/')[1]] ||
                                            ImageConfig['default']} alt="" />
                                        <div className="drop-file-preview__item__info">
                                            <p>{item.original_name}</p>
                                            <p>{item.size}B</p>
                                        </div>
                                        <span className="drop-file-preview__item__del"
                                            onClick={() => { window.open(item.archive_url) }}>
                                            <Icon icon='pi pi-download' />
                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                    ) : <>
                    <Padding padding="16px" />
                    <p className="drop-file-preview__title">
                        Sem arquivos enviados
                    </p>
                    </>
                }

            </>
        </ContentPage>
    )
}

export default ClassroomCorrectionOfActivities