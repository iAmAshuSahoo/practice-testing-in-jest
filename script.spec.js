const searchGoogle = require('./script');

const dbMock = [
    'dogs.com',
    'cheesepuff.com',
    'disney.com',
    'dogpictures.com',
  ] 

describe('googleSearch', () => { 
    it('this is a test', () => {
        console.log(searchGoogle("testtest", dbMock));
    })
    
    it('a silly test', () => {
        expect("hello").toBe("hello");
    })
    
    it('search Google', () => {
        expect(searchGoogle("testtest", dbMock)).toEqual([]);
        expect(searchGoogle("dog", dbMock)).toEqual(['dogs.com', 'dogpictures.com']);
    })
    
    it('check undefined and null', () => {
        expect(searchGoogle(undefined, dbMock)).toEqual([]);
        expect(searchGoogle(null, dbMock)).toEqual([]);
    })
    
    it('check max length', () => {
        expect(searchGoogle(".com", dbMock).length).toEqual(3);
    })
})

