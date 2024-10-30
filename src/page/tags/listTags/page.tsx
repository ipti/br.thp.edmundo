import { DataTable } from "primereact/datatable";
import ContentPage from "../../../Components/ContentPage";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { useContext, useState } from "react";
import ModalInputs from "./modalInputs";
import TagsProvider, { TagsContext } from "./context/context";
import { Row } from "../../../Styles/styles";
import { ConfirmDialog } from "primereact/confirmdialog";

const TagList = () => {
    return (
        <TagsProvider>
            <TagListPage />
        </TagsProvider>
    )
}


const TagListPage = () => {

    const [visible, setVisible] = useState<any>()
    const [visibleDelete, setVisibleDelete] = useState<any>()


    const propsTags = useContext(TagsContext)

    const renderHeader = () => {
        return (
            <div
                className="flex justify-content-between"
            // style={{ background: color.colorCard }}
            >
                <Button label="Criar tag" icon="pi pi-plus" onClick={() => { setVisible(true) }} />

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

    const ActionsUserBody = (rowData: any) => {
        return (
            <Row id="center">
                <Button
                    icon="pi pi-pencil"
                    rounded
                    className="mr-2"
                    onClick={() => {
                        setVisible(rowData)
                    }}
                />
                <Button
                    severity="danger"
                    rounded
                    icon={"pi pi-trash"}
                    onClick={() => {
                        setVisibleDelete(rowData);
                    }}
                />
            </Row>
        );
    };
    return (
        <ContentPage title="Tags" description="Gerencie as Tags do sistema">
            <DataTable value={propsTags?.tags} header={renderHeader} paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: "50rem" }}>
                <Column field="content" align={"center"} header="Nome"></Column>
                <Column field="type" align={"center"} header="Tipo da Tag"></Column>
                <Column field="actions" align={"center"} body={ActionsUserBody} header="Ações"></Column>

            </DataTable>

            <ModalInputs setOpen={setVisible} visible={visible} />
            <ConfirmDialog
                visible={visibleDelete}
                onHide={() => setVisibleDelete(false)}
                message="Tem certeza de que deseja prosseguir?"
                header="Confirmation"
                icon="pi pi-exclamation-triangle"
                accept={() => { propsTags?.DeleteTags(visibleDelete.id) }}
                reject={() => setVisibleDelete(false)}
            />
        </ContentPage>
    )
}

export default TagList;