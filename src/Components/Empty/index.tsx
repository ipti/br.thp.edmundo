import NotFind from "../../Assets/images/notFind.svg";
import styles from "../../Styles";
import { Column, Padding, Row } from "../../Styles/styles";

const Empty = ({ title }: { title: string }) => {
    return (
        <div className="card w- md:w-full">
            <Row id="center">
                <Column id="center">
                    <Row id="center">
                        <img alt="" src={NotFind} style={{ width: "128px" }} />
                    </Row>
                    <Padding />
                    <h4 style={{color: styles.colors.colorNavyBlue}}>
                        Não encontramos {title}
                    </h4>
                </Column>
            </Row>
        </div>
    )
}

export default Empty;