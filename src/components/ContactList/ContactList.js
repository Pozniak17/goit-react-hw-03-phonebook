import styled from 'styled-components';

// ul
export const List = styled.ul`
  width: min-content;

  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 30px;
  display: flex;

  flex-wrap: wrap;

  /* border: 1px solid black; */
`;

// li
export const ContactItem = styled.li`
  margin-right: 10px;
  margin-top: 10px;
  display: flex;
  border: 1px solid black;
  width: 280px;
  background-color: #b9b2be;
  padding: 20px;
  border-radius: 12px;
  justify-content: space-between;
  align-items: center;
`;

// p
export const ContactText = styled.p``;

export const ContactButton = styled.button`
  font-weight: 600;
  padding: 8px 15px 8px 15px;
  border-radius: 10px;
  border: gray;
  border: 1px solid black;

  cursor: pointer;

  &:hover {
    background: navy;
    color: white;
  }
`;
