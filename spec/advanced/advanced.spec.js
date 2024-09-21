const {
  hasTen,
  indexOfTen,
  divisibleByThreeCount,
  average,
  largest,
  smallest,
  median
} = require('../../src/advanced/advanced')

describe('advanced', () => {
  // 1. Use a for loop to set the variable hasTen to true if the array contains the value 10
  it('Check has ten', () => {
    expect(hasTen).toBe(true)
    expect(indexOfTen).toBe(1)
  })

  // 2. Use a for loop to count how many numbers in the array are divisible by 3
  it('Check divisible by three count', () => {
    expect(divisibleByThreeCount).toBe(4)
  })

  // 3. use a for loop to find the average of the numbers in the array
  it('Check average', () => {
    expect(average).toBe(2.5)
  })

  // 4. use a for loop to find the largest number in the array
  it('Check largest', () => {
    expect(largest).toBe(10)
  })

  // 5. use a for loop to find the smallest number in the array
  it('Check smallest', () => {
    expect(smallest).toBe(-9)
  })

  // 6. find the median of the numbers in the array
  it('Check median', () => {
    expect(median).toBe(3.5)
  })
})
