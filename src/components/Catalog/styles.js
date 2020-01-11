import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 100%;

  margin-top: 30px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  span {
    color: #fff;
    font-family: Klavika;
    font-weight: bold;
  }
  small {
    color: #fff;
    font-family: Klavika;
  }
`;
export const MovieList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;

  a {
    text-decoration: none;
  }
`;

export const MovieTitle = styled.div`
  span {
    margin-top: 10px;
    font-size: 18px;
    color: #fff;
    font-family: Klavika;
    font-weight: bold;
  }
`;

export const Movie = styled.div`
  width: 225px;
  margin-right: 15px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: baseline;

  div {
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      transform: scale(1.035);
      transition: transform 0.5s;
    }

    > div {
      height: 25%;
      width: 100%;
      position: absolute;
      bottom: 0px;
      left: 0px;
      box-shadow: inset -14px -53px 13px 3px rgba(0, 0, 0, 0.5);
      padding: 5px;

      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      span {
        padding: 0.35rem 0.5rem;
        background-color: #f90;
        text-transform: uppercase;
        color: #212121;
        width: 60px;
        font-size: 12px;
        text-align: center;
        margin-top: 5px;
      }
    }
  }

  div:hover {
    img {
      transform: scale(1.2);
      cursor: pointer;
    }
  }
`;
