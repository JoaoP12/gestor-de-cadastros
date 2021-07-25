import styled from 'styled-components';
import palette from '../../palette';

export const Main = styled.div`
    height: 110vh;
    width: 95%;
    float: right;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Form = styled.form`
    height: 1000px;
    width: 750px;
    background: ${palette.BLUE_BKG_GRADIENT};
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FormTitle = styled.h1`
    font-size: 25pt;
    font-family: ${palette.DEFAULT_FONT};
    color: ${palette.DEFAULT_FONT_COLOR};
    margin-bottom: 30px;
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 500px;
    justify-content: space-between;
    align-items: center;
`;

export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const SectionTitle = styled.h2`
    font-size: 20pt;
    font-family: ${palette.DEFAULT_FONT};
    color: ${palette.DEFAULT_FONT_COLOR};
    margin-top: 10px;
`;

export const RadioGroup = styled.fieldset`
    display: flex;
    width: 500px;
    align-items: center;
    border: none;
    justify-content: space-between;
    margin-bottom: 30px;
`;
export const RadioOption = styled.div`
    display: flex;
    width: 180px;
    align-items: center;
    text-indent: 10px;
`;

export const RadioButton = styled.input`
    width: 15px;
    height: 15px;
`;

export const Label = styled.label`
    font-size: 15pt;
    color: ${palette.DEFAULT_FONT_COLOR};
    font-family: ${palette.DEFAULT_FONT};
    margin-bottom: 3px;
`;

export const LargeTextInput = styled.input`
    width: 500px;
    height: 30px;
    border-radius: 10px;
    font-size: 13pt;
    border: none;
    margin-bottom: 15px;
    text-align: center;
`;

export const NormalTextInput = styled.input`
    width: 320px;
    height: 30px;
    border-radius: 10px;
    font-size: 13pt;
    border: none;
    margin-bottom: 15px;
    text-align: center;
`;

export const SmallTextInput = styled.input`
    width: 150px;
    height: 30px;
    border-radius: 10px;
    font-size: 13pt;
    border: none;
    margin-bottom: 15px;
    text-align: center;
`;

export const SubmitButton = styled.input`
    width: 150px;
    height: 35px;
    font-size: 13pt;
    color: ${palette.DEFAULT_FONT_COLOR};
    font-family: ${palette.DEFAULT_FONT};
    border: 2px solid ${palette.DEFAULT_FONT_COLOR};
    border-radius: 20px;
    background: ${palette.DEFAULT_BKG_COLOR};
    margin-top: 30px;

    &:hover {
        cursor: pointer;
        background-color: ${palette.DEFAULT_HOVER_COLOR};
    }
`;