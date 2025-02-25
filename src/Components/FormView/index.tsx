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
      <Column style={{ gap: 32 }}>
        {form?.answer_form![0]?.answer_question?.map(
          (item: any, key: number) => {
            return (
              <Padding padding="0" key={key}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.question.content,
                  }}
                />
                {/* <p>{item.question.content}</p> */}
                <Padding padding="8px" />
                {item.question.type === "MULTIPLE_CHOICE" && (
                  <RenderRadioButtonCard question={item} />
                )}
                {item.question.type === "SELECTION_BOX" && (
                  <RenderCheckBoxCard question={item} />
                )}
              </Padding>
            );
          }
        )}
      </Column>
    </div>
  );
};

export default FormViewComponent;
