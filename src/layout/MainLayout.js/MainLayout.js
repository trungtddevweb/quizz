import { Outlet, useNavigate } from 'react-router-dom'
import topLeft from '../../assets/images/img-top-left.svg'
import topRight from '../../assets/images/top-right.svg'
import BottomLeft from '../../assets/images/bottom-left.svg'
import BottomRight from '../../assets/images/bottom-right.svg'
import './MainLayout.scss'
import { useContext, useLayoutEffect } from 'react'
import { UserContext } from '../../context/context'

const MainLayout = () => {
    const { user } = useContext(UserContext)
    const navigate = useNavigate()
    useLayoutEffect(() => {
        if (user === null) return navigate('/login')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    return (
        <>
            <div className="header w-100">
                <img className='image-layout left' src={topLeft} alt="" />
                <img className='image-layout right p-4' src={topRight} alt="" />
            </div>
            <div className="d-flex align-items-center justify-content-center"><Outlet /></div >
            <div className='footer'>
                <img className='image-layout bottom p-4' src={BottomLeft} alt="" />
                <img className='image-layout bottom right' src={BottomRight} alt="" />
            </div>
        </>
    )
}

export default MainLayout