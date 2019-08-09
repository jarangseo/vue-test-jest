import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import About from '@/views/About.vue'

describe('HelloWorld.vue', () => {
  beforeEach(() => {
    //beforeEach
  })

  afterEach(() => {
    //afterEach
  })
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
  it('test About component', () => {
    const wrapper = shallowMount(About)
    const beforeTestNum = wrapper.vm.testNumber
    wrapper.vm.confirm()
    const afterTestNum = wrapper.vm.testNumber
    expect(afterTestNum).toBe(beforeTestNum + 1)
  })
})
