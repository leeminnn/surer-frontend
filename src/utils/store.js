const cards = [
    {
      id: 'card-1',
      title: 'Finish Assignment 1',
    },
    {
      id: 'card-2',
      title: 'Finish Assignment 2',
    },
    {
      id: 'card-3',
      title: 'Finish Assignment 3',
    },
    {
      id: 'card-4',
      title: 'Finish Assignment 4',
    },
    {
      id: 'card-5',
      title: 'Finish Assignment 5',
    },
    {
      id: 'card-6',
      title: 'Finish Assignment 6',
    },
  ];
  
  const data = {
    lists: {
      'list-1': {
        id: 'list-1',
        title: 'To-Do',
        description: 'Deadline by 20 Aug 2021',
        cards,
      },
      'list-2': {
        id: 'list-2',
        title: 'In-Progress',
        description: 'Deadline by 20 Aug 2021',
        cards: [],
      },
      'list-3': {
        id: 'list-3',
        description: 'Can empty the lists now',
        title: 'Done',
        cards: [],
      },
    },
    listIds: ['list-1', 'list-2', 'list-3'],
  };

  export default data;