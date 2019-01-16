import { shallowMount } from '@vue/test-utils'
import Sort from '@/components/sort.vue'

describe('Sort.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(Sort)
    console.log(wrapper.html())
  })
})
