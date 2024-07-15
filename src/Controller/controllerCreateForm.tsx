import { PropsForm } from "../Types/types";
import { gerarIdAleatorio } from "./controllerGlobal";

export const ControllerCreateForm = () => {
  return { editType, AddRadiosButtonandBoxSelect, AddBoxSelect, editlabelRadioButtonandBoxSelect, editIsRequiredForm, deleteOptions, deleteQuestion, editLabelForm }
}

const AddRadiosButtonandBoxSelect = (index: number, set: any, form: PropsForm) => {
  const newData = { ...form };
  const lastposi =
    newData.question![index]?.options[newData.question![index]?.options.length - 1]?.value;
  newData.question![index]?.options?.push({
    value: lastposi + 1,
    label: `Options ${lastposi + 1}`,
  });
  newData.question![index] = { ...newData.question![index], options: newData.question![index]?.options };
  set(newData);
}; // adiciona outra opção em questões objetivas

const editType = (index: number, novoAtributo: any, set: any, form: PropsForm) => {
  const newData = { ...form };

  if (novoAtributo === "mult" || novoAtributo === "checklist") {
    if (novoAtributo === "mult") {

      newData.question![index] = {
        ...newData.question![index],
        type: novoAtributo,
        options: [{ value: 1, label: "Options 1" }],
      };
      set(newData);
    }
    if (novoAtributo === "checklist") {
      newData.question![index] = {
        ...newData.question![index],
        type: novoAtributo,
        options: [{ id: gerarIdAleatorio(8), value: false, label: "Options 1" }],
      };
      set(newData);
    }
  } else {
    newData.question![index] = { ...newData.question![index], type: novoAtributo };
    set(newData);
  }
}; // edita o tipo da questão

const AddBoxSelect = (index: number, set: any, form: any) => {
  const newData = { ...form };
  newData.question[index]?.options?.push({
    id: gerarIdAleatorio(8),
    value: false,
    label: `Options ${newData.question[index]?.options.length + 1}`,
  });
  newData.question[index] = { ...newData.question[index], options: newData.question[index]?.options };
  set(newData);
}; // adiciona outra opção em questões objetivas

const editlabelRadioButtonandBoxSelect = (
  index: number,
  indexRadioButton: number,
  newLabel: string,
  form: any,
  setform: any
) => {
  const newData = { ...form };
  newData.question[index] = { ...newData.question[index], options: form.question[index]?.options };
  newData.question[index].options[indexRadioButton].label = newLabel;
  setform(newData);
}; // edita label do radiobutton

const editLabelForm = (index: number, novoLabel: string, form: any, setform: any) => {
  const newData = { ...form };
  newData.question[index] = { ...newData.question[index], label: novoLabel };
  setform(newData);
}; // edit label form

const editIsRequiredForm = (index: number, isRequerid: boolean, form: any, setform: any) => {
  const newData = { ...form };
  newData.question[index] = { ...newData.question[index], required: isRequerid };
  setform(newData);
}; // edit requerid form

const deleteOptions = (index: number, indexRadioButton: number, form: any, setform: any) => {
  const newData = { ...form };
  newData.question[index].options?.splice(indexRadioButton, 1);
  setform(newData);
}; // delete options

const deleteQuestion = (indexRadioButton: number, form: any, setform: any) => {
  const newData = { ...form };
  newData.question.splice(indexRadioButton, 1);
  setform(newData);
}; // delete options
