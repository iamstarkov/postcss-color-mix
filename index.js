import postcss from 'postcss';
import balanced from 'balanced-match';
import Color from 'color';
import { try as postcssTry } from 'postcss-message-helpers';

const transformColor = (string, source) => {
  if (string.indexOf('mix(') === -1) {
    return string;
  }

  var balancedMatches = balanced('(', ')', string);
  if (!balancedMatches) {
    throw new Error(`Missing closing parentheses in "${string}"`, source);
  }

  const args = balancedMatches.body.trim().split(',').map(i => i.trim())
  const color1 = args[0];
  const color2 = args[1];
  const weight = args[2];

  const mixedColor = Color(color1).mix(Color(color2), weight).rgbaString();
  return mixedColor;
}

const transformColorValue = (value, source) => transformColor(value, source);

const transformDecl = (decl) => {
  if (!decl.value || decl.value.indexOf("mix(") === -1) {
    return;
  }

  decl.value = postcssTry(transformColorValue(decl.value, decl.source));
  return decl;
};

const mix = (css) => { css.eachDecl(transformDecl); };

export default postcss.plugin('postcss-color-mix', () => mix );
