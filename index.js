import postcss from 'postcss';
import balanced from 'balanced-match';
import Color from 'color';
import { try as postcssTry } from 'postcss-message-helpers';

const mix = (c1, c2, w='') => {
  const weight = w.endsWith('%') ? w.replace('%', '') : w * 100;
  const mixed = Color(c1).mix(Color(c2), weight);
  return mixed.alpha() < 1 ? mixed.rgbaString() : mixed.hexString();
};

const transformColor = (string, source) => {
  if (string.indexOf('mix(') === -1) {
    return string;
  }

  const value = balanced('(', ')', string).body;

  if (!value) { throw new Error(`Missing closing parentheses in "${string}"`, source); }

  return mix.apply(null, value.split(/,\s*(?![^()]*\))/));
};

const transformDecl = (decl) => {
  if (!decl.value || decl.value.indexOf('mix(') === -1) {
    return;
  }

  decl.value = postcssTry(() => transformColor(decl.value, decl.source), decl.source )
};

export default postcss.plugin('postcss-color-mix', () =>
  (style) => { style.walkDecls(transformDecl); }
);
