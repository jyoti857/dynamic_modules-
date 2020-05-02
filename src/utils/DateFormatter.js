import moment from 'moment';
export const getFormatedDate = date => moment(date).format('L LT');

export const getDateByFormat = (date, format) => moment(date).format(format);

export const getDateBefore = days =>
  moment()
    .subtract(days, 'days')
    .calendar();
