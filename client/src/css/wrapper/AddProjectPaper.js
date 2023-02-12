import styled from "styled-components";

const Wrapper = styled.aside`
  .toggle {
  }
  form {
    width: 70%;
    margin: 50px auto;
    padding: 30px;

    border-radius: 10px;
   
  }
  label {
    display: block;
    margin-bottom: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  input[type="text"]{
    width: 100%;

    padding: 10px;
    font-size: 16px;
    margin-bottom: 20px;
    border: 1px solid lightgray;
    border-radius: 5px;
  }
  textarea {
    width: 100%;
    height: 10rem;
    padding: 10px;
    font-size: 16px;
    margin-bottom: 20px;
    border: 1px solid lightgray;
    border-radius: 5px;
  }
  input[type="date"] {
    width: 30%;
    margin-left: 3px;
    margin-right: 3px;
    padding: 10px;
    font-size: 16px;
    margin-bottom: 20px;
    border: 1px solid lightgray;
    border-radius: 5px;
  }

  button[type="submit"] {
    width: 100%;
    padding: 10px;
    font-size: 18px;
   
    color: white;
    border: none;
    border-radius: 5px;

  }

  .radio{
    margin: .5rem;
  }
`;
export default Wrapper;
