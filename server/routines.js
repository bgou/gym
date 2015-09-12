Meteor.publish("activeRoutines", function() {
  return Routines.find({
    $and: [{'active': {$exists:true}}, {'active': true}]
  });
});

Meteor.publish("inactiveRoutines", function() {
  return Routines.find({
    $or: [{'active': {$exists: false}}, {'active': false }] 
  });
});
