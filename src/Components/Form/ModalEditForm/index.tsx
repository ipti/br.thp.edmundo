import { Form, Formik } from "formik";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useCallback, useContext, useRef } from "react";
import ReactQuill from "react-quill";
import { AddEditorImage } from "../../../page/activities/createActivities/service/request";
import { Question } from "../../../page/activities/type";
import { Padding } from "../../../Styles/styles";
import { EditActivitiesContext } from "../../../page/activities/editActivities/context/context";

const ModalEditForm = ({ visible, onHide }: { visible: Question, onHide(): void }) => {

    const contextEditActivities = useContext(EditActivitiesContext)

    const reactQuillRef = useRef<ReactQuill>(null);

    const uploadImage = async (file: any) => {
        const formData = new FormData();
        formData.append("file", file);
        const url = await AddEditorImage(formData).then((data: any) => {
            return data.data;
        });
        return url;
    };

    const imageHandler = useCallback(() => {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();
        input.onchange = async () => {
            if (input !== null && input.files !== null) {
                const file = input.files[0];
                const url = await uploadImage(file);

                const quill = reactQuillRef.current;
                if (quill) {
                    const range = quill.getEditorSelection();
                    range && quill.getEditor().insertEmbed(range.index, "image", url);
                }
            }
        };
    }, []);

    return (
        <Dialog visible={!!visible} onHide={onHide}>
            <Formik initialValues={{ content: visible?.content ?? "", question: visible?.options ?? [], }} onSubmit={(values) => {
                contextEditActivities?.handleQuestionUpdate({ content: values.content, id: visible.id })
            }}>
                {({ values, setFieldValue, errors, }) => {
                    return (
                        <Form>
                            <div>
                                <span>Titulo</span>
                                <Padding />
                                <ReactQuill
                                    ref={reactQuillRef}
                                    theme="snow"
                                    placeholder="Escreva aqui..."
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
                                                image: imageHandler, // <-
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
                                    value={values.content}
                                    onChange={(e: any) => {
                                        console.log(e);
                                        setFieldValue("content", e);
                                    }}
                                />
                            </div>
                            {
                                visible?.options?.map((item, key) => {
                                    return (
                                        <div>
                                        </div>
                                    )
                                })
                            }
                            <Button label="Salvar" type="submit" />
                        </Form>
                    )
                }}
            </Formik>
        </Dialog>
    )
}


export default ModalEditForm