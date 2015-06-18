import { equal } from 'assert';
import postcss from 'postcss';
import mix from './index';

const verify = function(input, output, done) {
  postcss([ mix() ])
    .process(input)
    .then((result) => {
      equal(output, result.css);
      equal(result.warnings(), null);
      done();
    }).catch((error) => { done(error); });
};

it('mix two hex colors without weight', (done)=> {
  verify(
    `a { color: mix(#f00, #00f); }`,
    `a { color: #800080; }`,
  done);
});

it('mix two hex colors with weight', (done)=> {
  verify(
    `a { color: mix(#f00, #00f, 25%); }`,
    `a { color: #4000bf; }`,
  done);
});

it('mix hex color with rgba one with weight', (done)=> {
  verify(
    `a { color: mix(rgba(255, 0, 0, 0.5), #00f); }`,
    `a { color: rgba(64, 0, 191, 0.75); }`,
  done);
});
