function makeUrlBuilder(baseUrl) {
  return function (path) {
    return baseUrl + path;
  };
}
const stagingUrl = makeUrlBuilder("https://staging.example.com");
const productionUrl = makeUrlBuilder("https://example.com");

console.log (stagingUrl("/login"));
console.log (productionUrl("/dashboard"));
const apiUrl = makeUrlBuilder("https://dev.example.com");
console.log (apiUrl("/api/users"));