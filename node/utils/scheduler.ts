import cron from 'node-cron'

export function createScheduler() {
  cron.schedule('* * * * *', () => {
    // Here you can add functions that execute requests for certain routes.
    // Example:
    // var axios = require('axios');
    // var config = {
    //   method: 'post',
    //   url: '',
    //   headers: { }
    // };
    // axios(config)
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  })
}
