import { useContext, useEffect, useState } from "react";

import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import TagLogin from "../../assets/image/logo-edmundo.svg";

import turmasHover from "../../assets/image/turmasPessoas.svg";
import { Column, Padding, Row } from "../../Styles/styles";
import DropdownComponent from "../Dropdown";
import Item from "./Item";
import { Container } from "./style";

import avatar from "../../assets/image/avatar.svg"

import turmas from "../../assets/image/peoples.svg";

import reapplication from "../../assets/image/iconsMenu/note_add.svg";
import reapplication_hover from "../../assets/image/iconsMenu/note_add_hover.svg";


import user from "../../assets/image/iconsMenu/person.svg";
import user_hover from "../../assets/image/iconsMenu/person_active.svg";
import { getMenuItem, getYear, menuItem, setYear } from "../../service/localstorage";
import { AplicationContext } from "../../context/context";
import { PropsAplicationContext } from "../../context/type";
import { ROLE } from "../../Controller/controllerGlobal";

const Menu = ({ viewdMenu }: { viewdMenu: boolean }) => {
  const propsAplication = useContext(AplicationContext) as PropsAplicationContext
  const [active, setActive] = useState(parseInt(getMenuItem()!));
  const [visibleModal, setVisibleModal] = useState(false);
  return (
    <Container active={viewdMenu}>
      <Padding padding="4px" />

      <Padding padding="16px">
        <Row id="center">
          <Column id="center">
            <img src={TagLogin} style={{ width: "128px" }} alt=""></img>
          </Column>
        </Row>
      </Padding>
      <Padding padding="8px" />
      {true ? (
        <Padding padding="8px">
          {/* <Item
            text={"Cronograma"}
            funcActiv={() => {
              setActive(1);
              menuItem("1");
            }}
            active={active === 1 ? true : false}
            path={"/cronograma"}
            icon={"pi pi-calendar"}
          /> */}
          {/* <Item
            text={"Pagina Inicial"}
            funcActiv={() => {
              setActive(1);
              menuItem("1");
            }}
            active={active === 1 ? true : false}
            path={"/"}
            icon={active === 1 ? homeHover : home}
          />
          <Padding /> */}
          {propsAplication.user?.role !== ROLE.STUDENT && <><Item
            text={"Reaplicações"}
            funcActiv={() => {
              setActive(2);
              menuItem("2");
            }}
            active={active === 2 ? true : false}
            path={"/reaplicacoes"}
            icon={active === 2 ? reapplication_hover : reapplication}
          />
            <Padding /></>}
          <Item
            text={"Turmas"}
            funcActiv={() => {
              setActive(4);
              menuItem("4");
            }}
            active={active === 4 ? true : false}
            path={"/turmas"}
            icon={active === 4 ? turmasHover : turmas}
          />
          <Padding />
          {propsAplication.user?.role !== ROLE.STUDENT &&
            <>
              <Item
                text={"Módulos"}
                funcActiv={() => {
                  setActive(5);
                  menuItem("5");
                }}
                active={active === 5 ? true : false}
                path={"/modulos"}
                icon={active === 5 ? turmasHover : turmas}
              />
              <Padding />
            </>
          }

          {/* <Item
            text={"Beneficiários"}
            funcActiv={() => {
              setActive(5);
              menuItem("5");
            }}
            active={active === 5 ? true : false}
            path={"/beneficiarios"}
            icon={active === 5 ? beneficiaries_hover : beneficiaries}
          />
          <Padding /> */}
          {propsAplication.user?.role !== ROLE.STUDENT && <>
            <Item
              text={"Usuários"}
              funcActiv={() => {
                setActive(7);
                menuItem("7");
              }}
              active={active === 7 ? true : false}
              path={"/usuarios"}
              icon={active === 7 ? user_hover : user}
            />

            <Padding />
          </>}
          <Item
            text={"Meu Perfil"}
            funcActiv={() => {
              setActive(6);
              menuItem("6");
            }}
            active={active === 6 ? true : false}
            path={"/perfil"}
            icon={avatar}
          />
          <Padding />



        </Padding>
      ) : null}
      <ModalYear visible={visibleModal} onHide={() => setVisibleModal(false)} />
    </Container>
  );
};

const ModalYear = ({
  visible,
  onHide,
}: {
  visible: boolean | undefined;
  onHide(): void;
}) => {
  const years = [
    { value: 2024 },
    { value: 2023 },
    { value: 2022 },
    { value: 2021 },
  ];

  const [year, setYearState] = useState<any>();

  useEffect(() => {
    setYearState(parseInt(getYear()!));
  }, []);

  return (
    <Dialog
      visible={visible}
      onHide={onHide}
      header="Selecione o ano"
      className="w-8 md:w-5"
    >
      <Padding />
      <div>
        <div>
          <DropdownComponent
            options={years}
            placerholder="Ano"
            onChange={(e) => {
              setYearState(e.target.value);
            }}
            optionsLabel="value"
            value={year}
          />
          {/* <div>{errors.password}</div> */}
        </div>
      </div>
      <Padding padding="16px" />
      <Column>
        <Row id="space-between" style={{ width: "100%" }}>
          <Button label="Cancelar" severity="secondary" />
          <Button
            label="Selecionar ano"
            onClick={() => {
              setYear(year.toString());

              window.location.reload();
            }}
          />
        </Row>
      </Column>
    </Dialog>
  );
};

export default Menu;
