import styled from 'styled-components/macro';
import { device } from '../../../utils/breakpoints';

export const Container = styled.img`

    ${({ isHero }) => !isHero && `
        @media ${device['xxs']}{
        width: 64px;
        }
    
        @media ${device['md']}{
        width: 100%;
        min-width: 64px;
        max-width: 80px;
        }
    `}


    ${({ isHero }) => isHero && `
        width: 100%;
        height: auto;

        @media (min-width: 768.1px){
            width: 160px;
        }
    `}
`;
