import { data } from '../../data/allData'
import { useContext } from 'react'
import { UserContext } from '../../context/context'
import './HomePage.scss'

const HomePage = () => {
    const { logout } = useContext(UserContext)

    // Handlers
    const handleLoggout = async (e) => {
        e.preventDefault()
        try {
            await logout()
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="homePage">
            <header>
                <div className="mt-4 d-flex gap-2">
                    <button className="btn-home bg-success">Trang chủ</button>
                    <button className="btn-home bg-warning" onClick={handleLoggout}>Đăng xuất</button>
                </div>
            </header>
            <h3 className="heading-topic mt-5">Danh sách chủ đề</h3>
            <div className="list">
                {data.map((item, index) => (
                    <div key={index} >{index + 1}</div>
                ))}
            </div>
        </div>
    )
}

export default HomePage