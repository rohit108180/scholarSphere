import styled from 'styled-components'

const Wrapper = styled.main`

    .feed-page{
      width: 100%;
   
      display: flex;
      justify-content: space-around;
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
        .hr{
          margin : 2rem 0;
        }
        
      }
      .feed-page::-webkit-scrollbar { 
        display: none;  /* Safari and Chrome */
      }
      .likes{
        font-size: 1rem;
        margin: 5px;
      }

      .trending-sidebar{
        width: 30%;
      }
      
    }
    
`

export default Wrapper
