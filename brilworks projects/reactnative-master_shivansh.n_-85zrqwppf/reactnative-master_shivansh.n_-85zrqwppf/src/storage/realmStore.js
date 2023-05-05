import React from 'react';
import Realm from 'realm';

class ToDo extends Realm.Object {}

// todo object
ToDo.schema = {
  name: 'TASKS',
  primaryKey: 'id',
  properties: {
    id: 'int',
    task: 'string',
  },
};

// realm var
let realm = new Realm({schema: [ToDo], schemaVersion: 1});

//  get data function
let getData = () => {
  return realm.objects('TASKS');
};

// set data
let setData = _task => {
  if (!_task) {
    console.error('No task provided');
    return;
  }

  // write new data
  realm.write(() => {
    let _id = 0;
    if (getData().length > 0) _id = realm.objects('TASKS').max('id') + 1;
    try {
      const taskdata = realm.create('TASKS', {
        id: _id,
        task: _task,
      });
    } catch (e) {
      console.error('error:' + e);
    }
  });
};

export {getData as getAllTasks, setData as addTasks};
