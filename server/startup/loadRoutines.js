Meteor.startup(function () {
  if (Routines.find().count() === 0) {
    var routines = [
      {'name': 'Love your abs',
        'workouts': [
          {'description': 'push up', 'reps': "5,10,15,20"},
          {'description': 'push up', 'reps': "5,10,15,20"},
          {'description': 'push up', 'reps': "5,10,15,20"}
        ]},
      {'name': 'All dubstep all the time',
        'workouts': [
          {'description': 'push up', 'reps': "5,10,15,20"},
          {'description': 'push up', 'reps': "5,10,15,20"}
        ]},
      {'name': 'Savage lounging',
        'workouts': [
          {'description': 'push up', 'reps': "5,10,15,20"}
        ]}
    ];
    for (var i = 0; i < routines.length; i++)
      Routines.insert(routines[i]);
  }
});
