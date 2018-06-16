import React from 'react';
import fetch from 'isomorphic-fetch';

let fetchData = () =>{ 
    return fetch('http://localhost:3001/movies/1') 
      .then(function (resp) { return resp.json(); })
}

test('Can fetch the first movie', async () => {
    expect.assertions(1);
    const data = await fetchData();
    expect(data).toEqual({"currency": "THB", "director": "Taika Waititi", "genre": "Action, Adenture, comedy", "id": 1, "image": "1.jpg", "plot": "Thor is imprisoned on the planet Sakaar, and must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.", "prices": {"normal": 200, "sofa": 600, "superior": 300}, "stars": "Chris Hemsworth, Tom Hiddleston, Cate Blanchett, Mark Ruffalo", "title": "Thor"});
});