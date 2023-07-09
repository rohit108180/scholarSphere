import styled from 'styled-components'

const Wrapper = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: var(--primary-500);
    text-align: center;
    display: flex;
    align-items: center;
    overflow: hidden;
    span{
        margin: auto;
        font-size: 1.2rem;
        letter-spacing: 2px;
        color: white;

        img{
            width: 100%;
            height: 100%;

        }
    }
`

export default Wrapper
