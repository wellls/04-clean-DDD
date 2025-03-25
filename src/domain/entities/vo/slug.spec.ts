import { expect, test } from "vitest";
import { Slug } from "./Slug";

test("it should be able to create a new slug from text", () => {
  const slug = Slug.createFromText("Any Text");
  expect(slug.value).toBe("any-text");
});
