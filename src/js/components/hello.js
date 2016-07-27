export function hello() {
  let name = 'Foo',
    greeting = `Hello ${name}`;

  if (false) {
    // Should not be covered
    return 'Good bye';
  }

  return greeting;
}
