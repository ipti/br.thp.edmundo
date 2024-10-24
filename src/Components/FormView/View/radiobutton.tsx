
import { RadioButton } from "primereact/radiobutton";
import { Column } from "../../../Styles/styles";
import { AnswerQuestion, Option } from "../../../page/classroom/correctionOfActivitiesClassroom/service/types";



export default function RenderRadioButtonCard({ question }: { question: AnswerQuestion, errors?: any,}) {


    return (
        <div className="card flex justify-content-start">
            <div className="flex flex-column gap-3">
                {question?.question.options?.map((category: Option, key: number) => {
                    return (
                        <div key={key} className="flex align-items-start">
                            <RadioButton name="category" value={category.id} checked={category.id === question.answer_option.find(props => props.options_fk === category.id)?.options_fk} />
                            <Column id="center">
                                <p style={{ fontSize: 16, marginLeft: 8 }}>{category.content}</p>
                            </Column>
                        </div>
                    );
                })}
                {question?.question?.response_question && <>
                {question?.question?.response_question?.find(props => question?.answer_option![0]?.options_fk === props?.option_fk) ? <div style={{color: "green"}}>Resposta correta!</div> : <div style={{color: "red"}}>Resposta incorreta!</div>}
                </>}
            </div>
        </div>
    );
}
