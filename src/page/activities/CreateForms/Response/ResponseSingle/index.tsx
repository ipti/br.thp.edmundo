import { Paginator } from 'primereact/paginator';
import { useContext, useState } from "react";
import { CreateOrEditFormTypes } from '../../../../../Types/types';
import { Column, Padding, Row } from '../../../../../Styles/styles';
import RenderViewTextField from '../../../../../Components/ComponentsForm/ComponentTextFiled/View';
import RenderViewTextLong from '../../../../../Components/ComponentsForm/ComponentTextLong/View';
import RenderRadioButtonCard from '../../../../../Components/ComponentsForm/ComponentMulti/View';
import RenderCheckBoxCard from '../../../../../Components/ComponentsForm/ComponentCheckbox/View';
import { CreateOrEditFormContext } from '../../context/context';


const ResponseSingle = () => {
    const [first, setFirst] = useState(0);

    const onPageChange = (event: any) => {
        setFirst(event.first);
    };

    const props = useContext(CreateOrEditFormContext) as CreateOrEditFormTypes
    return (
        <>
            <div className='card'>
                <Padding padding="16px">
                    <h2>{props?.responses.response[first]?.title}</h2>
                    {props?.responses.response[first]?.description ? (
                        <>
                            <Padding padding="8px" />
                            <p>{props?.responses.response[first]?.description}</p>
                        </>
                    ) : null}
                </Padding>
            </div>
            <div className="card">
                <Paginator first={first} rows={1} template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink" totalRecords={props.responses.response.length} onPageChange={onPageChange} />
                {props.responses.response[first].response.map((item:any, index: any) => {
                    return (
                        <div>
                            <Padding>
                                <Row id="space-between">
                                    <Column id="center">
                                        <p>{item.question[0].label}</p>
                                    </Column>
                                </Row>
                            </Padding>
                            <Padding>
                                {item.question[0].type === "textfield" ? (
                                    <RenderViewTextField
                                        item={item}
                                        disabled
                                    />
                                ) : item.question[0].type === "textlong" ? (
                                    <RenderViewTextLong
                                        item={item}
                                        disabled
                                    />
                                ) : item.question[0].type === "mult" ? (
                                    <div>
                                        <RenderRadioButtonCard
                                            options={item.question[0].options}
                                            item={item}
                                            disabled
                                        />
                                    </div>
                                ) : item.question[0].type === "checklist" ? (
                                    <div>
                                        <RenderCheckBoxCard
                                            options={item.question[0].options}
                                            item={item}
                                            disabled
                                        />
                                    </div>
                                ) : null}
                            </Padding>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ResponseSingle