import styled from 'styled-components';

export const StatisticsWrapper = styled.section`
  width: 400px;
  margin: 0 auto;
  margin-bottom: 100px;
  border: 2px solid black;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  border-top: 2px solid black;
  margin: 0;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const Percentage = styled.span`
  font-size: 20px;
  text-align: center;
`;
