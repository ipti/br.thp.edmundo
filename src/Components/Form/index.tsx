import { FormikErrors } from "formik"
import { Form } from "../../page/activities/type"
import { CreateResponse } from "../../page/homeActivities/type"
import { Column, Padding } from "../../Styles/styles"
import RenderRadioButtonCard from "./View/radiobutton"
import RenderCheckBoxCard from "./View/checkbox"

const FormComponent = ({ form, setFieldValue, values, errors, isAlter }: { form: Form, isAlter?: boolean ,values?: CreateResponse, errors?: any, setFieldValue?: (field: string, value: any, shouldValidate?: boolean) => Promise<void | FormikErrors<CreateResponse>> }) => {

    return (
        <div>
            <Column style={{ gap: 32 }}>
                {form.question.map((item, key) => {
                    return (
                        <Padding padding="0" key={key}>
                            <p>{item.content}</p>
                            <Padding padding="8px" />
                            {item.type === "MULTIPLE_CHOICE" && <RenderRadioButtonCard question={item} errors={errors} values={values} setFieldValue={setFieldValue!} indexQuestion={key} />}
                            {item.type === "SELECTION_BOX" && <RenderCheckBoxCard question={item} errors={errors} values={values} setFieldValue={setFieldValue!} indexQuestion={key} />}
                            {errors?.question ? (
                                <div style={{ color: "red", marginTop: "8px", fontSize: 12 }}>
                                    {errors?.question[key]?.options}
                                </div>
                            ) : null}
                        </Padding>
                    )
                })}
            </Column>
        </div>
    )
}

export default FormComponent