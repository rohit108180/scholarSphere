import styled from 'styled-components'

const Wrapper = styled.main`

    .main{
        display: flex;
        flex-direction: row;
        align-items: center;
        .profile{
            height: 150px;
            min-width: 150px;
            max-width: 150px;
            border: 1px solid black;
            border-radius: 50%;
            width: 25%;
            margin-right: 2rem;
        }
        background-color: var(--white);
        padding: 2rem;
    }
    .user-info {
        max-width: 75%;
    }
    .about{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        margin: 2rem 0;
    }
    .main-2 {
        margin-top: 2rem;
        background-color: var(--white);
        .button-group{
            margin-bottom: 2rem;
            .button{
                background-color: white;
                border: none;
                padding: 1rem;
            }
        }
    }
    

    @media (max-width: 600px){
        .main {
            flex-direction: column;
            .profile{
                margin-right: 0;
            }
        }
    }


`

export default Wrapper
