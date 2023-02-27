import { useContext, useLayoutEffect, useState } from "react"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from "react-router-dom"
import "./Login.scss"
import { UserContext } from "../../context/context"

const LoginPage = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()
    const { login, user } = useContext(UserContext)

    const schema = yup.object().shape({
        password: yup.string(),
    })

    const defaultValue = {
        password: ''
    }

    const { register, control, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({
        mode: 'all',
        resolver: yupResolver(schema),
        defaultValue
    })

    const onSubmit = async (data) => {
        setIsLoading(true)
        try {
            await login(data)
            setIsLoading(false)
            navigate('/')
        } catch (error) {
            setIsLoading(false)
            setError(error.response.data.message)
        }
    }

    useLayoutEffect(() => {
        if (user) return navigate('/')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    return (
        <div className='login d-flex justify-content-center align-items-center flex-column text'>
            <span className="title-login px-2 mb-4">Câu hỏi đáp</span>
            <form onSubmit={handleSubmit(onSubmit)} className="form-login">
                <h3 className="heading-login fw-bold text-center mb-4">
                    Đăng nhập tài khoản
                </h3>
                <label className="password-label mb-2">
                    Mật khẩu
                </label>
                <input
                    className="password-input"
                    type="password"
                    placeholder="**********"
                    {...register('password')}
                    control={control}
                    autoFocus
                />
                {errors.password && <span className="text-danger">Mật khẩu không được để trống!</span>}
                {error && <span className="text-danger">{error}</span>}
                <button className="button-login mt-4" type="submit" disabled={!isDirty || !isValid} >{isLoading ? <span>Đang đăng nhập...</span> : "Đăng nhập"}</button>
            </form>
        </div>
    )
}

export default LoginPage