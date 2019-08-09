import * as space from './space-age';

describe('Space Age', () => {
  test('age on Earth', () => {
    expect(space.age('earth', 1000000000)).toEqual(31.69);
  });

  test('age on Mercury', () => {
    expect(space.age('mercury', 2134835688)).toEqual(280.88);
  });

  test('age on Venus', () => {
    expect(space.age('venus', 189839836)).toEqual(9.78);
  });

  test('age on Mars', () => {
    expect(space.age('mars', 2129871239)).toEqual(35.88);
  });

  test('age on Jupiter', () => {
    expect(space.age('jupiter', 901876382)).toEqual(2.41);
  });

  test('age on Saturn', () => {
    expect(space.age('saturn', 2000000000)).toEqual(2.15);
  });

  test('age on Uranus', () => {
    expect(space.age('uranus', 1210123456)).toEqual(0.46);
  });

  test('age on Neptune', () => {
    expect(space.age('neptune', 1821023456)).toEqual(0.35);
  });
});
