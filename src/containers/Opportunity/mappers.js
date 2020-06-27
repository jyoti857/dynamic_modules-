import _ from 'lodash';
import moment from 'moment';
import {
  HeaderLinearOppColors,
  LinearOpportunityColors,
} from '../../utils/colorConstants';
import {getDateByFormat} from '../../utils/DateFormatter';
import {object} from 'prop-types';

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

export const oppProbabilityStageMapper = (oppStageProbability, oppStage) => {
  if (typeof oppStage !== 'undefined') {
    const stagePropj = _.find(oppStageProbability, {Value: oppStage});
    return stagePropj ? stagePropj.Extra1 || 0 : null;
  }
  return 0;
};

export const objectBuilder = (objectForm, serviceArr) => ({
  Name: objectForm.opp_name,
  OwnerUserId: objectForm.opp_owner ? objectForm.opp_owner : null,
  DealType: objectForm.opp_deal_type,
  DealLength: objectForm.opp_deal_length,
  Amount: objectForm.opp_amount,
  CurrentStage: objectForm.oppStage,
  Probability: objectForm.oppProbability,
  CloseDateMonthYear: false
    ? getDateByFormat(objectForm.opp_close.date, 'MM/YYYY')
    : new Date(),
  LeadSource: objectForm.opp_lead_source ? objectForm.opp_lead_source : null,
  LeadSourceDescription: objectForm.opp_lead_source_description
    ? objectForm.opp_lead_source_description
    : null,
  OrganizationId: objectForm.oppOrganization
    ? objectForm.oppOrganization
    : null,
  IndividualId: objectForm.opp_individual ? objectForm.opp_individual : null,
  OtherContact: objectForm.opp_other_contact
    ? objectForm.opp_other_contact
    : null,
  Comments: objectForm.opp_comments ? objectForm.opp_comments : null,
  Service: serviceArr,
});
