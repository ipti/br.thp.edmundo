import { Card } from "primereact/card"
import { Form } from "../../page/activities/type"
import RenderRadioButtonCard from "./View"

const FormComponent = ({form}: {form: Form}) => {


    return(
        <Card>
            {form.question.map((item) => {
                return(
                    <>
                        <h1>{item.content}</h1>
                        {item.type === "MULTIPLE_CHOICE" && <RenderRadioButtonCard question={item} />}
                    </>
                )
            })}
        </Card>
    )
}

export default FormComponent