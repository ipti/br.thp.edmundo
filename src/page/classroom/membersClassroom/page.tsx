import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { useContext, useState } from "react";
import { ROLE } from "../../../Controller/controllerGlobal";
import CardRegistration from "../../../Components/Card/CardRegistration";
import ContentPage from "../../../Components/ContentPage";
import Empty from "../../../Components/Empty";
import { Padding, Row } from "../../../Styles/styles";
import { AplicationContext } from "../../../context/context";
import { PropsAplicationContext } from "../../../context/type";
import MembersClassroomProvider, { MembersClassroomContext } from "./context/context";
import { MembersClassroomContextType } from "./context/types";


const MembersClassroom = () => {
    return (
        <MembersClassroomProvider>
            <MembersClassroomPage />
        </MembersClassroomProvider>
    )
}

const MembersClassroomPage = () => {

    const props = useContext(MembersClassroomContext) as MembersClassroomContextType
    const propsAplication = useContext(AplicationContext) as PropsAplicationContext
    const [filter, setFilter] = useState("");
    const canRemoveMembers = propsAplication.user?.role !== ROLE.STUDENT

    const search = () => {
        if (filter !== "") {
            const buscaLowerCase = filter.toLowerCase();
            return props.classroomMembersList?.classroom?.user?.filter((props) =>
                props?.users?.name?.toLowerCase().includes(buscaLowerCase)
            );
        }
        return props.classroomMembersList?.classroom.user;
    };


    return (
        <ContentPage title={"Membros " + props.classroomMembersList?.classroom?.name} description="Visualize os membros da sua turma">
            <Row id="end">
                <IconField iconPosition="left">
                    <InputIcon className="pi pi-search" />
                    <InputText
                        placeholder="Pesquise pelo nome"
                        onChange={(e) => {
                            setFilter(e.target.value);
                        }}
                        value={filter}
                    />
                </IconField>
            </Row>
            <Padding padding="8px" />
            <div
                style={{
                    background: "#fff4d6",
                    border: "1px solid #f7cf6e",
                    borderRadius: 8,
                    padding: 12,
                    color: "#5f5b5b",
                    fontWeight: 600,
                }}
            >
                Atenção no login dos usuários importados: nome de usuário = CPF e senha = data de nascimento no formato DDMMYYYY (dia, mês e ano).
            </div>
            <Padding padding="16px" />
            {props.classroomMembersList?.classroom?.user?.length! > 0 ? (
                <div className="grid">
                    {search()?.map((item, index) => {

                        return (
                            <div className="col-12 md:col-6 lg:col-4" key={index}>
                                <CardRegistration
                                    title={item?.usersId?.toString()}
                                    subtitle={item?.users?.name}
                                    username={item?.users?.email}
                                    idRegistration={item?.id}
                                    status={item?.users?.role}
                                    userId={item.usersId}
                                    url_avatar={item?.users?.registration[0]?.avatar_url }
                                    onRemove={
                                        canRemoveMembers
                                            ? () => props.handleRemoveMember(item.usersId)
                                            : undefined
                                    }
                                    isLoadingRemove={props.isLoadingRemoveMember}
                                />
                            </div>
                        );
                    })}
                </div>
            ) : (
                <Empty title="Matriculas" />
            )}
        </ContentPage>
    )
}

export default MembersClassroom;
