import styled from 'styled-components';
import palette from '../../palette';

export const Main = styled.div`
    width: 100%;
    height: 100vh;
    background: ${palette.BLUE_BKG_GRADIENT};
`;

export const InnerContent = styled.div`
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 700px;
    max-width: 750px;
    display: flex;
    flex-direction: column;
`;

export const LogoContainer = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 5px solid ${palette.DEFAULT_FONT_COLOR};
    margin: auto auto 100px auto;
    background-color: ${palette.DEFAULT_BKG_COLOR};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LogoTitle = styled.h1`
    color: ${palette.DEFAULT_FONT_COLOR};
    text-align: center;
    font-family: 'Pacifico', sans-serif;
    font-size: 130px;
`;

export const Slogan = styled.h2`
    font-family: 'Encode Sans SC', sans-serif;
    text-align: center;
    color: ${palette.DEFAULT_FONT_COLOR};
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Acesse = styled.h3`
    font-family: 'Encode Sans SC', sans-serif;
    color: ${palette.DEFAULT_FONT_COLOR};
    font-size: 15pt;
    text-align: center;
    margin: 30px auto;
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: space-around;
    width: 80%;
`;

export const Button = styled.button`
    width: 150px;
    height: 40px;
    border-radius: 30px;
    border: 2px solid ${palette.DEFAULT_FONT_COLOR};
    background-color: ${palette.DEFAULT_BKG_COLOR};
    color: ${palette.DEFAULT_FONT_COLOR};
    font-family: 'Encode Sans SC', sans-serif;
    font-size: 15pt;

    &:hover {
        background-color: ${palette.DEFAULT_HOVER_COLOR};
    }
`;
