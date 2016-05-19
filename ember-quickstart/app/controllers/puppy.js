import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createPuppy: function(){
      var name = this.get('newName');
      var breed = this.get('newBreed');
      var age = this.get('newAge');
      var personality = this.get('newPersonality');

      var puppy = this.store.createRecord('puppy', {
        name: name,
        breed: breed,
        age: age,
        personaity: personality
      });
      this.set('newName', '');
      this.set('newBreed', '');
      this.set('newAge', '');
      this.set('newPersonality', '');

      puppy.save();
      console.log(puppy);
    }
  }
});



