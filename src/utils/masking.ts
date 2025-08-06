//유저 아이디 마스킹 함수 (앞3자리만 보여줌)
const maskingUserId = (userId: string) => {
  return userId.slice(0, 3) + '*'.repeat(userId.length - 3)
}

export default maskingUserId
