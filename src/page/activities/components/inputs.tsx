import { Chip } from "primereact/chip";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { MultiSelect } from "primereact/multiselect";
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState
} from "react";
import "react-quill/dist/quill.snow.css";
import DropdownComponent from "../../../Components/Dropdown";
import Editor from "../../../Components/Editor";
import InputNumberComponent from "../../../Components/InputNumber";
import TextInput from "../../../Components/TextInput";
import {
  difficult,
  type_activities,
} from "../../../Controller/controllerGlobal";
import color from "../../../Styles/colors";
import { Padding, Row } from "../../../Styles/styles";
import { useFetchRequestGroupList } from "./service/request";

const Inputs = ({
  errors,
  handleChange,
  touched,
  values,
  setFieldValue,
  isCreated,
  tags,
  setTags,
  tagsAll,
  metricCorrectAnswer,
  setMetricCorrectAnswer,
}: {
  tagsAll: any;
  errors: any;
  values: any;
  touched: any;
  handleChange: any;
  setFieldValue: any;
  isCreated?: boolean;
  tags: any;
  setTags: any;
  metricCorrectAnswer?: {
    idMetric: number;
    correctAnswer: string;
  }[];
  setMetricCorrectAnswer?: Dispatch<
    SetStateAction<
      {
        idMetric: number;
        correctAnswer: string;
      }[]
    >
  >;
}) => {

  const [expandedRows, setExpandedRows] = useState<any>([]);

  const { data: group } = useFetchRequestGroupList();

  const [groupList, setGroups] = useState<any>([]);

  // gerencia grupos
  useEffect(() => {
    if (group) {
      // eslint-disable-next-line array-callback-return
      const groupFind = group
        // eslint-disable-next-line array-callback-return
        ?.map((gr: any) => {
          const soma =
            gr?.metric_group_avaliation?.reduce(function (
              total: number,
              item: any
            ) {
              return total + item.metric_percentange;
            },
            0) ?? 0;
          if (soma >= 100) {
            return {
              createdAt: gr.createdAt,
              id: gr.id,
              name: gr.name,
              updatedAt: gr.updatedAt,
              type_group_avaliation_fk: gr.type_group_avaliation_fk,
              metric_group_avaliation: gr.metric_group_avaliation,
            };
          }
        })
        .filter(Boolean);
      setGroups(groupFind);
    }
  }, [group]);

  // upload imagem azure
  

  const expansionTemplate = (data: any) => {
    return (
      <>
        <DataTable
          value={data?.metric_group_avaliation}
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column
            field="description"
            headerStyle={{ width: "40%" }}
            header="Nome"
          ></Column>
          <Column
            body={(e) => <>{e.metric_percentange ?? 0}%</>}
            headerStyle={{ width: "10%" }}
            header="Peso"
          ></Column>
          <Column
            body={(row) => {
              return (
                <TextInput
                  value={
                    metricCorrectAnswer?.find(
                      (props) => props.idMetric === row.id
                    )?.correctAnswer || ""
                  }
                  onChange={(e) => {
                    if (!setMetricCorrectAnswer) return;
                    setMetricCorrectAnswer((prevItems) =>
                      prevItems?.map((item) =>
                        item.idMetric === row.id
                          ? { ...item, correctAnswer: e.target.value }
                          : item
                      )
                    );
                  }}
                />
              );
            }}
            header="Detalhes de correção"
          ></Column>
        </DataTable>
      </>
    );
  };

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
          <div style={{ color: "red", marginTop: "8px" }}>{errors.name}</div>
        ) : null}
      </div>

      <div className="col-12 md:col-6">
        <label>Tipo de atividade </label>
        <Padding />
        <DropdownComponent
          value={values.type_activities}
          disabled={!isCreated}
          options={type_activities}
          optionsValue="id"
          optionsLabel="name"
          placerholder="Escolha o tipo de atividade"
          onChange={(e) => setFieldValue("type_activities", e.target.value)}
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
          onChange={(e) => setFieldValue("difficult", e.target.value)}
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
          min={0}
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
      <div className="col-12 md:col-12">
        <label>Descrição</label>
        <Padding />
        <Editor
          values={values.description}
          onChange={(e: any) => {
            console.log(e);
            setFieldValue("description", e);
          }}
        />
        {/* <Editor 
                
                modules={{
                    toolbar: {
                        container: [
                            [{ header: "1" }, { header: "2" }, { font: [] }],
                            [{ size: [] }],
                            ["bold", "italic", "underline", "strike", "blockquote"],
                            [
                                { list: "ordered" },
                                { list: "bullet" },
                                { indent: "-1" },
                                { indent: "+1" },
                            ],
                            ["link", "image", "video"],
                            ["code-block"],
                            ["clean"],
                        ],
                    },
                    handlers: {
                        image: imageHandler,   // <- 
                      },
                    clipboard: {
                        matchVisual: false,
                    },
                }}  onTextChange={(e) => setFieldValue("description", e.htmlValue)} style={{ height: '320px' }} /> */}
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

      {!isCreated && (
        <div className="col-12 md:col-6">
          <label>Tags </label>
          <Padding />
          <MultiSelect
            value={tags}
            onChange={(e) => {
              setTags(e.value);
            }}
            options={tagsAll}
            optionLabel="content"
            placeholder="Tags"
            maxSelectedLabels={3}
            className="w-full"
          />
          <Padding padding="8px" />
          <Row className="grid" style={{ gap: "8px" }}>
            {tags?.map((item: any) => {
              return (
                <Chip
                  style={{ background: color.colorBlueClean, color: "black" }}
                  label={"#" + item.content}
                />
              );
            })}
          </Row>
        </div>
      )}

      {values?.type_activities?.id === "IA" && (
        <div className="col-12 md:col-6">
          <label>Grupo de IA </label>
          <Padding />
          <MultiSelect
            value={values.groups}
            defaultChecked={true}
            options={groupList}
            onChange={(e) => {
              setFieldValue("groups", e.target.value);
              var array: any = [];
              if (!setMetricCorrectAnswer) return;
              e.target.value?.forEach((item: any) => {
                item.metric_group_avaliation?.forEach((metric: any) => {
                  array.push({
                    correctAnswer:
                      metricCorrectAnswer?.find(
                        (item) => item.idMetric === metric.id
                      )?.correctAnswer ?? "",
                    idMetric: metric.id,
                  });
                });
              });
              setMetricCorrectAnswer(array);
            }}
            name="groups"
            optionLabel="name"
            placeholder="Escolha os grupos para avaliação"
            maxSelectedLabels={3}
            className="w-full"
          />
          {errors.difficult && touched.difficult ? (
            <div style={{ color: "red", marginTop: "8px" }}>
              {errors.difficult.id}
            </div>
          ) : null}
          <Row className="grid" style={{ gap: "8px", marginTop: 8 }}>
            {values.groups?.map((item: any) => {
              return (
                <Chip
                  style={{ background: color.colorBlueClean, color: "black" }}
                  label={item.name}
                />
              );
            })}
          </Row>
        </div>
      )}
      {(values?.type_activities?.id === "CODE" ||
        values?.type_activities?.id === "IA") &&
        !isCreated && (
          <div className="col-12">
            <label>Resposta esperada</label>
            <Padding />
            <DataTable
              value={values.groups}
              groupRowsBy="name"
              sortMode="single"
              sortField="id"
              sortOrder={1}
              rowExpansionTemplate={expansionTemplate}
              rowGroupHeaderTemplate={(e) => {
                return <>{e.name}</>;
              }}
              expandedRows={expandedRows}
              onRowToggle={(e) => setExpandedRows(e.data)}
              tableStyle={{ minWidth: "50rem" }}
            >
              <Column expander style={{ width: "2%" }} />
              <Column
                align={"left"}
                alignHeader={"left"}
                field="name"
                header="Nome"
                style={{ width: "100%" }}
              ></Column>
              {/* <Column field="country" header="Resposta esperada" body={MetricCorrect_Answer} style={{ width: '20%' }}></Column> */}
            </DataTable>
            {errors.expected_return && touched.expected_return ? (
              <div style={{ color: "red", marginTop: "8px" }}>
                {errors.expected_return}
              </div>
            ) : null}
          </div>
        )}
    </div>
  );
};

export default Inputs;
