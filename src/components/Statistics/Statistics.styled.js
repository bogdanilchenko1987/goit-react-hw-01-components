import styled from 'styled-components';

export const StatisticsWrapper = styled.section`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 100px;
  border: 2px solid black;

  background: rgba(142, 227, 212, 0.22);
  border-radius: 18px;
  @media screen and (max-width: 767.98px) {
    width: fit-content;
  }
`;

export const Title = styled.h2`
  text-align: center;
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  padding: 3px;
  border-top: 2px solid black;
  margin: 0;
  background: rgba(180, 227, 212, 0.22);
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  &:first-of-type {
    border-radius: 12px 0 0 12px;
  }
  &:last-child {
    border-radius: 0 12px 12px 0;
  }
  @media screen and (min-width: 768px) {
    width: 128px;
  }
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
