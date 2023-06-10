
  const router = require('express').Router()
  const places = require('../models/places.js')
  
  router.get('/', (req, res) => {
      res.render('places/index', { places })
  })
  
router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
  })
  
let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/h-thai-ml-tables.png'
  }, {
      name: 'Coding Cat Cafe',
      city: 'Phoenix',
      state: 'AZ',
      cuisines: 'Coffee, Bakery',
      pic: '/images/coffee-cat.jpg'
  }]

  let placesFormatted = data.places.map((place) => {
    return (
      <div className="col-sm-6">
        <h2>{place.name}</h2>
        <p className="text-center">
          {place.cuisines}
        </p>
        <img src={place.pic} alt={place.name} />
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    )
  })
   
  

module.exports = router
