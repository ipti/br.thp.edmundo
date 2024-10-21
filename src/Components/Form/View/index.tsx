
import { RadioButton } from "primereact/radiobutton";
import { Column } from "../../../Styles/styles";
import { Question } from "../../../Types/types";



export default function RenderRadioButtonCard({question}: {question: any}) {

    console.log(question)
    

    return (
        <div className="card flex justify-content-start">
            <div className="flex flex-column gap-3">
                {question?.options?.map((category: any, key: number) => {
                    return (
                        <div key={key} className="flex align-items-start">
                            <RadioButton  name="category" value={category} onChange={(e) => {}} checked={2 === category.value} />
                            <Column id="center">
                            <label className="ml-2">{category.content}</label>
                            </Column>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
        