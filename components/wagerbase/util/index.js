export { default as Colors } from "./Colors";

export const numberToThousand = (input) => {
  return input > 1000 ? `${input / 1000}k` : input;
};
