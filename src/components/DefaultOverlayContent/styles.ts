import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;

`

export const Heading = styled.div `
    margin-top: 16.5vh;
    text-align: center;

    > h1 {
        font-weight: 500;
        font-size: 40px;
        line-height: 48px;
        color: #393c41
    }
    > h2 {
        font-weight: normal;
        font-size: 15px;
        line-height: 22px;
        color: #5c5e62
    }
` 

export const Buttons = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 130px;
   

    >button {
        background: #1a1720;
        color: #fff;
        opacity: 0.8;

        font-size: 13px;
        font-weight: 500;
        letter-spacing: 0.4px;
        text-transform: uppercase;

        padding: 12px 35px;
        width: 400px;
        
        border-radius: 20px;
        border: none;
        outline: 0;
        cursor: pointer;

        &.white {
            width: 400px;
            background: #fff;
            color: #000;
            opacity: 0.65;
            margin: 20px 0px -40px 0px;
        }

        & + button {
            margin: 10px 0 0;

       
        }
    }

    @media (min-width: 600px) {
        flex-direction: row;
        margin-bottom: 80px;
    
        > button {
            margin:  -20px 10px 10px; 
            width: 260px;
    
          
         &.white {
            margin:  -20px 10px 10px; 
            width: 260px;
           
        }
    }
`