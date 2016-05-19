import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr('string'),
  breed: attr('string'),
  age: attr('number'),
  personality: attr('string')

});
