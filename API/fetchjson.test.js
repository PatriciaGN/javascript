const fetchJson = require('./fetchJson');

describe('fetchJson', () => {
    const mockedApi = {
        fetchJson: (url, callback) => {
          callback({ 
            userId: 1, 
            id: 1, 
            title: 'delectus aut autem', 
            completed: false 
        });
    });
  it('parses the response to a JS object', (done) => {
    fetchJson('https://jsonplaceholder.typicode.com/todos', (response1) => {
      expect(response1).toContain(
        { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
      );
      done();
    });
  });

  //   xit('fails with an error', async () => {
  //     expect.assertions(1);
  //     try {
  //       await fetchJson();
  //     } catch (e) {
  //       expect(e).toMatch('error');
  //     }
  //   });
});
