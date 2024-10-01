import { Button } from "primereact/button"
import { Column } from "primereact/column"
import { ConfirmDialog } from "primereact/confirmdialog"
import { DataTable } from "primereact/datatable"
import { ProgressSpinner } from "primereact/progressspinner"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import ContentPage from "../../../Components/ContentPage"
import { ROLE } from "../../../Controller/controllerGlobal"
import { Padding, Row } from "../../../Styles/styles"
import ListUserProvider, { ListUserContext } from "./context/context"
import { ListUserContextType } from "./context/types"

const UserList = () => {
    return (
        <ListUserProvider>

            <UserListPage />
        </ListUserProvider>
    )

}

const UserListPage = () => {

    const props = useContext(ListUserContext) as ListUserContextType;
    const history = useNavigate();
    // const propsAplication = useContext(AplicationContext) as PropsAplicationContext;

    const [visible, setVisible] = useState<any>(false);


    const typeUserBody = (rowData: any) => {
        return (
            <p>
                {rowData.role === ROLE.ADMIN
                    ? "Admin"
                    : rowData.role === ROLE.STUDENT
                        ? "Estudante"
                        : rowData.role === ROLE.TEACHER
                            ? "Professor"
                            : null}
            </p>
        );
    };

    const ActiveUserBody = (rowData: any) => {
        return <p>{rowData.active ? "Ativo" : "Desativado"}</p>;
    };

    const ActionsUserBody = (rowData: any) => {
        return (
            <Row>
                {/* <Button
                    icon="pi pi-pencil"
                    rounded
                    className="mr-2"
                    onClick={() => {
                        history("/users/" + rowData.id);
                    }}
                /> */}
                <Button
                    severity="danger"
                    rounded
                    icon={"pi pi-trash"}
                    onClick={() => {
                        setVisible(rowData);
                    }}
                />
            </Row>
        );
    };

    if (props.isLoading) return <ProgressSpinner />;

    const renderHeader = () => {
        return (
            <div
                className="flex justify-content-between"
            // style={{ background: color.colorCard }}
            >
                <Button label="Criar usuário" icon="pi pi-plus" onClick={() => history("/usuarios/criar")} />

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
        <>
            <ContentPage title="Usuários" description="Lista usuários do MeuBen.">
                <Padding padding="16px" />
                <DataTable value={props.users} header={renderHeader} paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: "50rem" }}>
                    <Column field="name" header="Nome"></Column>
                    <Column field="email" header="Usuário"></Column>
                    <Column field="role" body={typeUserBody} header="Tipo"></Column>
                    <Column field="active" body={ActiveUserBody} header="Ativo"></Column>
                    <Column field="actions" body={ActionsUserBody} header="Ações"></Column>

                </DataTable>
            </ContentPage>
            <ConfirmDialog
                visible={visible}
                onHide={() => setVisible(false)}
                message="Tem certeza de que deseja prosseguir?"
                header="Confirmation"
                icon="pi pi-exclamation-triangle"
                accept={() => { props.DeleteUser(visible.id) }}
                reject={() => setVisible(false)}
            />
        </>
    );


}

export default UserList;