var mongooose = require('mongooose')
var Schema = mongooose.Schema;

var peopleSchema = new Schema({

});

module.exports = mongooose.module('person',peopleSchema);

