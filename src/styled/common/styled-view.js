import styled from 'styled-components';
import palette from '../../palette';

export const Main = styled.div`
    width: 90%;
    height: 100vh;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NotFound = styled.h1`
    font-size: 30pt;
    color: ${palette.DEFAULT_BKG_COLOR};
    font-family: ${palette.DEFAULT_FONT};
`;
export const ProductBkg = styled.div`
    width: 500px;
    height: 500px;
    background-color: #FFF;
    border: 2px solid ${palette.DEFAULT_BKG_COLOR};
    display: flex;
    align-items: center;
    justify-content: center;
    float: left;
`;

export const ProductImg = styled.img`
    width: 500px;
    height: 500px;
`;

export const Heading2 = styled.h2`
    color: ${palette.DEFAULT_BKG_COLOR};
    font-family: ${palette.DEFAULT_FONT};
    font-size: 15pt;
`;

export const MainInfo = styled.div`
    float: right;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`; 

export const Title = styled.h2`
    color: ${palette.DEFAULT_BKG_COLOR};
    font-family: ${palette.DEFAULT_FONT};
    font-size: 30pt;
    text-align: center;
`;

export const ProdDescriptionSection = styled.div`
    width: 250px;
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const ProdDescriptionParagrah = styled.p`
    font-family: ${palette.DEFAULT_FONT};
    color: ${palette.DEFAULT_BKG_COLOR};
    font-size: 13pt;
    text-align: justify;
    width: 90%;
    word-wrap: wrap;
    margin: auto;
`;

export const InfoLabel = styled.h3`
    font-family: ${palette.DEFAULT_FONT};
    color: ${palette.DEFAULT_BKG_COLOR};
    font-size: 15pt;
    text-align: center;
    margin-top: 15px;
    margin-botto: 15px;
`;

export const ButtonsDiv = styled.div`
    display: flex;
    width: 250px;
    align-items: center;
    justify-content: space-around;
    margin-top: 100px;
`;

export const EditButton = styled.button`
    width: 100px;
    height: 30px;
    border-radius: 20px;
    border: none;
    background-color: #3F7806;
    font-family: ${palette.DEFAULT_FONT};
    font-size: 12pt;
    color: ${palette.DEFAULT_FONT_COLOR};

    &:hover {
        cursor: pointer;
        background-color: #356406;
    }
`;

export const DeleteButton = styled.button`
    width: 100px;
    height: 30px;
    border-radius: 20px;
    border: none;
    background-color: #F32013;
    font-family: ${palette.DEFAULT_FONT};
    font-size: 12pt;
    color: ${palette.DEFAULT_FONT_COLOR};

    &:hover {
        cursor: pointer;
        background-color: #DC160A;
    }
`;