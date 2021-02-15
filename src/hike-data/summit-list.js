const listOfSkyline = [
  'blue hills',
  'fells',
  'prospect hill',
  "world's end",
  'arboreturm',
  'lars andersson',
  'washington tower',
  'bunker hill',
  'piers park',
  'longfellow bridge'
]

const listOfNH4k = [
  'washington',
  'adams',
  'jefferson',
  'monroe',
  'madison',
  'lafayette',
  'lincoln',
  'south twin',
  'carter dome',
  'moosilauke',
  'eisenhower',
  'north twin',
  'carrigain',
  'bond',
  'middle carter',
  'west bond',
  'garfield',
  'liberty',
  'south carter',
  'wildcat a',
  'hancock',
  'south kinsman',
  'field',
  'osceola',
  'flume',
  'south hancock',
  'pierce',
  'north kinsman',
  'willey',
  'bondcliff',
  'zealand',
  'north tripyramid',
  'cabot',
  'east osceola',
  'middle tripyramid',
  'cannon',
  'hale',
  'jackson',
  'tom',
  'wildcat d',
  'moriah',
  'passaconaway',
  "owl's head",
  'galehead',
  'whiteface',
  'waumbek',
  'isolation',
  'tecumseh'
]

const listOfME4k = [
  'baxter', 'hamlin', 'sugarloaf', 'crocker', 'old speck', 'north brother',  'bigelow west', 'saddleback', 'bigelow avery', 'abraham', 'south crocker', 'saddleback horn', 'redington', 'spaulding'
]

const listOfVT4k = [
  'mansfield', 'killington', "camel's hump", 'ellen', 'abraham'
]

const listOfNE4k = [...listOfNH4k, ...listOfVT4k, ...listOfME4k]

const listOf100 = [
  ...listOfNE4k,
  'sandwich',
  'south brother',
  'snow mountain',
  'pico peak',
  'the bulge',
  'stratton',
  'nancy',
  'the horn',
  'weeks',
  'south weeks',
  'goose eye',
  'vose spur',
  'fort',
  'jay peak',
  'white cap',
  'boundary peak',
  'equinox',
  'mendon peak',
  'east sleeper',
  'bread loaf',
  'peak above the nubble',
  'bigelow, south horn',
  'coe',
  'east kennebago',
  'wilson',
  'big jay',
  'snow',
  'baldpate',
  'kennebago divide',
  'scar ridge',
  'elephant',
  'dorset',
  'cannon balls'
]

module.exports = {
  listOfNH4k,
  listOfME4k,
  listOfVT4k,
  listOfNE4k,
  listOf100
}