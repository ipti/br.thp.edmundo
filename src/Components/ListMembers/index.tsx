import { Avatar } from "primereact/avatar"
import { UserArray } from "../../page/home/type"
import { Column, Padding, Row } from "../../Styles/styles"
import avatar from "../../assets/image/avatar.svg"
import { Divider } from "primereact/divider"
import { useNavigate } from "react-router-dom"
import { UserStyled } from "./style"


const ListMembers = ({ users }: { users: UserArray }) => {

    const history = useNavigate()
    return (
        <div className="card" style={{ maxHeight: 512, overflowY: "auto", background: "transparent" }}>
            <Row id="center">
                <h2>
                    Alunos da turma
                </h2>
            </Row>
            <Divider />
            <Padding />
            <Column style={{gap: 16}}>
            {users?.map((item) => {
                return (
                    <UserStyled onClick={() => { history("/perfil/visualizar?id=" + item.usersId) }} style={{ gap: 8, cursor: "pointer" }}>
                        <Avatar size="large" shape="circle" image={item.users.registration[0].avatar_url ?? avatar} />
                        <Column id="center">
                            <h3>
                                {item.users.name}
                            </h3>
                        </Column>
                    </UserStyled>
                )
            })}
            </Column>
        </div>
    )
}

export default ListMembers