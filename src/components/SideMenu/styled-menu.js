import styled from 'styled-components';
import palette from '../../palette';

export const MainBar = styled.div`
    position: fixed;
    height: 100%;
    width: 50px;
    background-color: ${palette.DEFAULT_BKG_COLOR};
    transition: .4s;

    .label {
        display: none;
    }
    &:hover {
        transition: .4s;
        width: 200px;

        h1 {
            display: block;
        }

        .label {
            display: block;
            width: 160px;
        }

        ul{
            top: 33px;
        }

        .icon {
            margin: auto 2.5px;
        } 
    }
`; 

export const MenuOptions = styled.ul`
    text-decoration: none;
    color: white;
    position: relative;
    top: 60px;
`;

export const Option = styled.li`
    display: flex;
    font-family: ${palette.DEFAULT_FONT};
    font-weight: 600;
    height: 50px;
    cursor: pointer;
    align-items: center;
    text-indent: 10px;

    &:hover {
        background-color: ${palette.DEFAULT_HOVER_COLOR};
    }

`;

export const Icon = styled.img`
    width: 35px;
    height: 35px;
    margin: 10px auto;
`;

export const Title = styled.h1`
    font-family: ${palette.DEFAULT_FONT};
    font-size: 15pt;
    color: ${palette.DEFAULT_FONT_COLOR};
    text-align: center;
    position: relative;
    width: 100%;
    top: 15px;
    display: none;
`;