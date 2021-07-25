import styled from 'styled-components';
import palette from '../../palette';

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    float: right;
    margin: auto;
`;

export const Header = styled.header`
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    width: 100%;
    height: 300px;
`;

export const PageTitle = styled.h1`
    font-family: ${palette.DEFAULT_FONT};
    color: ${palette.DEFAULT_BKG_COLOR};
    font-weight: bold;      
    grid-row-start: 2;
    grid-row-end: 2;
    text-indent: 15px;
`;

export const Search = styled.div`
    width: 580px;
    height: 45px;
    display: flex;
    justify-content: space-around;
    grid-row-start: 3;
    align-items: center;
    border-radius: 20px;
    background-color: ${palette.DEFAULT_BKG_COLOR};
`;

export const SearchField = styled.input`
    width: 500px;
    height: 35px;
    font-size: 15pt;
    border: 2px solid ${palette.DEFAULT_BKG_COLOR};
    border-radius: 20px;
    text-indent: 13px;
`;

export const SearchButton = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    background-color: ${palette.DEFAULT_BKG_COLOR};
    background-position: center;
    background-image: url('./img/search_icon.png');
    cursor: pointer;

    &:hover {
        background-color: ${palette.DEFAULT_FONT_COLOR};
        background-image: url('./img/search_icon_blue.png');
    }
`;

export const List = styled.div`
    width: 800px;
    margin: auto;
`;

export const Table = styled.table`
    text-align: center;
    border-collapse: collapse;
    width: 100%;
    margin: 0 auto;
    
    tr:last-child td:last-child{
        border-bottom-right-radius: 15px;
    }

    tr:last-child td:first-child{
        border-bottom-left-radius: 15px;
    }

    tr:first-child td:first-child{
        border-top-left-radius: 15px;
    }

    tr:first-child td:last-child{
        border-top-right-radius: 15px;
    }

    .header {
        color: ${palette.DEFAULT_FONT_COLOR};
        background-color: ${palette.DEFAULT_BKG_COLOR};
    }

    tr:hover {
        background-color: ${palette.HOVER_GRAY};
        cursor: pointer;
    }
`;

export const Cell = styled.td`
    font-weight: bold;
    font-family: ${palette.DEFAULT_FONT};
    height: 30px;
`;

export const CreateButton = styled.button`
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background-image: url('./img/plus_icon.png');
    background-position: center;
    background-repeat: no-repeat;
    border: none;
    background-color: ${palette.DEFAULT_BKG_COLOR};
`;
    
export const Create = styled.div`
    width: 230px;
    height: 45px;
    background-color: ${palette.DEFAULT_BKG_COLOR};
    display: flex;
    border-radius: 20px;
    grid-row-start: 4;
    align-items: center;
    justify-content: space-around;

    h2 {
        text-indent: -10px;
        font-family: ${palette.DEFAULT_FONT};
        color: ${palette.DEFAULT_FONT_COLOR};
        font-weight: 500;
        font-size: 15pt;
        
    }

    &:hover{
        cursor: pointer;
        background-color: ${palette.DEFAULT_HOVER_COLOR};
        button {
            background-color: ${palette.DEFAULT_HOVER_COLOR};
        }
    }
`;