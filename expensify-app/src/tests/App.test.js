/* test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */

const add = (a, b) => a + b;

// test takes in two arguments, the name/description a string, and an arrow function
// which performs the test
test('should add the two numbers', () => {
  const result = add(3, 4);
  // if (result !== 7) {
  //   throw new Error(`expected 7 when adding 3 and 4, but got ${result}`);
  // }
  expect(result).toBe(7);
});

const generateGreeting = (name = 'anonymous') => `Hello ${name}!!`;

test ('should generate greeting from name', () => {
  const result = generateGreeting('cob');
  expect(result).toBe('Hello cob!!');
});