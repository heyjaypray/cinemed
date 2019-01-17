/**
 * Predefined template variables for Google Map Contact page.
 * You can create your own style on https://snazzymaps.com/editor
 * @type {Object}
 */

const style = [{
  stylers: [
    { hue: "#ff1a00" },
    { invert_lightness: true },
    { saturation: -100 },
    { lightness: 33 },
    { gamma: 0.5 },
  ],
}, {
  featureType: "water",
  elementType: "geometry",
  stylers: [{
    color: "#2D333C",
  }],
}];

export default style;
