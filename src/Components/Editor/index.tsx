import ReactQuill from "react-quill";
import { AddEditorImage } from "../../page/activities/createActivities/service/request";
import { CSSProperties, useCallback, useRef } from "react";

const Editor = ({
  onChange,
  values,
  onBlur,
  style
}: {
  values: string;
  onChange?(any: any): void;
  onBlur?(any: any): void;
  style?: CSSProperties | undefined
}) => {
  const reactQuillRef = useRef<ReactQuill>(null);

  const uploadImage = async (file: any) => {
    const formData = new FormData();
    formData.append("file", file);
    const url = await AddEditorImage(formData).then((data: any) => {
      return data.data;
    });
    return url;
  };

  // SetImagemUrl Editor
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
    <>
      <ReactQuill
        ref={reactQuillRef}
        theme="snow"
        placeholder="Escreva aqui..."
        style={style}
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
        value={values}
        onChange={onChange}
        onBlur={onBlur}
      />
    </>
  );
};

export default Editor;
