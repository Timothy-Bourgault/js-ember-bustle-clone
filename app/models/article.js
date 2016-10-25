import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr(),
  title: DS.attr(),
  description: DS.attr(),
  author: DS.attr(),
  date: DS.attr()
});
