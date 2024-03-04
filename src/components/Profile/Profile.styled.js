import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  text-align: center;
  background: rgba(180, 227, 212, 0.22);
  border: 2px solid black;
  margin-bottom: 100px;
  border-radius: 18px;
`;

export const Description = styled.div`
  position: relative;
  background: rgba(142, 227, 212, 0.22);
`;

export const Avatar = styled.img`
  position: absolute;
  transform: translate(-50px, -60px);

  max-height: 92px;
  border-radius: 50%;
  background: #d9d9d9;
  border: 6px solid #ffffff;
`;

export const Name = styled.p`
  margin-top: 50px;
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
