import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const Text = styled.p``;

export const ButtonDel = styled.button`
  display: flex;
  align-items: center;
  width: 70px;
  padding: 2px 15px;
  border-radius: 5px;
  background-color: #2248c3;
  color: #ffffff;
  transition: background-color 250ms linear;
  :hover,
  :focus {
    background-color: red;
  }
`;
