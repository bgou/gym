Meteor.startup(function () {
  if (Routines.find().count() === 0) {
    var routines = [
      {'name': 'Love your abs',
       'active': true,
        'workouts': [
          {'description': 'push up', 'reps': "5,10,15,20"},
          {'description': 'push up', 'reps': "5,10,15,20"},
          {'description': 'push up', 'reps': "5,10,15,20"}
        ]},
      {'name': 'All dubstep all the time',
       'active': false,
        'workouts': [
          {'description': 'push up', 'reps': "5,10,15,20"},
          {'description': 'push up', 'reps': "5,10,15,20"}
        ]},
      {'name': 'Savage lounging',
       'active': true,
        'workouts': [
          {'description': 'push up', 'reps': "5,10,15,20"}
        ]}
    ];
    for (var i = 0; i < routines.length; i++)
      Routines.insert(routines[i]);
  }
});
