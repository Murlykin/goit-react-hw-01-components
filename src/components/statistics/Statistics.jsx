import PropTypes from 'prop-types';
import {
  Statistic,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from 'components/statistics/Statistics.styled';

function getRandomHexColor() {
  let color = `#${Math.floor(Math.random() * 12345678).toString(16)}`;
  return color;
}

const Statistics = ({ title, stats }) => {
  return (
    <Statistic>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(stat => (
          <Item
            style={{
              backgroundColor: getRandomHexColor(),
            }}
            key={stat.id}
          >
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </Statistic>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
