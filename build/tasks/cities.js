const gulp = require('gulp');
const path = require('path');
const cities = require('all-the-cities');
const fs = require('fs');

gulp.task('pyecharts_cities', () => {
  var simple_cities = {}
  cities.forEach((city) => {
    var key = city.country
    if(!simple_cities[key]){
      simple_cities[key] = {}
    }
    simple_cities[key][city.name]=[
      city.lon,
      city.lat
    ]
  });
  Object.keys(simple_cities).forEach((country)=>{
    fs.writeFileSync(path.join('echarts-cities-js', `${country}.json`),
                     JSON.stringify(simple_cities[country], null, 4));
  });
})
