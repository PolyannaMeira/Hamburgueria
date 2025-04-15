import PropTypes from "prop-types";
import { ContainerButton } from "./styles.js"

export function Button({children, ...props}){
    console.log(children, props);
    return <ContainerButton {...props}>{children}</ContainerButton>
}


Button.proptypes = {
    children: PropTypes.string
};