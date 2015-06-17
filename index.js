import postcss from 'postcss';
import balanced from 'balanced-match';
import Color from 'color';
import { try as postcssTry } from 'postcss-message-helpers';

const mix = (c1, c2, weight) => Color(c1).mix(Color(c1), weight).hexString();

const transformColor = (string, source) => {
  if (string.indexOf('mix(') === -1) {
    return string;
  }

  var mixArgs = balanced('(', ')', string);
  if (!mixArgs) { throw new Error(`Missing closing parentheses in "${string}"`, source); }

  const args = mixArgs.body.trim().split(',').map(i => i.trim())

  return mix.apply(null, args);
};

const transformDecl = (decl) => {
  if (!decl.value || decl.value.indexOf('mix(') === -1) {
    return;
  }

  decl.value = postcssTry(() => transformColor(decl.value, decl.source), decl.source )
};

export default postcss.plugin('postcss-color-mix', () =>
  (style) => { style.eachDecl(transformDecl); }
);
