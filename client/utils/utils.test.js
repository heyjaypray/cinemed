/* eslint-disable jsx-control-statements/jsx-jcs-no-undef */
import { jobs, rJob, rNumber } from "./random";

test("Random job generator", () => {
  expect(jobs).toContain(rJob());
});

test("Random number generator", () => {
  expect(rNumber(11, 29)).toBeGreaterThanOrEqual(11);
  expect(rNumber(11, 29)).toBeLessThanOrEqual(29);
});
