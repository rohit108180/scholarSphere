import styled from 'styled-components'

const Wrapper = styled.div`
    .card {
        width: 100%;
        border-radius: 10px; 
        height: 20rem
       
    }
    
    .card-header {
        display: flex;
        align-items: center;
        height: 60px;
        margin: 0.5rem 0rem;
    }

    .circle {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        /* margin: 1rem; */
    }

    .bar{
        width: 100%;   
        height: 50px;
        border-radius: 10px;
        /* margin: 1rem; */
    }

    .block{
        width: 100%;
        height: 18rem;
        /* margin: 1rem; */
    }
`

export default Wrapper
