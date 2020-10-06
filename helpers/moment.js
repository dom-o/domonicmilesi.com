const Moment = require('moment')

module.exports = function(date, format) {
  return Moment(date, "MM/DD/YYYY").format(format);
}
