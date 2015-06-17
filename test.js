var postcss = require('postcss');
var expect  = require('chai').expect;

var plugin = require('../');

var test = function (input, output, opts, done) {
    postcss([ plugin(opts) ]).process(input).then(function (result) {
        expect(result.css).to.eql(output);
        expect(result.warnings()).to.be.empty;
        done();
    }).catch(function (error) {
        done(error);
    });
};

describe('postcss-color-mix', function () {

    /* Write tests here

    it('does something', function (done) {
        test('a{ }', 'a{ }', { }, done);
    });*/

  /*
  mix(#f00, #00f)  #7f007f
  mix(#f00, #00f, 25%) => #3f00bf
  mix(rgba(255, 0, 0, 0.5), #00f) => rgba(63, 0, 191, 0.75)
  */

});
