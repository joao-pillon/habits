import { Card } from "./styles";

const CardGroup = ({ group, user, subscribe, unsubscribe }) => {
    return (
        <Card>
            <h2>{ group.name }</h2>
            <div>
                <p>Categoria: { group.category }</p>
                <span>Descrição: { group.description }</span>
            </div>
            {user && ( (user && !group.users_on_group.find(userGroup => userGroup.id === user.id))? (
                <button onClick={ subscribe }>inscrever-se</button>
            ): <button onClick={ unsubscribe } className="button--unsub">desinscrever-se</button> )}
        </Card>
    );
};

export default CardGroup;