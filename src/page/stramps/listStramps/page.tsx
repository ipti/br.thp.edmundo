import { DataTable } from "primereact/datatable"
import ContentPage from "../../../Components/ContentPage"
import { Column } from "primereact/column"
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import ListStampsProvider, { ListStampsContext } from "./context/context";
import { useContext } from "react";
import Stamp from "../../../Components/Stamp";
import { Row } from "../../../Styles/styles";

const StampsList = () => {
    return (
        <ListStampsProvider>
            <StampsListPage />
        </ListStampsProvider>
    )
}

const StampsListPage = () => {

    const history = useNavigate()

    const propsListStamps = useContext(ListStampsContext)

    const ActionsUserBody = (rowData: any) => {
        return (
            <Row id="center">
                <Button
                    icon="pi pi-pencil"
                    rounded
                    className="mr-2"
                    onClick={() => {
                        history("/selos/" + rowData.id)
                    }}
                />
                {/* <Button
                    severity="danger"
                    rounded
                    icon={"pi pi-trash"}
                    onClick={() => {

                    }}
                /> */}
            </Row>
        );
    };

    const renderHeader = () => {
        return (
            <div
                className="flex justify-content-between"
            // style={{ background: color.colorCard }}
            >
                <Button label="Criar selos" icon="pi pi-plus" onClick={() => { history("criar") }} />
                {/* <div>
                    <DropdownComponent optionsLabel="name" value={""} onChange={(e) => { }} optionsValue="id" placerholder="Filtrar tipo de usuário" options={propsAplication.user?.role === ROLE.ADMIN

                        ? [
                            { id: "TODOS", name: "Todos" },
                            { id: ROLE.ADMIN, name: "Admin" },
                            { id: ROLE.STUDENT, name: "Estudante" },
                            { id: ROLE.TEACHER, name: "Professor" },
                        ]
                        : [
                            { id: "TODOS", name: "Todos" },
                            { id: ROLE.STUDENT, name: "Estudante" },
                            { id: ROLE.TEACHER, name: "Professor" },
                        ]
                    } />
                </div> */}

            </div>
        );
    };

    return (
        <ContentPage title="Selos" description="Gerencie os selos.">
            <div>
                <DataTable value={propsListStamps?.stamps} header={renderHeader} paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: "50rem" }}>
                    <Column body={(body) => <Stamp url={body?.img_url} />} header="Selo"></Column>
                    <Column field="name" header="Nome"></Column>
                    <Column field="description" header="Descrição"></Column>
                    <Column field="actions" align={"center"} body={ActionsUserBody} header="Ações"></Column>
                </DataTable>
            </div>
        </ContentPage>
    )
}

export default StampsList