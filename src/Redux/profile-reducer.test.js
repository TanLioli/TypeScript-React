const { default: profileReducer, addPostActionCreator } = require("./profile-reducer");

test('new Post lenght on post should ', () => {
    let action = addPostActionCreator('it-konopelko');
    let state = {
        posts: [
            {id: 0, message: 'Hi Andrey!', likesCount: 7},
            {id: 0, message: 'Hi Sergey!', likesCount: 2}
          ]
        };

    let newState = profileReducer(state, action)
    expect(newState.posts.lenght).toBe(5);
  });

