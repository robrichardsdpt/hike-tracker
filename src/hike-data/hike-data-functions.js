const hikeTotalDistance = (hikes) => hikes.reduce((accumulator, hike) => {
  return accumulator += hike.distance
}, 0)
const hikeTotalElevation = (hikes) => hikes.reduce((accumulator, hike) => {
  return accumulator += hike.elevation
}, 0)

const mountainsTable = {}

const mountainsClimbedToTable = (hikes) => {
  const mountainsClimbedArray = hikes.map(hike => {
    return hike.mountainsClimbed?.toLowerCase()
  })
  mountainsClimbedArray.forEach(mountain => mountainsTable[mountain] ? mountainsTable[mountain]++ : mountainsTable[mountain] = 1)
  console.log(mountainsTable)
  for(let key in mountainsTable) {
    if (!key) delete mountainsTable[key]
    if (key.includes(' and ')) {
      const splitKey = key.split(' and ')
      for(let i = 0; i < splitKey.length; i++) {
        mountainsTable[splitKey[i]] = mountainsTable[key]
      }
      delete mountainsTable[undefined]
      delete mountainsTable[key] 
    } else if (key.includes(', ')) {
      const splitKey = key.split(', ')
      for(let i = 0; i < splitKey.length; i++) {
        mountainsTable[splitKey[i]] = mountainsTable[key]
      }
      delete mountainsTable[undefined]
      delete mountainsTable[key] 
    } else if (key.includes(' mountain')) {
      const splitKey = key.split(' mountain')
      for(let i = 0; i < splitKey.length; i++) {
        mountainsTable[splitKey[i]] = mountainsTable[key]
      }
      delete mountainsTable[undefined]
      delete mountainsTable[key]
    } else if (key.includes('mount ')) {
      const splitKey = key.split('mount ')
      for(let i = 0; i < splitKey.length; i++) {
        mountainsTable[splitKey[i]] = mountainsTable[key]
      }
      delete mountainsTable[undefined]
      delete mountainsTable[key] 
    }
    delete mountainsTable['']
  }
}

const deleteMountainsTable = () => {
  for(let key in mountainsTable) {
    delete mountainsTable.key
  }
}

const deleteMountainsArray = () => {

}

console.log(mountainsTable)

module.exports = {
  hikeTotalDistance,
  hikeTotalElevation,
  mountainsClimbedToTable,
  mountainsTable,
  deleteMountainsTable
}