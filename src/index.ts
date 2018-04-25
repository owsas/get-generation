export function getGenerationByYear(birthYear: number): string {
  if (birthYear < 1946) {
    return "Traditionalist"
  } else if (birthYear >= 1946 && birthYear < 1955) {
    return "Older Boomer"
  } else if (birthYear >= 1955 && birthYear < 1965) {
    return "Younger Boomer"
  } else if (birthYear >= 1965 && birthYear < 1971) {
    return "Generation X (older)"
  } else if (birthYear >= 1971 && birthYear < 1981) {
    return "Generation X (younger)"
  } else if (birthYear >= 1981 && birthYear < 1996) {
    return "Generation Y"
  } else if (birthYear >= 1996 && birthYear < 2011) {
    return "Generation Z"
  } else {
    return "Generation Alpha"
  }
}

export function getGenerationByAge(age: number): string {
  const date = new Date()
  const oldYear = date.getFullYear() - age
  return getGenerationByYear(oldYear)
}

export function getAllGenerationsInfo(): object[] {
  const thisYear: number = new Date().getFullYear();
  return [{
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
  }]
}
