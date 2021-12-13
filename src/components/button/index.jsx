import {ThisButton} from "./styles.js"

const Button = ({children, click}) =>{
    return(
        <ThisButton onClick={click}>
            {children}
        </ThisButton>
        )
}
export default Button