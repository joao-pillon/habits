import { Card } from "./styles";

const CardGroup = ({ group }) => {
    return (
        <Card>
            <h2>{ group.name }</h2>
            <div>
                <p>Categoria: { group.category }</p>
                <span>Descrição: { group.description }</span>
            </div>
        </Card>
    );
};

export default CardGroup;