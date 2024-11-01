import { Form, Formik } from "formik"
import { Dialog } from "primereact/dialog"
import { Column, Padding, Row } from "../../../../Styles/styles"
import TextInput from "../../../../Components/TextInput"
import DropdownComponent from "../../../../Components/Dropdown"
import { type_tags } from "../../../../Controller/controllerGlobal"
import { Button } from "primereact/button"
import { useContext } from "react"
import { TagsContext } from "../context/context"

const ModalInputs = ({ visible, setOpen }: { visible: any, setOpen: any }) => {

    const props = useContext(TagsContext)

    const initialValue: { content: string, type: any } = { content: visible?.content ?? "", type: type_tags.find(props => props.id === visible?.type) ?? undefined, }
    return (
        <Dialog visible={visible} header={visible?.id ? "Editar tag" : "Criar tag"} style={{ width: "50%" }} onHide={() => setOpen(!visible)}>
            <Formik initialValues={initialValue} onSubmit={(values) => {
                if (visible?.id) {
                    props?.UploadTags({ ...values, type: values.type?.id }, visible.id)
                } else { props?.CreateTags({ ...values, type: values.type?.id }); }
                setOpen(!visible)
            }}>
                {({ values, handleChange, errors, touched, setFieldValue }) => {
                    return (
                        <Form>
                            <div className="grid">
                                <div className="col-12 md:col-6">
                                    <label>Nome</label>
                                    <Padding />
                                    <TextInput
                                        value={values.content}
                                        placeholder="Nome"
                                        onChange={handleChange}
                                        name="content"
                                    />
                                    {errors.content && touched.content ? (
                                        <div style={{ color: "red", marginTop: "8px" }}>
                                            {errors.content}
                                        </div>
                                    ) : null}
                                </div>
                                <div className="col-12 md:col-6">
                                    <label>Tipo de Tag *</label>
                                    <Padding />
                                    <DropdownComponent
                                        name="type"
                                        placerholder="Tipo de Tag"
                                        optionsLabel="name"
                                        optionsValue="id"
                                        value={values.type}
                                        onChange={(e) => {
                                            setFieldValue("type", e.value)
                                        }}
                                        options={
                                            type_tags
                                        }
                                    />
                                    <Padding />
                                    {errors.type && touched.type ? (
                                        <div style={{ color: "red" }}>
                                            {errors.type.toString()}
                                            <Padding />
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            <Padding padding="16px" />
                            <Column>
                                <Row id="end">
                                    <Button label={visible.id ? "Salvar" : "Criar"} icon={visible.id ? "pi pi-save" : "pi pi-plus"} />
                                </Row>
                            </Column>
                        </Form>
                    )
                }}
            </Formik>
        </Dialog>
    )
}

export default ModalInputs