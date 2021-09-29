const {format} = require('date-fns');

exports.handler = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      today: format(new Date(), "👉️ 'Today is a' eeee"),
    }),
  };
};
