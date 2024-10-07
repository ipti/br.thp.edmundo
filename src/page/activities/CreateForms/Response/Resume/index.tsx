import { useContext } from "react";
import { CreateOrEditFormTypes } from "../../../../../Types/types";
import { Column, Padding, Row } from "../../../../../Styles/styles";
import { CreateOrEditFormContext } from "../../context/context";
import RenderViewTextField from "../../../../../Components/ComponentsForm/ComponentTextFiled/View";
import RenderViewTextLong from "../../../../../Components/ComponentsForm/ComponentTextLong/View";
import RenderRadioButtonCard from "../../../../../Components/ComponentsForm/ComponentMulti/View";
import RenderCheckBoxCard from "../../../../../Components/ComponentsForm/ComponentCheckbox/View";


const Resume = () => {


    const props = useContext(CreateOrEditFormContext) as CreateOrEditFormTypes




    return (
        <>
            {/* <div className='card'>
                <Padding padding="16px">
                    <h2>{props?.form?.title}</h2>
                    {props?.form?.description ? (
                        <>
                            <Padding padding="8px" />
                            <p>{props?.form?.description}</p>
                        </>
                    ) : null}
                </Padding>
            </div>
            <div className="card">
                {props?.form?.question?.map((item, index) => {
                    return (
                        <div>
                            <Padding>
                                <Row id="space-between">
                                    <Column id="center">
                                        <p>{item.label}</p>
                                    </Column>
                                </Row>
                            </Padding>
                            <Padding>
                                {item?.type === "textfield" ? (
                                    <>
                                        {props.responses.response.map((item, index) => {
                                            return (
                                                <RenderViewTextField
                                                    item={item}
                                                    disabled
                                                />
                                            )
                                        })}
                                    </>
                                ) : item?.type === "textlong" ? (
                                    <RenderViewTextLong
                                        item={item}
                                        disabled
                                    />
                                ) : item?.type === "mult" ? (
                                    <div>
                                        <RenderRadioButtonCard
                                            options={item.options}
                                            item={item}
                                            disabled
                                        />
                                    </div>
                                ) : item?.type === "checklist" ? (
                                    <div>
                                        <RenderCheckBoxCard
                                            options={item?.options}
                                            item={item}
                                            disabled
                                        />
                                    </div>
                                ) : null}
                            </Padding>
                        </div>
                    )
                })}
            </div> */}
        </>
    )
}

export default Resume