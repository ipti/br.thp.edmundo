import { Calendar } from "primereact/calendar";
import { PropsInputCalendar } from "../../Types/types";
import { addLocale } from "primereact/api";

const CalendarComponent = ({
  value,
  onChange,
  placeholder,
  disabled,
  onBlur,
  name,
  view,
  dateFormat,
}: PropsInputCalendar) => {
  addLocale("pt-br", {
    firstDayOfWeek: 1,
    dayNames: [
      "domingo",
      "segunda",
      "terça",
      "quarta",
      "quinta",
      "sexta",
      "sábado",
    ],
    dayNamesShort: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
    dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
    monthNames: [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro",
    ],
    monthNamesShort: [
      "jan",
      "fev",
      "mar",
      "abr",
      "mai",
      "jun",
      "jul",
      "ago",
      "set",
      "out",
      "nov",
      "dez",
    ],
    today: "Hoje",
    clear: "Limpiar",
  });
  return (
    <Calendar
      value={value}
      onChange={onChange}
      dateFormat={dateFormat}
      
      style={{ width: "100%" }}
      locale="pt-br"
      name={name}
      placeholder={placeholder}
    />
  );
};

export default CalendarComponent;
