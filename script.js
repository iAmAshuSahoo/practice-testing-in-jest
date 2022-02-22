const searchDb = [
    'catsarray.com',
    'hellocats.com',
    'ashukipriya.com',
    'thisistest.com'
]

const searchGoogle = (searchVal, search) => {
    let match = search.filter(url => url.includes(searchVal));
    // console.log(match);
    return match.length > 3 ? match.slice(0,3) : match;
}

console.log(searchGoogle('com', searchDb));

module.exports = searchGoogle