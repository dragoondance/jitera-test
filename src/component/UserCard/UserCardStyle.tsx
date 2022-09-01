import styled from 'styled-components'

const Card = styled.div`
    position: relative;
    width: 22.5%;
    margin: 1%;
    background-color: #F5F5F5;
    border: 1px solid #FDFDFD;
    @media only screen and (max-width: 640px) {
        flex: 0 1 100%;
        max-height: 100%;
    }
    @media only screen and (max-width: 320px) {
        flex: 0 1 100%;
        max-height: 100%;
    }
`;

const InfoWrapper = styled.div`
    background-color: #FFFFFF;
    flex-direction: column;
    padding: 1rem;
    border: 1px solid #FDFDFD;
`
const NameWrapper = styled.div`
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    font-weight: bold;
`

const DescWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    min-height: 1.5rem;
    justify-content: flex-start;
    text-align: left;
    margin-top: 0.5rem;
`

const TextStyled = styled.div`
    margin-left: 1rem;
    color: #5B5B5B;
`

const OptionsWrapper = styled.div`
    background-color: #F5F5F5;
    border: 1px solid #FDFDFD;
    flex-direction: row;
    padding: 1rem;
    justify-content: space-between;
    display: flex;
`
const StyledButton = styled.div`
    justify-content: center;
    align-items: center;
    flex: 1;
    text-align: center;
`

const ButtonSeparator = styled.div`
    background-color: #5B5B5B;
    width: 2px;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
`

const ModalWrapper = styled.div`
    min-height: 25%;
    max-height: 50%;
    padding: 2rem;
`

const YesNoButtonWrapper = styled.div`
    flex-direction: row;
    padding: 1rem;
    display: flex;
`

const TextButton = styled.div`
    padding: 0.5rem;
    background-color: #CECECE;
    border: 1px solid #9fa81e;
    flex: 1;
    margin: 1rem;
    text-align: center;
    border-radius: 48px;
`

export {
    Card,
    InfoWrapper,
    NameWrapper,
    DescWrapper,
    TextStyled,
    OptionsWrapper,
    StyledButton,
    ButtonSeparator,
    ModalWrapper,
    YesNoButtonWrapper,
    TextButton,
}