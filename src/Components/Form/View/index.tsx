
import { RadioButton } from "primereact/radiobutton";
import { Column } from "../../../Styles/styles";
import { CreateResponse } from "../../../page/homeActivities/type";
import { FormikErrors } from "formik";



export default function RenderRadioButtonCard({ question, setFieldValue, values, indexQuestion, errors }: { question: any, errors?: any, values?: CreateResponse, setFieldValue: (field: string, value: any, shouldValidate?: boolean) => Promise<void | FormikErrors<CreateResponse>>, indexQuestion: number }) {


    return (
        <div className="card flex justify-content-start">
            <div className="flex flex-column gap-3">
                {question?.options?.map((category: any, key: number) => {
                    return (
                        <div key={key} className="flex align-items-start">
                            <RadioButton name="category" value={category.id} checked={values?.question![indexQuestion]?.options[0]?.options_fk === category.id} onChange={(e) => {
                                const updatedQuestions = [...(values?.question || [])];

                                if (!updatedQuestions[indexQuestion]) {
                                    updatedQuestions[indexQuestion] = {
                                        question_fk: question.id,
                                        options: [{ options_fk: category.id }]
                                    };
                                } else {
                                    updatedQuestions[indexQuestion].options = [
                                        { options_fk: category.id }
                                    ];
                                }

                                setFieldValue("question", updatedQuestions ?? []);
                            }} />
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
