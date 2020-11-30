import moxios from 'moxios';

import { getAlbums } from './jsonPlaceholder';

describe('moxios tests', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('calls the getAlbums callback on axios response', async () => {
    const albums = [
        {
          "userId": 1,
          "id": 1,
          "title": "quidem molestiae enim"
        },
        {
          "userId": 1,
          "id": 2,
          "title": "sunt qui excepturi placeat culpa"
        }];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: albums,
      });
    });

    const mockSetSecretWord = jest.fn();

    await getAlbums(mockSetSecretWord);

    expect(mockSetSecretWord).toHaveBeenCalledWith(albums);
  });
});