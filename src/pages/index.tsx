import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Home Page</h1>
      <button
        onClick={() => {
          navigate('/mypage')
        }}
      >
        마이페이지로 이동
      </button>
    </div>
  )
}

export default HomePage
