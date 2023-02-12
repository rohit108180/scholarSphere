import styled from 'styled-components'

const Wrapper = styled.main`
    width: 100%;

    .trending-sidebar-container{
    width: 100%;
 
    background-color: white;
    border-radius: 20px;
    box-shadow:  0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
    overflow: hidden;

    
    .trending-heading{
       padding: 1rem;
       border-bottom: 1px solid grey ;
       
    }


    .trending-post-card{
        display: flex;
        align-items: flex-start;
        padding: 0 0.5rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        margin-top: 1rem;

    }

    .trending-post-content{
        width: 85%;
        margin : 0 .5rem;

        .card-heading{
            font-weight: 600;
        }

        .subtitle{
            font-size: 0.8rem;
        }
        
    }
    }
`

export default Wrapper
