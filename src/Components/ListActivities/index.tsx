import { Divider } from "primereact/divider"
import { useNavigate } from "react-router-dom"
import { Activity } from "../../page/homeModule/type"
import { Column, Padding, Row } from "../../Styles/styles"
import ItemStatus from "../ItemStatus"
import { UserStyled } from "./style"


const ListActivities = ({ activities, idClassroom, idModule }: { activities: Activity[] | undefined, idClassroom?: string, idModule?: string }) => {

    const history = useNavigate()
    return (
        <div className="card" style={{ maxHeight: 512, overflowY: "auto", background: "transparent" }}>
            <Row id="center">
                <h2>
                    Atividades da aula
                </h2>
            </Row>
            <Divider />
            <Padding />
            <Column style={{gap: 16}}>
            {(activities?.length === 0 || !activities) && (
                <h3>Nenhuma atividade disponível para esta aula.</h3>
            )}
            {activities?.map((item) => {
                return (
                    <UserStyled onClick={() => { history("/turma/" + idClassroom + "/modulo/" + idModule + "/atividade/" + item.id)}} style={{ gap: 8, cursor: "pointer" }}>
                        {/* <Avatar size="large" shape="circle" image={item.users.registration[0].avatar_url ?? avatar} /> */}
                        {/* <Column id="center">
                            <h3>
                                {item.name}
                            </h3>
                        </Column> */}
                        <ItemStatus title={item.name} isCompleted={item?.user_activities[0]?.status === 'COMPLETED'} isSelected={false} type="activities" />
                    </UserStyled>
                )
            })}
            </Column>
        </div>
    )
}

export default ListActivities