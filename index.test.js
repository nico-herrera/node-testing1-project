const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  it('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  it('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    actual = utils.trimProperties(input);
    expect(actual).not.toEqual(input);
    expect(input).toEqual(expected);
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  it('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected)
  })
  it('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toBe(input);
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  it('[5] returns the largest number in an array of numbers', () => {
    const input = [2, 1, 7, 3, 14, 7];
    const expected = 14;
    const actual = utils.findLargestInteger(input);
    expect(actual).toEqual(expected);
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  it('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    const expected = 3;
    const actual = counter.countDown();
    expect(expected).toEqual(actual)
  })
  it('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    const expected = 2;
    counter.countDown();
    const actual = counter.countDown();
    expect(expected).toEqual(actual)
  })
  it('[8] the count eventually reaches zero but does not go below zero', () => {
    const expectedZero = 0;
    const expectedNegative = -1;
    counter.countDown();
    counter.countDown();
    counter.countDown();
   const actualZero = counter.countDown();
   const actualNegative = counter.countDown();
    expect(expectedZero).toEqual(actualZero);
    expect(expectedNegative).not.toEqual(actualNegative);
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  it('[9] the FIRST call of seasons.next returns "summer"', () => {
    const newSeason = seasons.next()
    const expected = "summer"
    expect(newSeason).toEqual(expected);
  })
  it('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next()
    const actual = seasons.next()
    const expected = "fall"
    expect(actual).toEqual(expected);
  })
  it('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next()
    seasons.next()
    const actual = seasons.next()
    const expected = "winter"
    expect(actual).toEqual(expected);
  })
  it('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    const actual = seasons.next()
    const expected = "spring"
    expect(actual).toEqual(expected);
  })
  it('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    const actual = seasons.next()
    const expected = "summer"
    expect(actual).toEqual(expected);
  })
  it('[14] the 40th call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 40; i++) {
      seasons.next();
    }
    expect(seasons.currentSeason).toEqual("spring");
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  it('[15] driving the car returns the updated odometer', () => {
    const expected = 100;
    const actual = focus.drive(100);
    expect(actual).toEqual(expected);
  })
  it('[16] driving the car uses gas', () => {
    const expected = 17;
    const driven = focus.drive(90);
    const actual = focus.tank;

    expect(actual).toEqual(expected)
  })
  it('[17] refueling allows to keep driving', () => {
    const expected = 600
    const actual = focus.tank;
    const driven = focus.drive(600);
    const newAvailDist = focus.refuel(20);
    expect(newAvailDist).toEqual(expected);
  })
  it('[18] adding fuel to a full tank has no effect', () => {
    const expected = 20;
    const actual = focus.tank;
    const addFuel = focus.refuel(10);
    expect(actual).toEqual(expected);
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  it('[19] resolves true if passed an even number', () => {
  let answer = utils.isEvenNumberAsync(2)
    .then(res => {
      expect(res).toBe(true)
    })
  })
  it('[20] resolves false if passed an odd number', () => {
    let answer = utils.isEvenNumberAsync(3)
    .then(res => {
      expect(res).toBe(false)
    })
  })
  it('[21] rejects an error with the message "number must be a number" if passed a non-number type', () => {
    let answer = utils.isEvenNumberAsync("hello")
    .catch(err => {
      expect(err.message).toEqual("number must be a number")
    })
  })
  it('[22] rejects an error with the message "number must be a number" if passed NaN', () => {
    let answer = utils.isEvenNumberAsync(NaN)
    .catch(err => {
      expect(err.message).toEqual("number must be a number")
    })
  })
})
