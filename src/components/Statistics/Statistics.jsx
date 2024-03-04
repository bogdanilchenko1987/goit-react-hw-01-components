import PropTypes from 'prop-types';

import getRandomColor from './GetRandomColor';
import {
  Label,
  Percentage,
  StatItem,
  StatList,
  StatisticsWrapper,
  Title,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsWrapper>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatItem key={id} style={{ backgroundColor: getRandomColor() }}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </StatItem>
          );
        })}
      </StatList>
    </StatisticsWrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
