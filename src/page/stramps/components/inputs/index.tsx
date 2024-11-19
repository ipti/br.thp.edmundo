import { InputTextarea } from "primereact/inputtextarea"
import { useContext } from "react"
import TextInput from "../../../../Components/TextInput"
import { Padding } from "../../../../Styles/styles"
import { StampsContext } from "../../createStramps/context/context"
import DropdownComponent from "../../../../Components/Dropdown"
import { type_stamp } from "../../../../Controller/controllerGlobal"

const Inputs = ({ errors, handleChange, touched, values, isCreated }: { errors: any, values: any, touched: any, handleChange: any, isCreated?: boolean }) => {

    const propsStamps = useContext(StampsContext)

    return (
        <div>
            <div className="col-12 md:col-6">
                <label>Nome *</label>
                <Padding />
                <TextInput
                    placeholder="Nome"
                    value={values.name}
                    onChange={handleChange}
                    name="name"
                />
                <Padding />
                {errors.name && touched.name ? (
                    <div style={{ color: "red" }}>
                        {errors.name}
                        <Padding />
                    </div>
                ) : null}
            </div>
            <div className="col-12 md:col-6">
                <label>Tipo de selo *</label>
                <Padding />
                <DropdownComponent
                    name="type"
                    placerholder="Escolha o tipo de selo "
                    optionsLabel="name"
                    optionsValue="id"
                    value={values.type}
                    onChange={handleChange}
                    options={
                        type_stamp
                    }
                />
                <Padding />
                {errors.type && touched.type ? (
                    <div style={{ color: "red" }}>
                        {errors.type}
                        <Padding />
                    </div>
                ) : null}
            </div>
            {isCreated && <div className="col-12 md:col-6">
                <label>Imagem selo </label>
                <Padding />
                <TextInput
                    // value={props.file}
                    accept="image/*"
                    type="file"
                    placeholder="Imagem selo"
                    onChange={(e: any) => propsStamps?.setFile(e.target.files)}
                    name="name"
                />
                <label>Recomendado utilizar fundos brancos 512x512</label>
            </div>}
            <div className="col-12 md:col-6">
                <label>Descrição</label>
                <Padding />
                <InputTextarea placeholder="Escreva a descrição " style={{ width: "100%", height: 128, resize: "none" }} value={values.description} name="description" onChange={handleChange} />
            </div>
        </div>
    )
}

export default Inputs