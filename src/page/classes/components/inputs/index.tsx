import InputNumberComponent from "../../../../Components/InputNumber"
import TextAreaComponent from "../../../../Components/TextArea"
import TextInput from "../../../../Components/TextInput"
import { Padding } from "../../../../Styles/styles"

const Inputs = ({ errors, handleChange, touched, values }: { errors: any, values: any, touched: any, handleChange: any }) => {
    return (
        <div>
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
                <label>Objetivo</label>
                <Padding />
                <TextAreaComponent
                  value={values.objective}
                  placeholder="Escreva o objetivo da aula"
                  onChange={handleChange}
                  name="objective"
                />
                {errors.objective && touched.objective ? (
                  <div style={{ color: "red", marginTop: "8px" }}>
                    {errors.objective}
                  </div>
                ) : null}
              </div>

              <div className="col-12 md:col-6">
                <label>Materias necessários </label>
                <Padding />
                <TextAreaComponent
                  value={values.necessary_material}
                  placeholder="Escreva os materiais necessários para a aula"
                  onChange={handleChange}
                  name="necessary_material"
                />
                {errors.necessary_material && touched.necessary_material ? (
                  <div style={{ color: "red", marginTop: "8px" }}>
                    {errors.necessary_material}
                  </div>
                ) : null}
              </div>
              <div className="col-12 md:col-6">
                <label>Duração da aula (horas) </label>
                <Padding />
                <InputNumberComponent
                  value={values.duration}
                  placeholder="Escreva a duração da aula"
                  onChange={handleChange}
                  name="duration"
                />
                {errors.duration && touched.duration ? (
                  <div style={{ color: "red", marginTop: "8px" }}>
                    {errors.duration}
                  </div>
                ) : null}
              </div>
        </div>
    )
}

export default Inputs