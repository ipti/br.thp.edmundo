
import { useNavigate } from 'react-router-dom';
import { CardFormTypes } from '../../../Types/types';
import { Padding } from '../../../Styles/styles';


const CardForm = ({ item }: CardFormTypes) => {

    const history = useNavigate()
    return (
        <div className='card'  style={{minHeight: "210px", cursor: "pointer"}} onClick={() => history(`/edit/${item.id}`)}>
            <h2>
            {item.title}
            </h2>
            <Padding />
            <p className="m-0">
                {item.description?.substring(0, 128)}{item?.description?.length! > 128 ? "..." : ""}
            </p>
        </div>
    )
}

export default CardForm