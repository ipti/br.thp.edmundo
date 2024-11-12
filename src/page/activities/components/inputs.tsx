import { Chip } from "primereact/chip"
import { InputTextarea } from "primereact/inputtextarea"
import { MultiSelect } from "primereact/multiselect"
import { useCallback, useRef } from "react"
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import DropdownComponent from "../../../Components/Dropdown"
import InputNumberComponent from "../../../Components/InputNumber"
import TextInput from "../../../Components/TextInput"
import { difficult, type_activities } from "../../../Controller/controllerGlobal"
import { Padding, Row } from "../../../Styles/styles"
import { AddEditorImage } from "../createActivities/service/request"


const Inputs = ({ errors, handleChange, touched, values, setFieldValue, isCreated, tags, setTags, tagsAll }: { tagsAll: any, errors: any, values: any, touched: any, handleChange: any, setFieldValue: any, isCreated?: boolean, tags: any, setTags: any }) => {
    const reactQuillRef = useRef<ReactQuill>(null);

    const uploadImage = async (file: any) => {
        const formData = new FormData()
        console.log(file)
        formData.append("file", file);
        const url =
            await AddEditorImage(formData).then((data: any) => {
                return data.data
            })
        return url
    }

    console.log(values)

    const imageHandler = useCallback(() => {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();
        input.onchange = async () => {
            if (input !== null && input.files !== null) {
                const file = input.files[0];
                const url = await uploadImage(file)

                const quill = reactQuillRef.current;
                if (quill) {
                    const range = quill.getEditorSelection();
                    range && quill.getEditor().insertEmbed(range.index, "image", url);
                }
            }
        };
    }, []);

    return (
        <div className="grid">
            <div className="col-12 md:col-6">
                <label>Nome</label>
                <Padding />
                <TextInput
                    value={values.name}
                    placeholder="Nome"
                    onChange={handleChange}
                    name="name"
                />
                {errors.name && touched.name ? (
                    <div style={{ color: "red", marginTop: "8px" }}>
                        {errors.name}
                    </div>
                ) : null}
            </div>

            <div className="col-12 md:col-6">
                <label>Tipo de atividade </label>
                <Padding />
                <DropdownComponent
                    value={values.type_activities}
                    disabled={!isCreated}
                    options={type_activities}
                    optionsValue="id"
                    optionsLabel="name"
                    placerholder="Escolha o tipo de atividade"
                    onChange={e => setFieldValue("type_activities", e.target.value)}
                    name="type_activities"
                />
                {errors.type_activities && touched.type_activities ? (
                    <div style={{ color: "red", marginTop: "8px" }}>
                        {errors.type_activities.id}
                    </div>
                ) : null}
            </div>
            <div className="col-12 md:col-6">
                <label>Nivel de dificuldade </label>
                <Padding />
                <DropdownComponent
                    value={values.difficult}
                    options={difficult}
                    optionsValue="id"
                    optionsLabel="name"
                    placerholder="Escolha o nivel de dificuldade"
                    onChange={e => setFieldValue("difficult", e.target.value)}
                    name="difficult"
                />
                {errors.difficult && touched.difficult ? (
                    <div style={{ color: "red", marginTop: "8px" }}>
                        {errors.difficult.id}
                    </div>
                ) : null}
            </div>
            <div className="col-12 md:col-6">
                <label>Duração da atividades (minutos) </label>
                <Padding />
                <InputNumberComponent
                    value={values.time_activities!}
                    placeholder="Escreva a duração da atividade"
                    onChange={handleChange}
                    name="time_activities"
                />
                {errors.time_activities && touched.time_activities ? (
                    <div style={{ color: "red", marginTop: "8px" }}>
                        {errors.time_activities}
                    </div>
                ) : null}
            </div>
            <div className="col-12 md:col-6">
                <label>Descrição</label>
                <Padding />
                <ReactQuill
                    ref={reactQuillRef}
                    theme="snow"
                    placeholder="Start writing..."
                    modules={{
                        toolbar: {
                            container: [
                                [{ header: "1" }, { header: "2" }, { font: [] }],
                                [{ size: [] }],
                                ["bold", "italic", "underline", "strike", "blockquote"],
                                [
                                    { list: "ordered" },
                                    { list: "bullet" },
                                    { indent: "-1" },
                                    { indent: "+1" },
                                ],
                                ["link", "image"],
                                ["code-block"],
                                ["clean"],
                            ],
                            handlers: {
                                image: imageHandler,   // <- 
                            },
                        },
                        clipboard: {
                            matchVisual: false,
                        },
                    }}
                    formats={[
                        "header",
                        "font",
                        "size",
                        "bold",
                        "italic",
                        "underline",
                        "strike",
                        "blockquote",
                        "list",
                        "bullet",
                        "indent",
                        "link",
                        "image",
                        "code-block",
                    ]}
                    value={values.description}
                    onChange={(e: any) => {
                        console.log(e);
                        setFieldValue("description", e)
                    }}
                />
                {/* <Editor 
                
                modules={{
                    toolbar: {
                        container: [
                            [{ header: "1" }, { header: "2" }, { font: [] }],
                            [{ size: [] }],
                            ["bold", "italic", "underline", "strike", "blockquote"],
                            [
                                { list: "ordered" },
                                { list: "bullet" },
                                { indent: "-1" },
                                { indent: "+1" },
                            ],
                            ["link", "image", "video"],
                            ["code-block"],
                            ["clean"],
                        ],
                    },
                    handlers: {
                        image: imageHandler,   // <- 
                      },
                    clipboard: {
                        matchVisual: false,
                    },
                }}  onTextChange={(e) => setFieldValue("description", e.htmlValue)} style={{ height: '320px' }} /> */}
                {/* <TextAreaComponent
                                    value={values.description}
                                    placeholder="Escreva a descrição da atividades"
                                    onChange={handleChange}
                                    name="description"
                                /> */}
                {errors.description && touched.description ? (
                    <div style={{ color: "red", marginTop: "8px" }}>
                        {errors.description}
                    </div>
                ) : null}
            </div>

            {!isCreated && <div className="col-12 md:col-6">
                <label>Tags </label>
                <Padding />
                <MultiSelect value={tags} onChange={(e) => { setTags(e.value); }} options={tagsAll} optionLabel="content"
                    placeholder="Tags" maxSelectedLabels={3} className="w-full" />
                <Padding padding="16px" />
                <Row className="grid" style={{ gap: "8px" }}>
                    {tags?.map((item: any) => {
                        return (
                            <Chip label={item.content} />
                        )
                    })}
                </Row>
            </div>}
            {values?.type_activities?.id === "CODE" && <div className="col-12 md:col-6">
                <label>Resposta esperada</label>
                <Padding />
                <InputTextarea
                    style={{ width: "100%", height: "128px" }}
                    autoResize
                    rows={5}
                    value={values.expected_return}
                    placeholder="Escreva a resposta esperada pela atividade"
                    onChange={handleChange}
                    name="expected_return"
                />
                {errors.expected_return && touched.expected_return ? (
                    <div style={{ color: "red", marginTop: "8px" }}>
                        {errors.expected_return}
                    </div>
                ) : null}
            </div>}
        </div>
    )
}

export default Inputs