import React from 'react'
// styled component
import styled from 'styled-components';
// react router 
import {Link} from 'react-router-dom'

const FormWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: #05A35C;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const Icon = styled(Link)`
    width:90px;
    height:50px;
    position: absolute;
    top: 10px;
    left:20px;
    
`;

const Logo = styled.img`
    width:100%;
    height:100%;
    object-fit: contain;
    transition: all 0.5s ease-in-out;
    &:hover{
        transform: translateX(4px);
    }
`;

const Form = styled.form`
    width: 400px;
    padding :4rem 1.5rem;
    background-color: #000;
    color: #fff;
    border-radius: .4rem;
    display: flex;
    align-items : flex-start;
    flex-direction: column;
    @media (max-width:768px){
        width:300px;
        padding :2rem 1.1rem;
    }
`;

const FormH1 = styled.h2`
    letter-spacing: .03rem;
    font-size: 1.1rem;
    line-height:24px;
    font-weight: 500;
    text-transform: capitalize;
    text-align: center;
    width:100%;
    margin-bottom: 2rem;
    @media (max-width:768px){
        font-size:.9rem;
    }
`;

const FormLabel = styled.label`
    font-size: .9rem;
    margin-bottom: .3rem;
    text-transform: capitalize;
    @media (max-width:768px){
        font-size: .8rem;
    }
`;

const FormInput = styled.input`
    width: 100%;
    height:40px;
    display: flex;
    align-items: center;
    padding: 1rem .8rem;
    font-size: 1rem;
    outline: none;
    border-radius:4px;
    margin-bottom:1.5rem;
    @media (max-width:768px){
        height: 30px;
        margin-bottom:1rem;
    }
`;

const Btn = styled.button`
    width: 100%;
    height:40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem .7rem;
    font-size: 1.1rem;
    border-radius:4px;
    margin-bottom:1.5rem;
    margin-top:.7rem;
    cursor: pointer;
    background-color:#05A35C;
    color:#fff;
    font-weight: 500;
    @media (max-width:768px){
        height: 30px;
        margin-bottom:1rem;
    }
`;

const Text = styled.p`
    font-size: .8rem;
    cursor: pointer;
    text-align:center;
    text-transform: capitalize;
    width: 100%;
    transition: all .5s ease-in-out;
    &:hover {
        color:#05A35C;
        transform: scale(1.1);
    }
`;




const Donate = () => {
    return (
        <>
            <FormWrapper>
                <Icon to="/" >
                    <Logo src="data:image/webp;base64,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" alt="Charity Logo" />
                </Icon>
                <Form action="#">
                    <FormH1>sign in to your account</FormH1>
                    <FormLabel htmlFor='for' >email</FormLabel>
                    <FormInput type='email' placeholder="Email Address" required />
                    <FormLabel htmlFor='for' >Password</FormLabel>
                    <FormInput type='Password' required />
                    <Btn type='submit' >Login</Btn>
                    <Text>forgot password</Text>
                </Form>
            </FormWrapper>
        </>
    )
}

export default Donate
