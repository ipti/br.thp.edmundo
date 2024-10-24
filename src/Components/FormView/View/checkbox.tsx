
import { Checkbox } from "primereact/checkbox";
import { Column } from "../../../Styles/styles";
import { AnswerQuestion } from "../../../page/classroom/correctionOfActivitiesClassroom/service/types";



export default function RenderCheckBoxCard({ question,  }: { question: AnswerQuestion, errors?: any,}) {

    return (
        <div className="card flex justify-content-start">
            <div className="flex flex-column gap-3">
                {question?.question?.options.map((category: any, key: number) => {
                    return (
                        <div key={key} className="flex align-items-start">
                            <Checkbox name="category" value={category.id}  checked={category.id === question.answer_option.find(props => props.options_fk === category.id)?.options_fk} />
                            <Column id="center">
                                <p style={{ fontSize: 16, marginLeft: 8 }}>{category.content}</p>
                            </Column>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
