import { FormView } from "../../page/classroom/correctionOfActivitiesClassroom/service/types";
import { CreateResponse } from "../../page/homeActivities/type";
import { Column, Padding } from "../../Styles/styles";
import RenderCheckBoxCard from "./View/checkbox";
import RenderRadioButtonCard from "./View/radiobutton";

const FormViewComponent = ({
  form,
  values,
}: {
  form: FormView;
  values?: CreateResponse;
}) => {
  return (
    <div>
      <Column style={{ gap: 16 }}>
        {form?.answer_form![0]?.answer_question?.map(
          (item: any, key: number) => {
            return (
              <div
                key={key}
                style={{
                  border: "1px solid #D9E3F0",
                  borderRadius: 12,
                  background: "#FFFFFF",
                  padding: 12,
                }}
              >
                <Column style={{ gap: 8 }}>
                <span
                  style={{
                    minWidth: 24,
                    height: 24,
                    borderRadius: 999,
                    background: "#EFF4FF",
                    color: "#2458D3",
                    fontSize: 12,
                    fontWeight: 700,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {key + 1}
                </span>
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.question.content,
                  }}
                />
                </Column>
                {/* <p>{item.question.content}</p> */}
                <Padding padding="4px" />
                {item.question.type === "MULTIPLE_CHOICE" && (
                  <RenderRadioButtonCard question={item} />
                )}
                {item.question.type === "SELECTION_BOX" && (
                  <RenderCheckBoxCard question={item} />
                )}
              </div>
            );
          }
        )}
      </Column>
    </div>
  );
};

export default FormViewComponent;
