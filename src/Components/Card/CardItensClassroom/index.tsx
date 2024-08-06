import styles from "../../../Styles"
import { Column, Padding, Row } from "../../../Styles/styles"


const CardItensClassrooom = ({ icon, title, description, count,  }: { icon: string, title: string, description: string, count?: number }) => {
    return (
        <div className="card cursor-pointer">
            <Row>
                <Column id="center">
                    <div className={`boxQuantity`}>
                        <img src={icon} alt="" style={{ height: 40 }} />
                    </div>
                </Column>
                <Padding padding="8px" />
                <Row id="space-between" style={{ width: "100%" }}>

                    <Column id="space-between">
                        <h2>{title}</h2>
                        <Padding />
                        <p style={{ color: styles.colors.grayClear, fontSize: "14px" }}>{description}</p>
                    </Column>
                    <Column id="center">
                        <h1>{count}</h1>
                    </Column>
                </Row>
            </Row>
        </div>
    )
}

export default CardItensClassrooom