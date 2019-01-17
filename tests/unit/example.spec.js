import { shallowMount } from '@vue/test-utils'
import Sort from '@/components/sort.vue'
import { sort } from 'semver';
import _ from 'lodash'

describe('Sort.vue', () => {

  function createWrapper(options) {
    return shallowMount(Sort, _.merge({
      propsData: {
        sortOptions: []
      }
    }, options || {}))
  }

  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(Sort)
    console.log(wrapper.html())
  })

  it('should default sortTitle', () => {
    const wrapper = shallowMount(Sort)
    expect(wrapper.vm.sortTitle).toBe('default sort title')
  })

  it('sortTitle should be same as seteed', () => {
    const wrapper = shallowMount(Sort)
     wrapper.setProps({sortTitle: 'sort title'})
    expect(wrapper.vm.sortTitle).toBe('sort title')
  })

  it('should emitted the selected option', () => {
    const wrapper = createWrapper({
      propsData: {
        sortTitle: 'sort title',
        sortOptions: [
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
        ],
        selectedSort: {
          order: 'desc',
          sortBy: 'time'
        }
      }
    })

    let thirdRadio = wrapper.find('[value="price:asc"]')
    thirdRadio.trigger('click')

    let emitted = wrapper.emitted('sort')
    expect(emitted[0][0].order).toBe('asc')
    expect(emitted[0][0].sortBy).toBe('price')
  })

  it('should emitted the selected option', () => {
    const wrapper = createWrapper({
      propsData: {
        sortTitle: 'sort title',
        sortOptions: [
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
        ],
        selectedSort: {
          order: 'desc',
          sortBy: 'time'
        }
      }
    })

    expect(wrapper.findAll('[type="radio"]').length).toBe(3)
  })
})
