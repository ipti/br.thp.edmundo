import { useState } from "react"
import InputNumberComponent from "../../../../Components/InputNumber"
import TextAreaComponent from "../../../../Components/TextArea"
import TextInput from "../../../../Components/TextInput"
import { Padding } from "../../../../Styles/styles"
import { TabMenu } from "primereact/tabmenu"
import Editor from "../../../../Components/Editor"
import { FormikErrors } from "formik"
import { EditClasses } from "../../type"

const Inputs = ({ errors, handleChange, touched, values, setFieldValue }: { errors: any, values: any, touched: any, handleChange: any, setFieldValue: (field: string, value: any, shouldValidate?: boolean) => Promise<void | FormikErrors<EditClasses>> }) => {

  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    { label: 'Informações', icon: 'pi pi-home' },
    { label: 'Conteúdo', icon: 'pi pi-book' },
    // { label: 'Formulário', icon: ' pi pi-list' },
  ];

  return (
    <div>
      <Padding />
      <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
      {activeIndex === 0 ? <>
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
            min={0}
            maxFractionDigits={1}
            name="duration"
          />
          {errors.duration && touched.duration ? (
            <div style={{ color: "red", marginTop: "8px" }}>
              {errors.duration}
            </div>
          ) : null}
        </div>
      </> : activeIndex === 1 ? <><Editor values={values.content} onChange={(e) => setFieldValue('content', e)}/></> : null}
    </div>
  )
}

export default Inputs