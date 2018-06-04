const gulp = require('gulp');
const path = require('path');
const cities = require('all-the-cities');
const fs = require('fs');
const pug = require('pug');
const yaml = require('json2yaml');

gulp.task('readme', () => {
  var simple_cities = {}
  cities.forEach((city) => {
    var key = city.country;
    if(!simple_cities[key]){
      simple_cities[key] = []
    }
    simple_cities[key].push(city.name);
  });
  fs.writeFileSync('cities.yml', yaml.stringify({all_cities: simple_cities}));
})
