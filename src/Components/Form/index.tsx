import { Form } from "../../page/activities/type"
import { Column, Padding } from "../../Styles/styles"
import RenderRadioButtonCard from "./View"

const FormComponent = ({ form }: { form: Form }) => {


    return (
        <div>
            <Column style={{ gap: 32}}>
                {form.question.map((item) => {
                    return (
                        <Padding padding="0">
                            <p>{item.content}</p>
                            <Padding padding="8px" />
                            {item.type === "MULTIPLE_CHOICE" && <RenderRadioButtonCard question={item} />}
                        </Padding>
                    )
                })}
            </Column>
        </div>
    )
}

export default FormComponent