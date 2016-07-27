import {hello} from 'src/js/hello';

describe('hello', () => {

  it('should be a function', function () {
    expect(typeof hello).toBe('function');
  });

  it('should return Hello Foo', function () {
    expect(hello()).toEqual('Hello Foo');
  });
});
