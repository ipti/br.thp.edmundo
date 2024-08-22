
import { InputTextarea } from 'primereact/inputtextarea';
import { PropsInputArea } from '../../Types/types';


const TextAreaComponent = ({value, onChange, onBlur, placeholder, disabled, name}: PropsInputArea) => {
    return (
        <InputTextarea style={{width: "100%", minHeight: 100}} placeholder={placeholder} disabled={disabled}  onBlur={onBlur} value={value} autoResize onChange={onChange} rows={5} name={name} cols={30} />
    )
}

export default TextAreaComponent;