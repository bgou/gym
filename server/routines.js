Meteor.publish("activeRoutines", function () {
  return Routines.find({
    'active': true
  });
});


Meteor.publish("inactiveRoutines", function () {
  return Routines.find({
    'active': false
  });
});
