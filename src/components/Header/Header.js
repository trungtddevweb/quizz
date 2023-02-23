import { useContext } from 'react'
import { UserContext } from '../../context/context'
import { Link } from 'react-router-dom'

const Header = () => {
    const { logout } = useContext(UserContext)


    const handleLoggout = async (e) => {
        e.preventDefault()
        try {
            await logout()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="mt-4 d-flex gap-2 mb-5">
            <Link to="/">
                <button className="btn-home bg-success">Trang chủ</button>
            </Link>
            <button className="btn-home bg-warning" onClick={handleLoggout}>Đăng xuất</button>
        </div>
    )
}

export default Header