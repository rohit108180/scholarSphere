import styled from "styled-components";

const Wrapper = styled.main`
  .feed-page {
    width: 100%;

    display: flex;
    justify-content: space-around;
    /* background-color: black; */

    .posts {
      width: 65%;
      margin: 0 2rem ;

      .post-something {
        /* display: none; */
        background-color: white;

        width: 100%;
        height: 6rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-radius: 10px;
        box-shadow: var(--shadow-1);
        margin: 2rem 0;
        padding: 1rem;

   

        .form-input {
          width: 70%;
          border-radius: 50px;
          height: 3rem;
          /* display: none; */
        }

        &.expanded {
          flex-direction: column;
          gap: 10px;
          height: fit-content;

          .form-input{
            width: 90%
          }
        }

      }
      .hr {
        margin: 2rem 0;
        margin-bottom: 0;
      }
    }
    .feed-page::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
    .likes {
      font-size: 1rem;
      margin: 5px;
    }

    .trending-sidebar {
      width: auto;
    }
  }

  @media (max-width: 992px) {
    .trending-sidebar {
      display: none;
    }

    .feed-page {
      .posts {
        width: 100%;
      }
    }
  }
`;

export default Wrapper;
