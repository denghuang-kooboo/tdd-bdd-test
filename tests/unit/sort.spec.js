import { shallowMount } from '@vue/test-utils'
import Sort from '@/components/sort.vue'
import _ from 'lodash'

describe('Sort.vue', () => {

  const sortOptions = [
    {
      label: '时间升序',
      sortIndex: '1',
      order: 'asc',
      sortBy: 'time'
    },
    {
      label: '时间降序',
      sortIndex: '2',
      order: 'desc',
      sortBy: 'time'
    },
    {
      label: '价格升序',
      sortIndex: '3',
      order: 'asc',
      sortBy: 'price'
    }
  ]

  function createWrapper(options) {
    return shallowMount(Sort, _.merge({
      propsData: {
        sortOptions: sortOptions,
        selectedSort: {}
      }
    }, options || {}))
  }

  it('sortTitle should be default when no set', () => {
    const wrapper = createWrapper()

    expect(wrapper.vm.sortTitle).toBe('排序')
  })

  it('sortTitle should be same as set', () => {
    const wrapper = createWrapper()

    wrapper.setProps({ sortTitle: 'sort title' })
    expect(wrapper.vm.sortTitle).toBe('sort title')
  })

  it('time asc radio should selected when selectedSort prop is time asc', () => {
    const wrapper = createWrapper({
      propsData: {
        selectedSort: {
          order: 'asc',
          sortBy: 'time'
        }
      }
    })

    expect(wrapper.find('[value="time:asc"]').element.checked).toBe(true)
    expect(wrapper.find('[value="time:desc"]').element.checked).toBe(false)
    expect(wrapper.find('[value="price:asc"]').element.checked).toBe(false)
  })

  it('should display all sortOption', () => {
    const wrapper = createWrapper()

    expect(wrapper.findAll('[type="radio"]').length).toBe(3)
  })

  it('should display all sortOption and correct order', () => {
    const wrapper = createWrapper()

    var labelForTimeASC = wrapper.findAll('[for="time:asc"]').at(0)
    expect(labelForTimeASC.is('label')).toBe(true)
    expect(labelForTimeASC.text()).toBe('时间升序')

    var labelForTimeASC = wrapper.findAll('[for="time:desc"]').at(0)
    expect(labelForTimeASC.is('label')).toBe(true)
    expect(labelForTimeASC.text()).toBe('时间降序')

    var labelForTimeASC = wrapper.findAll('[for="price:asc"]').at(0)
    expect(labelForTimeASC.is('label')).toBe(true)
    expect(labelForTimeASC.text()).toBe('价格升序')
  })

  it('should emitted the selected option', () => {
    const wrapper = createWrapper()

    let thirdRadio = wrapper.find('[value="price:asc"]')
    thirdRadio.trigger('click')
    expect(thirdRadio.element.checked).toBe(true)

    let emitted = wrapper.emitted('sort')
    expect(emitted[0][0].order).toBe('asc')
    expect(emitted[0][0].sortBy).toBe('price')
  })
})
