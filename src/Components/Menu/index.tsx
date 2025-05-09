import { useContext, useEffect, useState } from "react";

import { Dialog } from "primereact/dialog";
import TagLogin from "../../assets/image/logo-edmundo.svg";

import { Column, Padding, Row } from "../../Styles/styles";
import DropdownComponent from "../Dropdown";
import Item from "./Item";
import { Container } from "./style";

import avatar from "../../assets/image/avatar.svg";

import classroom from "../../assets/image/iconsMenu/classroom.svg";
import classroomHover from "../../assets/image/iconsMenu/classroom_hover.svg";

import module from "../../assets/image/iconsMenu/module.svg";
import moduleHover from "../../assets/image/iconsMenu/module_hover.svg";


import reapplication from "../../assets/image/iconsMenu/interactive_space.svg";
import reapplication_hover from "../../assets/image/iconsMenu/interactive_space_hover.svg";


import user from "../../assets/image/iconsMenu/user.svg";
import user_hover from "../../assets/image/iconsMenu/user_hover.svg";
import { AplicationContext } from "../../context/context";
import { PropsAplicationContext } from "../../context/type";
import { ROLE } from "../../Controller/controllerGlobal";
import { getMenuItem, getYear, menuItem, setYear } from "../../service/localstorage";
import ButtonComponent from "../Button";

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
          {/*
           <Item
            text={"Cronograma"}
            funcActiv={() => {
              setActive(1);
              menuItem("1");
            }}
            active={active === 1 ? true : false}
            path={"/cronograma"}
            icon={"pi pi-calendar"}
          /> 
          */}
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
              setActive(1);
              menuItem("1");
            }}
            active={active === 1 ? true : false}
            path={"/reaplicacoes"}
            icon={active === 1 ? reapplication_hover : reapplication}
          />
            <Padding /></>}
          <Item
            text={"Turmas"}
            funcActiv={() => {
              setActive(2);
              menuItem("2");
            }}
            active={active === 2 ? true : false}
            path={"/turmas"}
            icon={active === 2 ? classroomHover : classroom}
          />
          <Padding />
          {propsAplication.user?.role !== ROLE.STUDENT &&
            <>
              <Item
                text={"Módulos"}
                funcActiv={() => {
                  setActive(3);
                  menuItem("3");
                }}
                active={active === 3 ? true : false}
                path={"/modulos"}
                icon={active === 3 ? moduleHover : module}
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
         
          {propsAplication.user?.role === ROLE.ADMIN && <>
            <Item
              text={"Tags"}
              funcActiv={() => {
                setActive(6);
                menuItem("6");
              }}
              active={active === 6 ? true : false}
              path={"/tags"}
              icon={"pi pi-tags"}
              isIcon
            />
            <Padding />
          </>}
          {propsAplication.user?.role === ROLE.ADMIN && <>
            <Item
              text={"Selos"}
              funcActiv={() => {
                setActive(7);
                menuItem("7");
              }}
              active={active === 7 ? true : false}
              path={"/selos"}
              icon={"pi pi-crown"}
              isIcon
            />
            <Padding />
          </>}
          {(propsAplication.user?.role === ROLE.ADMIN || propsAplication.user?.role === ROLE.TEACHER) && <>
            <Item
              text={"Grupos de avaliação"}
              funcActiv={() => {
                setActive(8);
                menuItem("8");
              }}
              active={active === 8 ? true : false}
              path={"/grupos"}
              icon={"pi pi-th-large"}
              isIcon
            />
            <Padding />
          </>}
          {propsAplication.user?.role !== ROLE.STUDENT && <>
            <Item
              text={"Usuários"}
              funcActiv={() => {
                setActive(4);
                menuItem("4");
              }}
              active={active === 4 ? true : false}
              path={"/usuarios"}
              icon={active === 4 ? user_hover : user}
            />

            <Padding />
          </>}
          <Item
            text={"Meu Perfil"}
            funcActiv={() => {
              setActive(5);
              menuItem("5");
            }}
            active={active === 5 ? true : false}
            path={"/perfil"}
            icon={propsAplication.user?.registration![0]?.avatar_url ?? avatar}
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
          <ButtonComponent label="Cancelar" severity="secondary" />
          <ButtonComponent
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
