import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 400px;
  margin: 0 auto;
  text-align: center;
  background-color: white;
  border: 2px solid black;
  margin-bottom: 100px;
`;

export const Description = styled.div`
  /* display: flex;
  flex-direction: column; */
`;

export const Avatar = styled.img`
  vertical-align: middle;
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 24px;
`;

export const Tag = styled.p`
  font-size: 24px;
`;

export const Location = styled.p`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 0;
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  background-color: #ede6e6;
  height: 60px;
  margin: 0;
  padding: 10px;
  border-top: 2px solid black;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const Quantity = styled.span`
  font-size: 20px;
`;
