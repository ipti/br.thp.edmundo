

export const ControllerViewForm = () => {return{RespQuestion, RespQuestionCheckBox}}
const RespQuestion = (value: any, id: number, formRespo: any, setFormResp: any) => {

    const newData = { ...formRespo }

    for (const option of newData.question) {
      if (option.id === id) {
        option.value = value
      }
    }
    setFormResp(newData);
  }

  const RespQuestionCheckBox = (value: any, id: number, idOptions: number, formRespo: any, setFormResp: any) => {
    const newData = { ...formRespo }
    newData.question.map((item: any) => {
      if (item.id === id) {
        for (const option of item.options) {
          if (option.id === idOptions) {
            option.value = value
          }
        }
      }
      return item
    }
    );
    setFormResp(newData)
  }