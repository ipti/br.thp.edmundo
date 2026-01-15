import { Divider } from "primereact/divider"
import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { HomeModulesContext } from "../../page/homeModule/context/context"
import { Class } from "../../page/homeModule/type"
import { Column, Padding, Row } from "../../Styles/styles"
import ItemStatus from "../ItemStatus"
import { UserStyled } from "./style"
import { AplicationContext } from "../../context/context"


const ListClassroom = ({ classes, idClasses }: { classes: Class[], idClasses: number }) => {
    const propsHome = useContext(HomeModulesContext)
    const propsAplication = useContext(AplicationContext)
    const { idClassroom, idModule } = useParams()
    
    
    const history = useNavigate();
    return (
        <div className="card" style={{ maxHeight: 512, overflowY: "auto", background: "transparent" }}>
            <Row id="center">
                <h2>
                    Aulas
                </h2>
            </Row>
            <Divider />
            <Padding />
            <Column style={{gap: 16}}>
            {classes?.map((item) => {
                return (
                    <UserStyled onClick={() => { history('/turma/'+ idClassroom +'/modulo/' + idModule +'?idClasses= '+ item.id) }} isSelected={item.id === idClasses} style={{ gap: 8, cursor: "pointer" }}>
                        {/* <Avatar size="large" shape="circle" image={item.users.registration[0].avatar_url ?? avatar} /> */}
                        {/* <Column id="center">
                            <h3>
                                {item.name}
                            </h3>
                        </Column> */}
                        <ItemStatus title={item.name} isCompleted={item?.user_classes![0]?.viewed ?? false} isSelected={false} onView={() => propsHome?.handleViewdClassesUser(propsAplication?.user?.id ?? 0, item.id, Number(idClassroom))}/>
                    </UserStyled>
                )
            })}
            {classes.length === 0 && (
                <Column id="center">
                    <h3>
                        Sem aulas disponíveis
                    </h3>
                </Column>
            )}
            </Column>
        </div>
    )
}

export default ListClassroom