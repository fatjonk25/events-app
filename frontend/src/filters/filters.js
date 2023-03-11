import Vue from 'vue'
import moment from 'moment/moment';

Vue.filter('formatDate', function(value, arg1) {
  if(value) {
    const formater = arg1 != null ? arg1 : 'DD MMM, YYYY'
    return moment(String(value)).utc().format(formater);
  }
})

Vue.filter('formatTime', function(value,arg1) {
  if(value) {
    const formater = arg1 != null ? arg1 : 'h:mm a'
    return moment(String(value)).utc().format(formater)
  }
})
