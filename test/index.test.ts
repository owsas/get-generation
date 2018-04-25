import { getGenerationByAge, getGenerationByYear, getAllGenerationsInfo } from "../src";

describe('#getGenerationByYear', () => {
  test('should get the Traditionalist type', () => {
    expect(getGenerationByYear(1920)).toBe('Traditionalist');
  });

  test('should get the Older Boomer type', () => {
    expect(getGenerationByYear(1950)).toBe('Older Boomer');
  });

  test('should get the Younger Boomer type', () => {
    expect(getGenerationByYear(1960)).toBe('Younger Boomer');
  });

  test('should get the Generation X (older) type', () => {
    expect(getGenerationByYear(1966)).toBe('Generation X (older)');
  });

  test('should get the Generation X (younger) type', () => {
    expect(getGenerationByYear(1971)).toBe('Generation X (younger)');
  });

  test('should get the Generation Y type', () => {
    expect(getGenerationByYear(1982)).toBe('Generation Y');
  });

  test('should get the Generation Z type', () => {
    expect(getGenerationByYear(1998)).toBe('Generation Z');
  });

  test('should get the Generation Alpha type', () => {
    expect(getGenerationByYear(2015)).toBe('Generation Alpha');
  });
});

describe('getGenerationByAge', () => {
  test('should get Generation Alpha for 3 years old people', () => {
    expect(getGenerationByAge(3)).toEqual('Generation Alpha');
  });

  test('should get Traditionalist for 80 years old people', () => {
    expect(getGenerationByAge(80)).toEqual('Traditionalist');
  });

  test('should get Generation Z for 20 years old people', () => {
    expect(getGenerationByAge(20)).toEqual('Generation Z');
  });
});

describe('getAllGenerationsInfo', () => {
  test('should get object array with all generations info', () => {
    const thisYear: number = new Date().getFullYear();

    const response = [{
      name: 'Traditionalist',
      range: {
        min: 0,
        max: 1954,
      },
    }, {
      name: 'Older Boomer',
      range: {
        min: 1955,
        max: 1964,
      },
    }, {
      name: 'Younger Boomer',
      range: {
        min: 1965,
        max: 1970,
      },
    }, {
      name: 'Generation X (older)',
      range: {
        min: 1971,
        max: 1980,
      },
    }, {
      name: 'Generation X (younger)',
      range: {
        min: 1971,
        max: 1980,
      },
    }, {
      name: 'Generation Y',
      range: {
        min: 1981,
        max: 1995,
      },
    }, {
      name: 'Generation Z',
      range: {
        min: 1996,
        max: 2010,
      },
    }, {
      name: 'Generation Alpha',
      range: {
        min: 2011,
        max: thisYear,
      },
    }];

    expect(getAllGenerationsInfo()).toEqual(response);
  });
});
