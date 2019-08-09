import userService from '@/shared/utils/findone'
import axios from 'axios'

describe ('findOne', () => {
  // 1) mocking 없이 findOne()의 결과 값에 대한 단순한 테스트
  test("findOne returns a user", async () => {
    const user = await userService.findOne(1);
    expect(user).toHaveProperty("id", 1);
    expect(user).toHaveProperty("name", "Leanne Graham");
  });

  // 2) 이 테스트는 API 서버가 다운된 상황이거나 Network이 단절된 환경에서 실행되면 오류가 발생하고 실패
  test("findOne fetches data from the API endpoint", async () => {
    const spyGet = jest.spyOn(axios, "get");
    await userService.findOne(1);
    expect(spyGet).toBeCalledTimes(1);
    expect(spyGet).toBeCalledWith(`https://jsonplaceholder.typicode.com/users/1`);
  });

  // 위 두 테스트 1), 2)는 “테스트는 deterministic 해야한다. (언제 실행되든 항상 같은 결과를 내야한다.)”라는 원칙에 위배
  // 이 문제를 해결하려면, axios 모듈의 get 함수가 항상 안정적으로 결과를 반환하도록 mocking 
  // 즉, 다음과 같이 axios.get를 어떤 고정된 결과값을 리턴하는 가짜 함수로 대체
  // test("findOne returns what axios get returns", async () => {
  //   axios.get = jest.fn().mockResolvedValue({
  //     data: {
  //       id: 1,
  //       name: "Dale Seo"
  //     }
  //   });
  //   const user = await userService.findOne(1);
  //   expect(user).toHaveProperty("id", 1);
  //   expect(user).toHaveProperty("name", "Dale Seo");
  // })
})