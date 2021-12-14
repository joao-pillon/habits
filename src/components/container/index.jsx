import {ThisContainer} from "./styles.js"

const Container = ({children}) =>{
    return(
        <ThisContainer>
            {children}
        </ThisContainer>
        )
}
export default Container