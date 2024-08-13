import { useContext, useState } from "react";
import MembersClassroomProvider, { MembersClassroomContext } from "./context/context";
import { MembersClassroomContextType } from "./context/types";
import ContentPage from "../../../Components/ContentPage";
import { InputText } from "primereact/inputtext";
import { Padding, Row } from "../../../Styles/styles";
import CardRegistration from "../../../Components/Card/CardRegistration";
import Empty from "../../../Components/Empty";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";


const MembersClassroom = () => {
    return (
        <MembersClassroomProvider>
            <MembersClassroomPage />
        </MembersClassroomProvider>
    )
}

const MembersClassroomPage = () => {

    const props = useContext(MembersClassroomContext) as MembersClassroomContextType
    const [filter, setFilter] = useState("");

    const search = () => {
        if (filter !== "") {
            const buscaLowerCase = filter.toLowerCase();
            return props.classroomMembersList?.classroom?.user?.filter((props) =>
                props?.users?.name?.toLowerCase().includes(buscaLowerCase)
            );
        }
        return props.classroomMembersList?.classroom.user;
    };


    console.log(props.classroomMembersList)
    return (
        <ContentPage title={"Membros " + props.classroomMembersList?.classroom?.name} description="Visualize os membros da sua turma">
            <Row id="end">
                <IconField iconPosition="left">
                    <InputIcon  className="pi pi-search" />
                    <InputText
                        placeholder="Pesquise pelo nome"
                        onChange={(e) => {
                            setFilter(e.target.value);
                        }}
                        value={filter}
                    />
                </IconField>
            </Row>
            <Padding padding="16px" />
            {props.classroomMembersList?.classroom?.user?.length! > 0 ? (
                <div className="grid">
                    {search()?.map((item, index) => {
                        return (
                            <div className="col-12 md:col-6 lg:col-4" key={index}>
                                <CardRegistration
                                    title={item?.usersId?.toString()}
                                    subtitle={item?.users?.name}
                                    idRegistration={item?.id}
                                    status={item?.users?.role}
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