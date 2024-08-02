import { useEffect, useState } from "react";

import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import TagLogin from "../../assets/image/logo-edmundo.svg";

import turmasHover from "../../assets/image/turmasPessoas.svg";
import styles from "../../Styles";
import { Column, Padding, Row } from "../../Styles/styles";
import DropdownComponent from "../Dropdown";
import Icon from "../Icon";
import Item from "./Item";
import { Container } from "./style";

import turmas from "../../assets/image/peoples.svg";




import user from "../../assets/image/iconsMenu/person.svg";
import user_hover from "../../assets/image/iconsMenu/person_active.svg";
import { getMenuItem, getYear, menuItem, setYear } from "../../service/localstorage";

const Menu = ({ viewdMenu }: { viewdMenu: boolean }) => {
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
          <Item
            text={"Reaplicações"}
            funcActiv={() => {
              setActive(2);
              menuItem("2");
            }}
            active={active === 2 ? true : false}
            path={"/reaplicacoes"}
            icon={active === 2 ? turmasHover : turmas}
          />
          <Padding />
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
            <Item
              text={"Meu Perfil"}
              funcActiv={() => {
                setActive(6);
                menuItem("6");
              }}
              active={active === 6 ? true : false}
              path={"/perfil"}
              icon={active === 6 ? user_hover : user}
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
