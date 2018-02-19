/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let triangles = 0;
  preferences.map(function(x, index) {
    let second, third;
    if ((x-1) != index) {
    second = preferences[x-1];
    if (preferences[second-1] != second) {
    third = preferences[second-1];
    if (preferences[third-1] != third && index == (third-1)) {triangles++;}
} }  });
  return Math.round(triangles/3);
};
