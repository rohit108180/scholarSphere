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

            .user-image {
                max-width: 100%;
                border-radius: 50%;
            }
        }
        background-color: var(--white);
        border-radius: 10px;
        padding: 2rem;
    }
    .user-info {
        width: 75%;
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
            /* margin-bottom: 2rem; */
            color: red !important;
            .button{
                background-color: white;
                border: none;
                padding: 1rem;
            }
        }
        border-radius: 10px 10px 0 0 ;
        border-bottom: 1px solid lightgrey;
    }
    .research {
        width: 100%;
        background-color: var(--white);
        border-radius: 0 0 10px 10px;
    }
    .projects {
        width: 100%;
        background-color: var(--white);
        border-radius: 0 0 10px 10px;
    }
    .edit-input {
        /* margin-bottom: 1rem; */
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
