import { FormikErrors } from "formik"
import { ChangeEvent, Dispatch, SetStateAction } from "react"
import DropdownComponent from "../../../../Components/Dropdown"
import MaskInput from "../../../../Components/InputMask"
import RadioButtonComponent from "../../../../Components/RadioButton"
import TextInput from "../../../../Components/TextInput"
import { color_race, isMaiorDeIdade, kinship, typesex } from "../../../../Controller/controllerGlobal"
import { Column, Padding, Row } from "../../../../Styles/styles"


interface PropsRegister {
    values: any,
    handleChange: {
        (e: ChangeEvent<any>): void;
        <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any> ? void : (e: string | ChangeEvent<any>) => void;
    }
    errors: any,
    touched: any,
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => Promise<void | FormikErrors<any>>
    isMaior: boolean
    setIsMaior: Dispatch<SetStateAction<boolean>>
}

const Register = ({handleChange, values, errors, touched, setFieldValue, isMaior, setIsMaior}: PropsRegister) => {


    return (
        <>
            <div className="grid">
                <div className="col-12 md:col-6">
                    <label>CPF</label>
                    <Padding />
                    <MaskInput
                        value={values.cpf}
                        mask="999.999.999-99"
                        placeholder="CPF"
                        onChange={handleChange}
                        name="cpf"
                    />
                    {errors.cpf && touched.cpf ? (
                        <div style={{ color: "red", marginTop: "8px" }}>
                            {errors.cpf.toString()}
                        </div>
                    ) : null}
                </div>
                <div className="col-12 md:col-6">
                    <label>Sexo *</label>
                    <Padding />
                    <DropdownComponent
                        value={values.sex}
                        optionsLabel="type"
                        options={typesex}
                        optionsValue="id"
                        placerholder="Selecione seu sexo"
                        name="sex"
                        onChange={handleChange}
                    />
                    {errors.sex && touched.sex ? (
                        <div style={{ color: "red", marginTop: "8px" }}>
                            {errors.sex.toString()}
                        </div>
                    ) : null}
                </div>
                <div className="col-12 md:col-6">
                    <label>Data de Nascimento *</label>
                    <Padding />
                    <MaskInput
                        value={values.birthday?.toString()}
                        mask="99/99/9999"
                        placeholder="Data de Nascimento"
                        name="birthday"
                        onChange={(e: any) => {
                            setFieldValue("birthday", e.target.value);
                            console.log(values.birthday.length > 8)
                            if (values.birthday.length > 9) {
                                setIsMaior(isMaiorDeIdade(values.birthday))
                            }
                        }}
                    />
                    {errors.birthday && touched.birthday ? (
                        <div style={{ color: "red", marginTop: "8px" }}>
                            {errors.birthday.toString()}
                        </div>
                    ) : null}
                </div>
                <div className="col-12 md:col-6">
                    <label>Cor de raça *</label>
                    <Padding />
                    <DropdownComponent
                        value={values.color_race}
                        options={color_race}
                        placerholder="Selecione sua cor de raça"
                        name="color_race"
                        optionsValue="id"
                        onChange={handleChange}
                    />{" "}
                    {errors.color_race && touched.color_race ? (
                        <div style={{ color: "red", marginTop: "8px" }}>
                            {errors.color_race.toString()}
                        </div>
                    ) : null}
                </div>
                <div className="col-12 md:col-6">
                    <label>Deficiente *</label>
                    <Padding />
                    <DropdownComponent
                        value={values.deficiency}
                        placerholder="Possui deficiência?"
                        optionsLabel="name"
                        name="deficiency"
                        onChange={handleChange}
                        optionsValue="id"
                        options={[
                            { id: true, name: "Sim" },
                            { id: false, name: "Não" },
                        ]}
                    />
                    {errors.deficiency && touched.deficiency ? (
                        <div style={{ color: "red", marginTop: "8px" }}>
                            {errors.deficiency.toString()}
                        </div>
                    ) : null}
                </div>
                <div className="col-12 md:col-6">
                    <label>Telefone para contato *</label>
                    <Padding />
                    <MaskInput
                        value={values.responsable_telephone}
                        mask="(99) 9 9999-9999"
                        name="responsable_telephone"
                        onChange={handleChange}
                        placeholder="Telefone para contato"
                    />
                    {errors.responsable_telephone &&
                        touched.responsable_telephone ? (
                        <div style={{ color: "red", marginTop: "8px" }}>
                            {errors.responsable_telephone.toString()}
                        </div>
                    ) : null}
                </div>
                <div className="col-12 md:col-6">
                    <label>Zona de moradia *</label>
                    <Padding />
                    <Column id="end">
                        <Row className="gap-2">
                            <RadioButtonComponent
                                value={1}
                                checked={values.zone === 1}
                                onChange={handleChange}
                                name="zone"
                                label="Rural"
                            />
                            <RadioButtonComponent
                                value={2}
                                checked={values.zone === 2}
                                onChange={handleChange}
                                name="zone"
                                label="Urbana"
                            />
                        </Row>
                    </Column>
                    {errors.zone && touched.zone ? (
                        <div style={{ color: "red", marginTop: "8px" }}>
                            {errors.zone.toString()}
                        </div>
                    ) : null}
                </div>
            </div>
            <Padding padding="8px" />
            {!isMaior && <>

                <h3>Dados Responsavel</h3>
                <Padding />
                <div className="grid">
                    <div className="col-12 md:col-6">
                        <label>Nome</label>
                        <Padding />
                        <TextInput
                            value={values.responsable_name}
                            name="responsable_name"
                            onChange={handleChange}
                            placeholder="Nome do Resposável"
                        />
                        {errors.responsable_name && touched.responsable_name ? (
                            <div style={{ color: "red", marginTop: "8px" }}>
                                {errors.responsable_name.toString()}
                            </div>
                        ) : null}
                    </div>
                    <div className="col-12 md:col-6">
                        <label>CPF Responsavel</label>
                        <Padding />
                        <MaskInput
                            value={values.responsable_cpf}
                            mask="999.999.999-99"
                            name="responsable_cpf"
                            placeholder="CPF do Responsável"
                            onChange={handleChange}
                        />
                        {errors.responsable_cpf && touched.responsable_cpf ? (
                            <div style={{ color: "red", marginTop: "8px" }}>
                                {errors.responsable_cpf.toString()}
                            </div>
                        ) : null}
                    </div>
                    <div className="col-12 md:col-6">
                        <label>Parentesco</label>
                        <Padding />
                        <DropdownComponent
                            placerholder="Parantesco"
                            onChange={handleChange}
                            options={kinship}
                            name="kinship"
                            optionsValue="id"
                            optionsLabel="name"
                            value={values.kinship}
                        />

                        {errors.kinship && touched.kinship ? (
                            <div style={{ color: "red", marginTop: "8px" }}>
                                {errors.kinship.toString()}
                            </div>
                        ) : null}
                    </div>
                </div>{" "}
            </>}

        </>
    )
}

export default Register