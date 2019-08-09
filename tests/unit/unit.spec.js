import { createLocalVue, mount } from '@vue/test-utils'
import About from '@/views/About.vue'

describe ('ReservatioGuestInput', () => {
  test ('기본값으로 정상적인 마운팅이 가능함', () => {
    const localVue = createLocalVue()
    const wrapper = mount(About, { localVue })
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
// 테스트를 진행할 때는 localVue 를 사용
// 테스트 별로 plugin 이나 filter 를 등록할 수도 있고 다른테스트에 영향을 주지 않도록 별도의 localVue 를 생성하여 진행할 수도 있음
// wrapper 는 component 를 조작하기 위한 mount, shallowMount 함수의 인스턴스