import { Form } from "formik";
import { useContext } from "react";
import DropdownComponent from "../../../Components/Dropdown";
import TextInput from "../../../Components/TextInput";
import { ROLE, RoleList } from "../../../Controller/controllerGlobal";
import { Padding } from "../../../Styles/styles";
import { PropsAplicationContext } from "../../../Types/types";
import { AplicationContext } from "../../../context/context";

const InputsUser = ({
  values,
  handleChange,
  errors,
  touched,
}: {
  values: any;
  handleChange: any;
  errors: any;
  touched: any;
}) => {
  const props = useContext(AplicationContext) as PropsAplicationContext;
  return (
    <Form>
      <div className="grid">
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
          <label>Nome usuário *</label>
          <Padding />
          <TextInput
            placeholder="Digite o seu nome usuário"
            value={values.email}
            onChange={handleChange}
            name="email"
          />
          <Padding />
          {errors.email && touched.enail ? (
            <div style={{ color: "red" }}>
              {errors.enail}
              <Padding />
            </div>
          ) : null}
        </div>
      </div>{" "}
      <div className="grid">
        <div className="col-12 md:col-6">
          <label>Tipo de usuário *</label>
          <Padding />
          <DropdownComponent
            name="role"
            placerholder="Tipo de usuário"
            optionsLabel="name"
            optionsValue="id"
            value={values.role}
            onChange={handleChange}
            options={RoleList(props.user?.role === ROLE.ADMIN)}
          />
          <Padding />
          {errors.role && touched.role ? (
            <div style={{ color: "red" }}>
              {errors.role}
              <Padding />
            </div>
          ) : null}
        </div>
      </div>
    </Form>
  );
};

export default InputsUser;
