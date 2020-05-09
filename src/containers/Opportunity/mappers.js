import _ from 'lodash';
import moment from 'moment';
import {
  HeaderLinearOppColors,
  LinearOpportunityColors,
} from '../../utils/colorConstants';

export const mapOppsByStage = oppsStages => {
  const mappedOppsByStage = [];
  _.forOwn(oppsStages, value => {
    mappedOppsByStage.push({
      stage: value.StageName,
      data: value,
      colors:
        headerGradientColorMapper(mappedOppsByStage.length) ||
        headerGradientColorMapper(0),
    });
  });
  return mappedOppsByStage;
};

export const headerGradientColorMapper = index => HeaderLinearOppColors[index];

export const gradientColorMapper = statusCode => {
  switch (statusCode) {
    case 'Prospecting':
      return LinearOpportunityColors.PROSPECT;
    case 'Proposal':
      return LinearOpportunityColors.PROPOSAL;
    case 'Scoping':
      return LinearOpportunityColors.SCOPE;
    case 'Negotiation':
      return LinearOpportunityColors.NEGOTIATION;
    case 'Contracting':
      return LinearOpportunityColors.CONTRACT;
    default:
      return LinearOpportunityColors.DEFAULT;
  }
};
