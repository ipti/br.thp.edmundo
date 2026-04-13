import { useState } from "react"
import InputNumberComponent from "../../../../Components/InputNumber"
import TextAreaComponent from "../../../../Components/TextArea"
import TextInput from "../../../../Components/TextInput"
import { Padding } from "../../../../Styles/styles"
import { TabMenu } from "primereact/tabmenu"
import Editor from "../../../../Components/Editor"
import { FormikErrors } from "formik"
import { EditClasses } from "../../type"
import color from "../../../../Styles/colors"

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
        <div
          style={{
            border: `1px solid ${color.colorBorderCard}`,
            borderRadius: 12,
            padding: 12,
            marginTop: 12,
            background: "#FAFCFF",
          }}
        >
          <p style={{ margin: 0, color: color.colorsBaseInkLight }}>
            Preencha os dados principais da aula. Depois, na aba de conteúdo, você pode detalhar o roteiro.
          </p>
        </div>
        <Padding padding="12px" />
        <div className="grid">
          <div className="col-12 md:col-6">
            <label>Nome da aula</label>
            <Padding />
            <TextInput
              value={values.name}
              placeholder="Ex: Introdução à Multiplicação"
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
            <label>Duração (horas)</label>
            <Padding />
            <InputNumberComponent
              value={values.duration}
              placeholder="Ex: 1.5"
              onChange={(e: any) => setFieldValue("duration", e?.value ?? 0)}
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
          <div className="col-12 md:col-6">
            <label>Objetivo</label>
            <Padding />
            <TextAreaComponent
              value={values.objective}
              placeholder="Ex: Ao final da aula, o aluno deve ser capaz de..."
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
            <label>Materiais necessários</label>
            <Padding />
            <TextAreaComponent
              value={values.necessary_material}
              placeholder="Ex: Caderno, lápis, projetor, link de apoio..."
              onChange={handleChange}
              name="necessary_material"
            />
            {errors.necessary_material && touched.necessary_material ? (
              <div style={{ color: "red", marginTop: "8px" }}>
                {errors.necessary_material}
              </div>
            ) : null}
          </div>
          <div className="col-12">
            <div
              style={{
                border: `1px dashed ${color.colorBorderCard}`,
                borderRadius: 10,
                padding: 12,
                background: "#FFFFFF",
              }}
            >
              <p style={{ margin: 0, fontWeight: 700 }}>Resumo da aula</p>
              <p style={{ margin: "8px 0 0 0", color: color.colorsBaseInkLight }}>
                <strong>Nome:</strong> {values.name || "Não informado"} | <strong>Duração:</strong>{" "}
                {values.duration ? `${values.duration}h` : "Não informada"}
              </p>
            </div>
          </div>
        </div>
      </> : activeIndex === 1 ? <>
        <div
          style={{
            border: `1px solid ${color.colorBorderCard}`,
            borderRadius: 12,
            padding: 12,
            marginTop: 12,
            background: "#FAFCFF",
          }}
        >
          <p style={{ margin: 0, color: color.colorsBaseInkLight }}>
            Escreva livremente o conteúdo da aula.
          </p>
        </div>
        <Padding padding="12px" />
        <Editor values={values.content} onChange={(e) => setFieldValue('content', e)} />
      </> : null}
    </div>
  )
}

export default Inputs
