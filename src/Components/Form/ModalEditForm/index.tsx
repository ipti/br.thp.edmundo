import { Form, Formik } from "formik";
import { Dialog } from "primereact/dialog";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import ReactQuill from "react-quill";
import { AddEditorImage } from "../../../page/activities/createActivities/service/request";
import { EditActivitiesContext } from "../../../page/activities/editActivities/context/context";
import { Question } from "../../../page/activities/type";
import { Column, Padding, Row } from "../../../Styles/styles";
import ButtonComponent from "../../Button";
import CheckboxComponent from "../../Checkbox";
import RadioButtonComponent from "../../RadioButton";
import TextInput from "../../TextInput";

const ModalEditForm = ({
  visible,
  onHide,
}: {
  visible: Question;
  onHide(): void;
}) => {
  const contextEditActivities = useContext(EditActivitiesContext);

  const reactQuillRef = useRef<ReactQuill>(null);

  const uploadImage = async (file: any) => {
    const formData = new FormData();
    formData.append("file", file);
    const url = await AddEditorImage(formData).then((data: any) => {
      return data.data;
    });
    return url;
  };
  const [options, setOptions] = useState<any[]>([]);
  useEffect(() => {
    setOptions(
      visible?.options?.map((item) => {
        return {
          id: item.id,
          content: item.content,
          questionId: item.questionId,
          response_question: visible.response_question.find(
            (res) => res.option_fk === item.id
          )
            ? true
            : false,
        };
      })
    );
  }, [visible]);

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
    <Dialog visible={!!visible} onHide={onHide} header="Editar questão">
      <Formik
        initialValues={{
          content: visible?.content ?? "",
          question: visible?.options ?? [],
        }}
        onSubmit={(values) => {
          contextEditActivities?.handleQuestionUpdate({
            content: values.content,
            id: visible.id,
            options: options,
          });
          onHide();
        }}
      >
        {({ values, setFieldValue, errors }) => {
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
                    setFieldValue("content", e);
                  }}
                />
              </div>
              <Padding />
              <label>Opções</label>
              <Padding />
              {options?.map((item, key) => {
                return (
                  <Padding padding="8px 0">
                    {visible.type === "SELECTION_BOX" && (
                      <Row key={key}>
                        <Column id="center">
                          <CheckboxComponent
                            value={item?.response_question}
                            checked={item?.response_question === true}
                            onChange={() => {
                              const newForm = [...options];
                              newForm[key].response_question =
                                !newForm[key].response_question;

                              setOptions(newForm);
                            }}
                          />
                        </Column>
                        <Padding padding="4px" />
                        <Row id="space-between" style={{ width: "100%" }}>
                          <ControllerInput
                            item={item}
                            index={key}
                            options={options}
                            setOptions={setOptions}
                          />
                          <Padding padding="4px" />
                          <Column id="center">
                            {/* <i className="pi pi-trash" style={{ cursor: "pointer" }} onClick={() => props.deleteOptions(index, indexRadioButton, form, setform)} /> */}
                          </Column>
                        </Row>
                      </Row>
                    )}
                    {visible.type === "MULTIPLE_CHOICE" && (
                      <Row key={key}>
                        <Column id="center">
                          <RadioButtonComponent
                            value={item?.response_question}
                            checked={item?.response_question === true}
                            onChange={(e) => {

                              const newForm = [...options];
                              newForm[key].response_question =
                                !newForm[key].response_question;

                              for (const i of newForm) {
                                if (newForm[key].id !== i.id) {
                                  i.response_question = false;
                                }
                              }

                              setOptions(newForm);
                            }}
                          />
                        </Column>
                        <Padding padding="4px" />
                        <Row id="space-between" style={{ width: "100%" }}>
                          <ControllerInput
                            item={item}
                            index={key}
                            options={options}
                            setOptions={setOptions}
                          />
                          <Padding padding="4px" />
                          <Column id="center">
                            {/* <i className="pi pi-trash" style={{ cursor: "pointer" }} onClick={() => props.deleteOptions(index, indexRadioButton, form, setform)} /> */}
                          </Column>
                        </Row>
                      </Row>
                    )}
                  </Padding>
                );
              })}
              <Padding padding="8px" />
              <Column>
                <Row id="end">
                  <ButtonComponent label="Salvar" type="submit" />
                </Row>
              </Column>
            </Form>
          );
        }}
      </Formik>
    </Dialog>
  );
};

export default ModalEditForm;

interface ControllerInputProps {
  item: any;
  index: number;
  options: any[];
  setOptions: Dispatch<SetStateAction<any[]>>;
}

const ControllerInput = ({
  index,
  options,
  setOptions,
  item,
}: ControllerInputProps) => {
  const [label, setlabel] = useState("");

  useEffect(() => {
    setlabel(item?.content);
  }, [item?.content]);

  return (
    <div className="w-full">
      <TextInput
        value={label}
        onBlur={() => {
          const newForm = [...options];
          newForm[index].content = label;

          setOptions(newForm);
        }}
        onChange={(e) => setlabel(e.target.value)}
      />
    </div>
  );
};
