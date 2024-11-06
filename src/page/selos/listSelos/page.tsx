import { DataTable } from "primereact/datatable"
import ContentPage from "../../../Components/ContentPage"
import { Column } from "primereact/column"
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

const SelosList = () => {

    const history = useNavigate()

    const renderHeader = () => {
        return (
            <div
                className="flex justify-content-between"
            // style={{ background: color.colorCard }}
            >
                <Button label="Criar selo" icon="pi pi-plus" onClick={() => { history("criar") }} />
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
                <DataTable value={[]} header={renderHeader} paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: "50rem" }}>
                    <Column field="name" header="Nome"></Column>
                    <Column field="email" header="Usuário"></Column>
                </DataTable>
            </div>
        </ContentPage>
    )
}

export default SelosList