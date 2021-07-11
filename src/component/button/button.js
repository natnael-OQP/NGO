import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const CustomButton = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width:100px;
    max-width: 210px;
    white-space: nowrap;
    /* --------------------------------------------  we can customize BackgroundColor , Color , Padding , Fontsize ,*/
    background: ${({BackgroundColor}) => (
        BackgroundColor ? BackgroundColor : '#75A608'
        )};
    color: ${({Color}) => (
        Color ? Color : '#fff'
        )};
    padding: ${({Big}) => (
        Big?'16px 40px':'12px 24px'
    )};
    font-size: ${({Font}) => (
        Font?Font:'14px '
    )};
    /* ----------------------------------------------------------------X-End-of-customize */
    text-decoration:none;
    border: none;
    box-shadow:1px 2px 8px rgba(0,0,0,0,6);
    cursor: pointer;
    transition:.4s ease all;
    &:hover {
        background-color: #83BA09;
        transform: translateY(-3px);
    }
`