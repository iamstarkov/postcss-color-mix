import postcss from 'postcss';
import balanced from 'balanced-match';
import Color from 'color';
import { try as postcssTry } from 'postcss-message-helpers';

const mix = (c1, c2, w='') => {
  const weight = w.endsWith('%') ? w.replace('%', '') : w * 100;
  const mixed = Color(c1).mix(Color(c2), weight);
  return mixed.alpha() < 1 ? mixed.rgbaString() : mixed.hexString();
};

const shade = (c, w) => mix('#000', c, w);

const tint = (c, w) => mix('#fff', c, w);

const getTransform = (string) => {
  if (string.indexOf('shade(') !== -1) {
    return shade;
  } else if (string.indexOf('tint(') !== -1) {
    return tint;
  } else {
    return mix;
  }
};

const transformColor = (string, source) => {
  const transform = getTransform(string);
  const value = balanced('(', ')', string).body;

  return transform.apply(null, value.split(/,\s*(?![^()]*\))/));
};

const transformDecl = (decl) => {
  const pattern = /^mix|shade|tint\(.+\)$/;
  if (!decl.value || !pattern.test(decl.value.toLowerCase())) {
    return;
  }

  decl.value = postcssTry(() => transformColor(decl.value, decl.source), decl.source )
};

export default postcss.plugin('postcss-color-mix', () =>
  (style) => { style.walkDecls(transformDecl); }
);
