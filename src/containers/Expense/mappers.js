import _ from 'lodash';
import {ExpenseColors} from '../../utils/colorConstants';

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
