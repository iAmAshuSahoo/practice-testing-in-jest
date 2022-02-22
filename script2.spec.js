const fetch = require('node-fetch');
const swapi = require('./script2');

it ('calls to get star war people', () => {
    expect.assertions(1);
    return swapi.getPeople(fetch)
    .then(data => {
        expect(data.count).toEqual(82);
    })
})

it ('calls to get star war people Test Assertions', () => {
    expect.assertions(2);
    return swapi.getPeople(fetch)
    .then(data => {
        expect(data.count).toEqual(82);
        expect(data.results.length).toBeGreaterThan(5);
    })
})

it ('get mocks', () => {
    const mockFetch = jest.fn()
        .mockReturnValue(Promise.resolve({
            json: () => Promise.resolve({
                count: 87,
                results: [0,1,2,3,4,5]
            })
        }))

    expect.assertions(4)
    return swapi.getPeoplePromise(mockFetch).then(data => {
        console.log(mockFetch.mock)
        expect(mockFetch.mock.calls.length).toBe(1);
        expect(mockFetch).toBeCalledWith('https://swapi.dev/api/people')
        expect(data.count).toEqual(87);
        expect(data.results.length).toBeGreaterThan(5);
    })
})