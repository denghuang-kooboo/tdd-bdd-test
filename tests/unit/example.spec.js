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

  it('should default sortTitle', () => {
    const wrapper = createWrapper()

    expect(wrapper.vm.sortTitle).toBe('default sort title')
  })

  it('sortTitle should be same as seteed', () => {
    const wrapper = createWrapper()

    wrapper.setProps({ sortTitle: 'sort title' })
    expect(wrapper.vm.sortTitle).toBe('sort title')
  })

  it('time asc radio should selected when  selectedSort is time asc', () => {
    const wrapper = createWrapper({
      propsData: {
        selectedSort: {
          order: 'asc',
          sortBy: 'time'
        }
      }
    })

    let thirdRadio = wrapper.find('[value="time:asc"]')

    // 怎么验证默认选中
    console.log(thirdRadio.vm)
  })

  it('should emitted the selected option', () => {
    const wrapper = createWrapper()

    let thirdRadio = wrapper.find('[value="price:asc"]')
    thirdRadio.trigger('click')

    let emitted = wrapper.emitted('sort')
    expect(emitted[0][0].order).toBe('asc')
    expect(emitted[0][0].sortBy).toBe('price')
  })

  it('should display all sortOption', () => {
    const wrapper = createWrapper()

    expect(wrapper.findAll('[type="radio"]').length).toBe(3)
  })
})
