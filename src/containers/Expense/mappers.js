import _ from 'lodash';
import {ExpenseColors, LINEAR_EXPE_COLORS} from '../../utils/colorConstants';

export const mapGroupedStatusCodeRole = (expenseStatus, expenseCodeRole) => {
  const mappedStatus = [];
  if (expenseCodeRole) {
    expenseStatus.forEach(d => {
      const filterData = _.filter(expenseCodeRole, {Value: d.Status})[0];
      d.Description = filterData.Text;
      mappedStatus.push(d);
    });
  }
  return mappedStatus;
};

export const statusColorMapper = statusCode => {
  switch (statusCode) {
    case 'ALL':
      return ExpenseColors.ALL;
    case 'NEW':
    case 'SAVE':
      return ExpenseColors.SAVED;
    case 'SUBM':
      return ExpenseColors.SUBMITED;
    case 'APPR':
    case 'MAPR':
    case 'AAPR':
      return ExpenseColors.APPROVED;
    case 'REJE':
    case 'MREJ':
    case 'AREJ':
      return ExpenseColors.REJECTED;
    default:
      return ExpenseColors.ALL;
  }
};

export const gradientColorMapper = statusCode => {
  switch (statusCode) {
    case 'ALL':
      return LINEAR_EXPE_COLORS.ALL;
    case 'NEW':
    case 'SAVE':
      return LINEAR_EXPE_COLORS.SAVED;
    case 'SUBM':
      return LINEAR_EXPE_COLORS.SUBMITED;
    case 'APPR':
    case 'MAPR':
    case 'AAPR':
      return LINEAR_EXPE_COLORS.APPROVED;
    case 'REJE':
    case 'MREJ':
    case 'AREJ':
      return LINEAR_EXPE_COLORS.REJECTED;
    default:
      return LINEAR_EXPE_COLORS.ALL;
  }
};
