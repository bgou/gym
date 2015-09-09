Meteor.startup(function () {
  if (Routines.find().count() === 0) {
    var routines = [
      {'name': 'Dubstep-Free Zone',
        'description': 'Fast just got faster with Nexus S.'},
      {'name': 'All dubstep all the time',
        'description': 'Get it on!'},
      {'name': 'Savage lounging',
        'description': 'Leisure suit required. And only fiercest manners.'}
    ];
    for (var i = 0; i < routines.length; i++)
      Routines.insert({name: routines[i].name, description: routines[i].description});
  }
});
