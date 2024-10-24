import { PropsFormActivities } from "../page/activities/type";

export const ControllerCreateForm = () => {
  return { editType, AddRadiosButtonandBoxSelect, AddBoxSelect, editlabelRadioButtonandBoxSelect, editIsRequiredForm, deleteOptions, deleteQuestion, editLabelForm }
}

const AddRadiosButtonandBoxSelect = (index: number, set: any, form: PropsFormActivities) => {
  const newData = { ...form };
  const lastposi =
    newData.questions![index]?.options[newData.questions![index]?.options.length - 1]?.value;
  newData.questions![index]?.options?.push({
    value: lastposi + 1,
    content: `Options ${lastposi + 1}`,
    isResponse: false
  });
  newData.questions![index] = { ...newData.questions![index], options: newData.questions![index]?.options };
  set(newData);
}; // adiciona outra opção em questões objetivas

const editType = (index: number, novoAtributo: any, set: any, form: PropsFormActivities) => {
  const newData = { ...form };

  if (novoAtributo === "MULTIPLE_CHOICE" || novoAtributo === "SELECTION_BOX") {
    if (novoAtributo === "MULTIPLE_CHOICE") {
      
      newData.questions![index] = {
        ...newData.questions![index],
        type: novoAtributo,
        options: [{isResponse: false, value: 1, content: "Options 1" }],
      };

      set(newData);
    }
    if (novoAtributo === "SELECTION_BOX") {
      newData.questions![index] = {
        ...newData.questions![index],
        type: novoAtributo,
        options: [{isResponse: false, value: 1, content: "Options 1" }],
      };
      set(newData);
    }
  } else {
    newData.questions![index] = { ...newData.questions![index], type: novoAtributo };
    set(newData);
  }
}; // edita o tipo da questão

const AddBoxSelect = (index: number, set: any, form: any) => {
  const newData = { ...form };
  const lastposi =
    newData.questions![index]?.options[newData.questions![index]?.options.length - 1]?.value;
  newData.questions![index]?.options?.push({
    value: lastposi + 1,
    content: `Options ${lastposi + 1}`,
    isResponse: false
  });
  newData.questions![index] = { ...newData.questions![index], options: newData.questions![index]?.options };
  set(newData);
}; // adiciona outra opção em questões objetivas

const editlabelRadioButtonandBoxSelect = (
  index: number,
  indexRadioButton: number,
  newLabel: string,
  form: PropsFormActivities,
  setform: any
) => {
  const newData = { ...form };
  newData.questions[index] = { ...newData.questions[index], options: form.questions[index]?.options };
  newData.questions[index].options[indexRadioButton].content = newLabel;
  setform(newData);
}; // edita label do radiobutton

const editLabelForm = (index: number, novoLabel: string, form: any, setform: any) => {
  const newData = { ...form };
  newData.questions[index] = { ...newData.questions[index], content: novoLabel };
  setform(newData);
}; // edit label form

const editIsRequiredForm = (index: number, isRequerid: boolean, form: any, setform: any) => {
  const newData = { ...form };
  newData.questions[index] = { ...newData.questions[index], required: isRequerid };
  setform(newData);
}; // edit requerid form

const deleteOptions = (index: number, indexRadioButton: number, form: any, setform: any) => {
  const newData = { ...form };
  newData.questions[index].options?.splice(indexRadioButton, 1);
  setform(newData);
}; // delete options

const deleteQuestion = (indexRadioButton: number, form: any, setform: any) => {
  const newData = { ...form };
  newData.questions.splice(indexRadioButton, 1);
  setform(newData);
}; // delete options
