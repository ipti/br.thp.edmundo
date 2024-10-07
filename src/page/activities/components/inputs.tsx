import { Editor } from "primereact/editor"
import DropdownComponent from "../../../Components/Dropdown"
import InputNumberComponent from "../../../Components/InputNumber"
import TextInput from "../../../Components/TextInput"
import { difficult, type_activities } from "../../../Controller/controllerGlobal"
import { Padding } from "../../../Styles/styles"


const Inputs = ({ errors, handleChange, touched, values, setFieldValue }: { errors: any, values: any, touched: any, handleChange: any, setFieldValue: any }) => {
    return (
        <div className="grid">
            <div className="col-12 md:col-6">
                <label>Nome</label>
                <Padding />
                <TextInput
                    value={values.name}
                    placeholder="Nome"
                    onChange={handleChange}
                    name="name"
                />
                {errors.name && touched.name ? (
                    <div style={{ color: "red", marginTop: "8px" }}>
                        {errors.name}
                    </div>
                ) : null}
            </div>

            <div className="col-12 md:col-6">
                <label>Tipo de atividade </label>
                <Padding />
                <DropdownComponent
                    value={values.type_activities}
                    disabled={false}
                    options={type_activities}
                    optionsValue="id"
                    optionsLabel="name"
                    placerholder="Escolha o tipo de atividade"
                    onChange={e => setFieldValue("type_activities", e.target.value)}
                    name="type_activities"
                />
                {errors.type_activities && touched.type_activities ? (
                    <div style={{ color: "red", marginTop: "8px" }}>
                        {errors.type_activities.id}
                    </div>
                ) : null}
            </div>
            <div className="col-12 md:col-6">
                <label>Nivel de dificuldade </label>
                <Padding />
                <DropdownComponent
                    value={values.difficult}
                    options={difficult}
                    optionsValue="id"
                    optionsLabel="name"
                    placerholder="Escolha o nivel de dificuldade"
                    onChange={e => setFieldValue("difficult", e.target.value)}
                    name="difficult"
                />
                {errors.difficult && touched.difficult ? (
                    <div style={{ color: "red", marginTop: "8px" }}>
                        {errors.difficult.id}
                    </div>
                ) : null}
            </div>
            <div className="col-12 md:col-6">
                <label>Duração da atividades (minutos) </label>
                <Padding />
                <InputNumberComponent
                    value={values.time_activities!}
                    placeholder="Escreva a duração da atividade"
                    onChange={handleChange}
                    name="time_activities"
                />
                {errors.time_activities && touched.time_activities ? (
                    <div style={{ color: "red", marginTop: "8px" }}>
                        {errors.time_activities}
                    </div>
                ) : null}
            </div>
            <div className="col-12 md:col-6">
                <label>Descrição</label>
                <Padding />
                <Editor value={values.description} onTextChange={(e) => setFieldValue("description", e.htmlValue)} style={{ height: '320px' }} />
                {/* <TextAreaComponent
                                    value={values.description}
                                    placeholder="Escreva a descrição da atividades"
                                    onChange={handleChange}
                                    name="description"
                                /> */}
                {errors.description && touched.description ? (
                    <div style={{ color: "red", marginTop: "8px" }}>
                        {errors.description}
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default Inputs