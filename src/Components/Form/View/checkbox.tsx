
import { FormikErrors } from "formik";
import { Checkbox } from "primereact/checkbox";
import { Column } from "../../../Styles/styles";
import { CreateResponse } from "../../../page/homeActivities/type";



export default function RenderCheckBoxCard({ question, setFieldValue, values, indexQuestion, errors }: { question: any, errors?: any, values?: CreateResponse, setFieldValue: (field: string, value: any, shouldValidate?: boolean) => Promise<void | FormikErrors<CreateResponse>>, indexQuestion: number }) {

    return (
        <div className="card flex justify-content-start">
            <div className="flex flex-column gap-3">
                {question?.options?.map((category: any, key: number) => {
                    return (
                        <div key={key} className="flex align-items-start">
                            <Checkbox name="category" value={category.id} checked={values?.question![indexQuestion]?.options.find(props => props.options_fk === category.id)?.options_fk === category.id} onChange={(e) => {
                                const updatedQuestions = [...(values?.question || [])];

                                if (!updatedQuestions[indexQuestion]) {
                                    updatedQuestions[indexQuestion] = {
                                        question_fk: question.id,
                                        options: [{ options_fk: category.id }]
                                    };
                                } else if (updatedQuestions[indexQuestion].options.find(props => props.options_fk === category.id)) {
                                    updatedQuestions[indexQuestion].options = updatedQuestions[indexQuestion].options.filter(props => props.options_fk !== category.id);
                                } else {
                                    updatedQuestions[indexQuestion].options = [...updatedQuestions[indexQuestion].options,
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
