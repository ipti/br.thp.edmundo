import { Chip } from "primereact/chip"
import { useContext } from "react"
import styled from "styled-components"
import ContentPage from "../../Components/ContentPage"
import Stamp from "../../Components/Stamp"
import { StampComponentStyle } from "../../Components/Stamp/style"
import { useQuery } from "../../Controller/controllerGlobal"
import styles from "../../Styles"
import color from "../../Styles/colors"
import { Column, Padding, Row } from "../../Styles/styles"
import avatar from "../../assets/image/avatar.svg"
import UpdateUserProvider, { UpdateUserContext } from "./context/context"
import { UpdateUserContextType } from "./context/types"

const Avatar = styled.div`
  border: 1px solid ${styles.colors.colorBorderCard};
  height: 128px;
  width: 128px;
  border-radius: 50%;
  
  img {
    border-radius: 50%; /* This will make the image circular */
    height: 100%;
    width: 100%;
  }
`;

const ViewdProfile = () => {
    return (
        <UpdateUserProvider>
            <ProfilePage />
        </UpdateUserProvider>
    )
}

const ProfilePage = () => {

    const props = useContext(UpdateUserContext) as UpdateUserContextType

    const query = useQuery()

    const id = query.get("id")

    return (
        <ContentPage title={id ? "" : "Perfil"} description={id ? "" : "Visualize ou edite os dados do seu perfil."}>
            <Row style={{ gap: 16 }}>

                <Avatar>
                    <img alt="" src={props.file ? (URL.createObjectURL(props.file![0]) ?? undefined) : props.user?.registration![0]?.avatar_url ? props.user?.registration![0]?.avatar_url : avatar} />
                </Avatar>
                <Column id="center">
                    <h2>{props.user?.name}</h2>
                </Column>
            </Row>

            <Padding padding="16px" />
            <div className="grid gap-4">
                {props.user?.stamps_user.map((item) => {
                    return (
                        <StampComponentStyle>
                            <Stamp url={item?.stamps.img_url} description={item?.stamps?.description} type={item?.stamps?.type} />
                            <Row id="center">
                                <p style={{ color: color.colorPrimary }}>{item.stamps.name}</p>
                            </Row>
                        </StampComponentStyle>
                    )
                })}
            </div>
            <Padding padding="16px" />
            <div className="grid gap-2">

                {props.user?.tags_users.map((item) => {
                    return (
                        <Chip style={{ background: color.colorBlueClean, color: "black" }} label={"#" + item.tag.content} />
                    )
                })}
            </div>
            <Padding padding="16px" />
            <div className="grid">

                <div className="card p-4 col-12 md:col-6" >
                    <p>
                        {props.user?.registration[0].description}
                    </p>
                </div>
            </div>

        </ContentPage>
    )
}

export default ViewdProfile