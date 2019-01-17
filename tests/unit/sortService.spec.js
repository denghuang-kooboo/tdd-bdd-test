import SortService from '@/service/sort.js'
import moment from 'moment'
import _ from 'lodash'

describe('sort.js', () => {

  const planList = [
    {
      id: 'p-id-1',
      name: 'a-p-name',
      price: 2000,
      time: moment('2010-01-05')
    },
    {
      id: 'p-id-3',
      name: 'a-p-name',
      price: 1000,
      time: moment('2009-01-05')
    },
    {
      id: 'p-id-2',
      name: 'c-p-name',
      price: 1000,
      time: moment('2003-01-05')
    }
  ]

  it('sorting should sort by time asc', () => {
    let sortOrder = { sortBy: "time", order: "asc" }
    var result = SortService.sorting(sortOrder, planList)

    expect(result[0].id).toBe('p-id-2')
    expect(result[1].id).toBe('p-id-3')
    expect(result[2].id).toBe('p-id-1')
  })

  it('sorting should sort by time desc', () => {
    let sortOrder = { sortBy: "time", order: "desc" }
    var result = SortService.sorting(sortOrder, planList)

    expect(result[0].id).toBe('p-id-1')
    expect(result[1].id).toBe('p-id-3')
    expect(result[2].id).toBe('p-id-2')
  })

  it('sorting should sort by price asc', () => {
    let sortOrder = { sortBy: "price", order: "asc" }
    var result = SortService.sorting(sortOrder, planList)

    expect(result[0].id).toBe('p-id-3')
    expect(result[1].id).toBe('p-id-2')
    expect(result[2].id).toBe('p-id-1')
  })
})
