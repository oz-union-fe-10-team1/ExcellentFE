import axios from 'axios'

//테스트 문항 가져오기 함수
export const getTestQuetion = async () => {
  const res = await axios.get('/api/v1/taste-test/questions')
  return res.data
}
