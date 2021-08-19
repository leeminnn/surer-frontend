const cards = [
    {
      id: 'card-1',
      title: 'Finish Assignment 2',
    },
    {
      id: 'card-2',
      title: 'Making sandwich',
    },
  ];
  
  const data = {
    lists: {
      'list-1': {
        id: 'list-1',
        title: 'To-Do',
        cards,
      },
      'list-2': {
        id: 'list-2',
        title: 'In-Progress',
        cards: [],
      },
      'list-3': {
        id: 'list-3',
        title: 'Done',
        cards: [],
      },
    },
    listIds: ['list-1', 'list-2', 'list-3'],
  };

  export default data;