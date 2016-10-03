/**
 * Created by Brandon Roy on 02/10/2016.
 */


var ejs = require('ejs'),
    family = ['Brandon', 'Andrew', 'Susan'],
    html = ejs.render('<%= family.join(", "); %>', {family: family});