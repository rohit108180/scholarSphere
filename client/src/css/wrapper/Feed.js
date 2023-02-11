import styled from 'styled-components'

const Wrapper = styled.main`

    .feed-page{
      display: flex;
      .posts{
        width: 65%;
        .post-something{
          /* display: none; */
          background-color: white;
       
          width: 100%;
          height: 6rem;
          display: flex;
          align-items: center;
          justify-content: space-around;
          border-radius: 10px;
          box-shadow: var(--shadow-1);


          .form-input{
            width: 70%;
            border-radius:50px ;
            height: 3rem;
            /* display: none; */
          }
        }
        
      }
      
    }
    
`

export default Wrapper
