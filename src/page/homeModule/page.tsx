import { useContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ButtonComponent from "../../Components/Button";
import ListActivities from "../../Components/ListActivities";
import ListClassroom from "../../Components/ListClasses";
import ListMembers from "../../Components/ListMembers";
import Loading from "../../Components/Loading";
import { AplicationContext } from "../../context/context";
import { Container, Padding, Row } from "../../Styles/styles";
import HomeModulesProvider, { HomeModulesContext } from "./context/context";
import { ContentPaper } from "./styles";
import { Class } from "./type";




const HomeModules = () => {
    return (
        <HomeModulesProvider>
            <HomeModulePage />
        </HomeModulesProvider>
    )
}

// const Avatar = styled.div`
//   border: 1px solid ${styles.colors.colorBorderCard};
//   height: 64px;
//   width: 64px;
//   border-radius: 50%;
  
//   img {
//     border-radius: 50%; /* This will make the image circular */
//     height: 100%;
//     width: 100%;
//   }
// `;


const HomeModulePage = () => {
    const { idClassroom, idModule } = useParams()
    const [searchParams] = useSearchParams();
    const idClasses = searchParams.get("idClasses");

    const [classes, setClass] = useState<Class | undefined>()
    const propsAplication = useContext(AplicationContext)


    const propsHome = useContext(HomeModulesContext)

    useEffect(() => {
        if (propsHome?.modules?.classes) {
            if (propsHome?.modules?.classes[0]) {

                let classFound = propsHome?.modules?.classes.find((item) => item.id === Number(idClasses))
                if (classFound) {
                    setClass(classFound)
                } else {
                    setClass(propsHome?.modules?.classes[0])
                }
            }
        }
    }, [propsHome?.modules?.classes, idClasses])

    if (!propsHome?.modules) return <Loading />

    const totalClasses = propsHome.modules.classes?.length ?? 0
    const totalActivities = propsHome.modules.classes?.reduce((acc, item) => acc + (item.activities?.length ?? 0), 0) ?? 0
    const selectedClassHasContent = !!classes?.content

    return (
        <Container style={{
            height: "100%", background: "linear-gradient(180deg, #FFFFFF 0%, #E6F0FF 100%)", padding: "24px"
        }}>
            <div
                style={{
                    border: "1px solid #D9E3F0",
                    borderRadius: 12,
                    padding: 12,
                    background: "#FFFFFF",
                }}
            >
                <h1 style={{ margin: 0 }}>{propsHome.modules.name}</h1>
                <p style={{ margin: "8px 0 0 0", color: "#61758A" }}>
                    {propsAplication?.user?.name}, acompanhe sua aula e avance para as atividades.
                </p>
                <Padding padding="8px" />
                <Row style={{ gap: 8, flexWrap: "wrap" }}>
                    <span style={{ padding: "4px 10px", borderRadius: 999, background: "#EFF4FF", color: "#2458D3", fontWeight: 700, fontSize: 12 }}>
                        {totalClasses} aulas
                    </span>
                    <span style={{ padding: "4px 10px", borderRadius: 999, background: "#FFF4E9", color: "#D9781E", fontWeight: 700, fontSize: 12 }}>
                        {totalActivities} atividades
                    </span>
                </Row>
            </div>
            <Padding padding="16px" />
            <div className="grid">
                <div className="col-12 md:col-9">
                    <ContentPaper>
                        <h2 style={{ marginTop: 0 }}>{classes?.name || "Aula"}</h2>
                        {selectedClassHasContent ? <div
                            dangerouslySetInnerHTML={{ __html: classes?.content || "" }}
                        /> : <p>Sem conteúdo para esta aula.</p>}
                        <div className="flex flex-row justify-content-center">
                            {classes?.user_classes[0]?.viewed ? <div style={{background: '#52c41a', color: 'white', padding: '8px',borderRadius: '8px', fontWeight: '800'}}>
                                <i className="pi pi-check-circle"/>
                                <label style={{ marginLeft: 8}}>Aula concluída</label>
                            </div> :
                                (classes?.content && <ButtonComponent label="Finalizar aula" icon='pi pi-check-square' onClick={() => propsHome.handleViewdClassesUser(propsAplication?.user?.id ?? 0, classes?.id ?? 0, Number(idClassroom))}/>)
                            }
                        </div>
                    </ContentPaper>
                </div>
                <div className="col-12 md:col-3">
                    <ListClassroom classes={propsHome.modules.classes} idClasses={classes?.id || 0} />
                    <ListActivities activities={classes?.activities} idClassroom={idClassroom} idModule={idModule} />
                    <ListMembers users={propsHome.modules.classroom_module[0].classroom.user!} />
                </div>
            </div>

        </Container>
    )
}



export default HomeModules;
