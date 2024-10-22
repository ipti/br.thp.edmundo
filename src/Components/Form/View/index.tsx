
import { RadioButton } from "primereact/radiobutton";
import { Column } from "../../../Styles/styles";



export default function RenderRadioButtonCard({question}: {question: any}) {

    

    return (
        <div className="card flex justify-content-start">
            <div className="flex flex-column gap-3">
                {question?.options?.map((category: any, key: number) => {
                    return (
                        <div key={key} className="flex align-items-start">
                            <RadioButton  name="category" value={category} onChange={(e) => {}} checked={2 === category.value} />
                            <Column id="center">
                            <p style={{fontSize: 16, marginLeft: 8}}>{category.content}</p>
                            </Column>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
        