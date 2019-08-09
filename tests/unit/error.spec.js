import getErrorMessage from '@/shared/utils/error'

describe("getErrorMessage", () => {
  it("returns camel message when code is 1", () => {
    expect(getErrorMessage(1)).toBe("The camel walks on a leg");
  });

  it("returns rabbit message when code is 2", () => {
    expect(getErrorMessage(2)).toBe("Rabbits don't eat carrots");
  });

  it("returns cat message when code is 3", () => {
    expect(getErrorMessage(3)).toBe("Cats don't eat mouses");
  });

  it("throws an error otherwise", () => {
    expect(() => getErrorMessage(4)).toThrow("No error messages for that code");
  });
});

describe("getErrorMessage with Snapshot", () => {
  it("returns an error for a valid code", () => {
    expect(getErrorMessage(1)).toMatchSnapshot();
    expect(getErrorMessage(2)).toMatchSnapshot();
    expect(getErrorMessage(3)).toMatchSnapshot();
  });

  it("throws an error otherwise", () => {
    expect(() => getErrorMessage(4)).toThrowErrorMatchingSnapshot();
  });
});