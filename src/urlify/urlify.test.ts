import { urlify } from "./urlify";

test("urlify space", () => {
  const text = "my conference";
  const urlified = urlify(text);
  expect(urlified).toBe("my%20conference");
});

test("urlify ampersand character", () => {
  const text = "conference&talk";
  const urlified = urlify(text);
  expect(urlified).toBe("conference%26talk");
});

test("urlify percent character", () => {
  const text = "100% legit";
  const urlified = urlify(text);
  expect(urlified).toBe("100%25%20legit");
});
