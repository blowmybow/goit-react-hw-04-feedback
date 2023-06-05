import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Button = styled.button`
  width: 100px;
  font-size: 20px;
  line-height: calc(32 / 20);
  padding: 5px;
  border-radius: 5px;
  border: none;
  color: #076fff;
  background-color: #ffda00;
  box-shadow: 0px 2px 15px rgb(3 93 255);

  &:hover,
  &:focus {
    color: #e5d408;
    background-color: #076fff;
    box-shadow: 0px 5px 40px rgb(255 235 3);
    cursor: pointer;
  }
`;
