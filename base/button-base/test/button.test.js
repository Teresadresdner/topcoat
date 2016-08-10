var assert = require('assert');
var fs = require('fs');

function read(file) {
    return fs.readFileSync(file, 'utf8');
}

describe('Topcoat Button Base', function() {
    'use strict';

    it('should create expected css file', function() {
        var actual = read('css/button.css').trim();
        var expected = read('test/expected/button.css').trim();
        assert.equal(actual, expected, 'should generate correct css');
    });

});