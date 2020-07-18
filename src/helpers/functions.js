function guidGenerator() {
  const S4 = () =>
    // eslint-disable-next-line no-bitwise
    (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  return `${S4()}${S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
}

// eslint-disable-next-line import/prefer-default-export
export { guidGenerator };
