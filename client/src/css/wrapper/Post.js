import styled from "styled-components";

const Wrapper = styled.aside`
  .toggle {
  }
  .viewpost {
    width: 600px;
    margin: 50px auto;
    padding: 30px;
    border: 1px solid lightgray;
    border-radius: 10px;
    box-shadow: 2px 2px 10px gray;
  }
  form {
    width: 500px;
    margin: 50px auto;
    padding: 30px;
    border: 1px solid lightgray;
    border-radius: 10px;
    box-shadow: 2px 2px 10px gray;
  }
  label {
    display: block;
    margin-bottom: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  input[type="text"],
  textarea {
    width: 100%;
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
    background-color: var(--primary-500);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;
export default Wrapper;
