import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputSwitch } from "primereact/inputswitch";
import { useContext, useState } from "react";
import { CreateOrEditFormTypes, PropsComponentForm } from "../../../../Types/types";
import { ControllerCreateForm } from "../../../../Controller/controllerCreateForm";
import { Column, Padding, Row } from "../../../../Styles/styles";
import TextInput from "../../../../Components/TextInput";
import TextAreaComponent from "../../../../Components/TextArea";
import DropdownComponent from "../../../../Components/Dropdown";
import { gerarIdAleatorio } from "../../../../Controller/controllerGlobal";
import { CreateOrEditFormContext } from "../context/context";
import RenderFormTextField from "../../../../Components/ComponentsForm/ComponentTextFiled/Create";
import RenderFormTextLong from "../../../../Components/ComponentsForm/ComponentTextLong/Create";
import RenderForm from "../../../../Components/ComponentsForm/ComponentMulti/Create";
import RenderFormCheckbox from "../../../../Components/ComponentsForm/ComponentCheckbox/Create";

const Form = () => {
    const { form, setform } = useContext(
        CreateOrEditFormContext
    ) as CreateOrEditFormTypes;

    console.log(form)

    const props = ControllerCreateForm()

    const [openInput, setopenInput] = useState(false);

    const options: Array<PropsComponentForm> = [
        RenderForm, RenderFormCheckbox
    ];

    const [multSelect, setMultSelect] = useState(options[0]);
    const handleTitleLabel = (e: any) => {
        // const newData = { ...form, title: e.target.value };
        // setform(newData);
    }; // edit textlabel

    const handleTextDescription = (e: any) => {
        // const newData = { ...form, description: e.target.value };
        // setform(newData);
    }; // edit description


    const handleTextLabel = (e: any, index: number) => {
        props.editLabelForm(index, e.target.value, form, setform);
    }; // edit textlabel

    return (
        <>


            <Padding padding="4px" />
            {form?.questions?.map((item, index) => {
                return (
                    <>
                        <Card>
                            <Padding padding="16px">
                                <Row id="space-between">
                                    <Column id="center">
                                        {!openInput ? (
                                            <p
                                                onClick={() => {
                                                    setopenInput(true);
                                                }}
                                            >
                                                {item.content}
                                            </p>
                                        ) : (
                                            <Column style={{ width: "100%" }}>
                                                <TextAreaComponent
                                                    value={item.content}
                                                    onChange={(e) => handleTextLabel(e, index)}
                                                    onBlur={() => setopenInput(false)}
                                                />
                                            </Column>
                                        )}
                                    </Column>
                                    <Column id="start">
                                        <DropdownComponent
                                            value={multSelect}
                                            placerholder="Selecione o Tipo"
                                            options={options}
                                            onChange={(e) => {
                                                setMultSelect(e.target.value);
                                                props.editType(index, e.value.type, setform, form);
                                            }}
                                        />
                                    </Column>
                                </Row>
                            </Padding>
                            {item?.type === "textfield" ? RenderFormTextField.component({}) : item?.type === "textlong" ? RenderFormTextLong.component({}) : item?.type === "MULTIPLE_CHOICE" ? RenderForm.component({ form: form, index: index, item: item, setform: setform }) : item?.type === "SELECTION_BOX" ? (
                                RenderFormCheckbox.component({ form: form, index: index, item: item, setform: setform })
                            ) : null}
                            {/* <div className="flex align-items-center justify-content-end gap-2">
                                <i className="pi pi-trash cursor-pointer" onClick={() => props.deleteQuestion(index, form, setform)} />
                                <span>Obrigatória</span>
                                <InputSwitch checked={item.required} onChange={(e) => props.editIsRequiredForm(index, e.target.value, form, setform)} />
                            </div> */}
                        </Card>
                        <Padding padding="8px" />
                    </>
                );
            })}
            <Padding padding="8px" />
            <Row id="end">
                <Button
                    label="Adicionar Pergunta"
                    icon="pi pi-plus"
                    onClick={() =>
                        setform((prevForm: any) => ({
                            ...prevForm,
                            questions: [
                                ...prevForm.questions,
                                {
                                    type: "MULTIPLE_CHOICE",
                                    content: "Escreva aqui",
                                    form_fk: 1,
                                    options: [{ isResponse: false, value: 1, content: "Options 1" }],
                                },
                            ],
                        }))
                    }
                />
            </Row>
        </>
    )
}

export default Form