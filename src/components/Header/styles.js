import styled from "styled-components";

export const Container = styled.div`
  background: #111;
  height: 70px;
  width: 100%;
  box-shadow: 6px 6px 20px 0 rgba(52, 52, 52, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #0091d8;

  img {
    margin-left: 20px;
    height: 40px;
  }

  aside {
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    input,
    select {
      margin-left: 10px;
      background: #111;
      outline: none;
      border: 0;
      height: 25px;
      color: #0091d8;
      font-size: 16px;

      &::placeholder {
        color: rgb(0, 57, 85);
      }
    }
  }
`;
