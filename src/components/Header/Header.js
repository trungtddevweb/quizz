import { useContext, useState } from 'react'
import { UserContext } from '../../context/context'
import { Link } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'

const Header = () => {
    const { logout } = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(false)

    const handleLoggout = async () => {
        setIsLoading(true)
        try {
            await logout()
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            console.log(error)

        }
    }
    return (
        <div className="d-flex gap-2">
            <Link to="/">
                <button className="btn-home bg-success">Trang chủ</button>
            </Link>
            <button className="btn-home bg-danger" onClick={handleLoggout}>{isLoading ? <Spinner size='sm' /> : "Đăng xuất"}</button>
        </div>
    )
}

export default Header