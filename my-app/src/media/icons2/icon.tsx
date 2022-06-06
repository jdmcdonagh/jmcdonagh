import styled, { css } from "styled-components"
import { ReactSVG } from 'react-svg'

const IconStyled = styled(ReactSVG)`
    display: inline-flex;
    width: ${props => `${props.size}px`};
    height: ${props => `${props.size}px`};
    align-items: center;
    justify-content: center;

    span {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    svg {
        fill: black;
        width: 100%;
        height: 100%;
    }
`

export default function Icon(props: any) {
    return (
        <IconStyled
            src= {`.media/icons2/${props.name}.svg`}
            color={props.color || "currentColor"}
            size={props.size}
            wrapper="span"
            {...props}
        />
    )
}