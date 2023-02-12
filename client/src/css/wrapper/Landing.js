import styled from "styled-components";



const Wrapper = styled.main`
  
 
  overflow: hidden;
  .imgg{
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: -1;
    opacity: 1;
  }
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

  .page {
    min-height: calc(100vh- var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: 3rem;
  }

  h2 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  .main-img {
    display: none;
  }

  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }

    .main-img {
      display: block;
    }
  }
`;

export default Wrapper;
