import plugin from '../src/index'
const testPlugin = new plugin()
test('show one', () => {
  expect(testPlugin.run(3)).toBe(4);
});