import styled from "styled-components/macro";
import { device } from "../../../utils/breakpoints";
import { ButtonBase, LoginV1 } from "../../buttons/styles/buttons";

export const Container = styled.div`
    width: 100%;
    height: 0;
`;

export const Multimedia = styled.div`
    left: 0px;
    opacity: 1;
    position: fixed;
    right: 0px;
    top: 0px;
    transition: opacity 200ms ease 0s;
    width: 100%;
    z-index: -1;
`;

export const Background = styled.div`
    background-image: linear-gradient(transparent, rgb(26, 29, 41));
    position: absolute;
    inset: 0px;
`;

export const Image = styled.img`
    width: 100%;
    opacity: 0.9; /* modificar */
    transition: opacity 1500ms ease 0s;
    width: 100vw;

    /* ${({ viewport }) => (viewport?.y < -200 && viewport?.y > -300) && `
        opacity: 0.6;
    `} */

    /* ${({ viewport }) => (viewport?.y < -301 && viewport?.y > -400) && `
        opacity: 0.4;
    `}

    ${({ viewport }) => (viewport?.y < -401) && `
        opacity: 0.2;
    `} */

    ${({ viewport }) => (viewport?.y < -201) && `
        opacity: 0.2;
    `}
`;

export const Section = styled.div`
    background-color: transparent;
    padding: 0 10%;
    margin-top: 70px;
    min-height: 100vh;

    /* season */
    overflow: hidden;

    @media ${device['sm']}{
        padding: 0 7%;
    }

    @media ${device['xl']}{
        padding: 0 5%;
    }
`;

export const TabGroup = styled.div`
    margin-top: 25px;
    margin-bottom: 80px;
`;

export const Information = styled.div`

`;

export const Logo = styled.img`
    max-width: 341px;
    min-width: 100px;
    width: 35vw;
    padding-top: 56px;
`;

export const TagGroup = styled.div`
    margin-top: 15px;
`;

export const TagRow = styled.p`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 5px;
`;

export const Tag = styled.span`
    padding-right: 10px;
    font-size: 12px;
`;

export const ImageTag = styled.img`
    height: 20px;
`;

export const TagGenres = styled.span`
    font-size: 12px;
`;

export const ButtonGroup = styled.div`
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
    margin-top: 30px;
    margin-bottom: 20px;
    justify-content: space-between;

    button {
        margin: 5px 0;
    }

    a {
        margin: 5px 0;
        margin-right: 10px;
    }

    @media ${device['xs']}{
        justify-content: start;

        button:first-child {
            margin-right: 10px;
        }
    }
`;

export const ButtonSubGroup = styled.div`
    display: flex;
    align-items: center;

    button{
        margin-left: 0px;
        margin-right: 10px;
    }



    @media ${device['xs']}{
        button {
            margin-left: 10px;
            margin-right: 0px;
        }
    }
`;

export const SignUpButton = styled(ButtonBase)`
    width: 200px;
    background-color: var(--blue-1);
    height: 44px;
    display: inline-flex;

    &:hover { 
        background-color: var(--blue-2);
    }
`;

export const PlayButton = styled.button`
    text-transform: uppercase;
    background-color: var(--white);
    color: var(--black-1);
    height: 44px;
    border: 2px solid var(--white);
    padding: 0 15px;
    border-radius: 5px;
    outline: none;
    text-decoration: none;
    font-size: 15px;
    font-weight: bold;
    line-height: 0px;
    transition: all 0.5s ease;
    letter-spacing: 1.1px;
    text-align: center;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 34px;
        height: 34px;
        margin-right: 10px;
    }

    &:hover {
        border: 2px solid var(--gray-6);
        background-color: var(--gray-6);
    }

    @media ${device['xs']}{
        padding: 0 20px;
    }
`;

export const TrailerButton = styled.button`
    text-transform: uppercase;
    background-color: var(--black-4);
    color: var(--white);
    height: 44px;
    width: 110px;
    border: 2px solid var(--white);
    border-radius: 5px;
    outline: none;
    text-decoration: none;
    font-size: 15px;
    font-weight: bold;
    line-height: 0px;
    transition: all 0.5s ease;
    letter-spacing: 1.1px;
    text-align: center;
    cursor: pointer;
    
    &:hover {
        background-color: var(--gray-5);
        border: 2px solid var(--gray-5);
        color: var(--black-1);
    }

    @media ${device['xs']}{
        width: 120px;
    }
`;

export const AddListButton = styled.button`
    height: 44px;
    width: 44px;
    border: none;
    outline: none;
    border-radius: 50%;
    border: 2px solid var(--white);
    transition: all 0.5s ease;
    font-size: 30px;
    line-height: 0px;
    background-color: var(--black-4);
    color: var(--white);

    &:hover {
        background-color: var(--white);
        border: 2px solid var(--white);
        color: var(--black-1);
    }
`;

export const GroupWatchButton = styled.button`
    height: 45px;
    width: 45px;
    border: none;
    outline: none;
    border-radius: 50%;
    border: 2px solid var(--black-1);
    transition: all 0.5s ease;
    filter: invert(1);

    svg {
        width: 100%;
    }

    &:hover {
        border: 2px solid var(--white);
        filter: invert(0);
    }
`;

export const Overview = styled.p`
    font-size: 20px;
    max-width: 874px;
    line-height: 1.2;

    @media ${device['lg']}{
        line-height: 1.5;
    }
`;
