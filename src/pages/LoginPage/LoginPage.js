import { useState } from "react"
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from "react-router-dom"
import "./Login.scss"

const LoginPage = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()
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
        try {
            setIsLoading(true)
            const res = await axios.post('https://btkss.onrender.com/api/auth/login', data)
            if (res) {
                return navigate('/')
            }
        } catch (error) {
            setIsLoading(false)
            setError(error.response.data.message)
        }
    }

    return (
        <div className='login d-flex justify-content-center align-items-center flex-column text'>
            <span className="title-login px-2 mb-4">Câu hỏi đáp</span>
            <form onSubmit={handleSubmit(onSubmit)} className="form-login">
                <h3 className="heading-login fw-bold">
                    Đăng nhập tài khoản
                </h3>
                <label htmlFor="password">
                    Mật khẩu
                </label>
                <input
                    type="password"
                    placeholder="*******"
                    {...register('password')}
                    control={control}
                    id="password" />
                {errors.password && <span className="text-danger">Mật khẩu không được để trống!</span>}
                {error && <span className="text-danger">{error}</span>}
                <button className="button-login" type="submit" disabled={!isDirty || !isValid} >{isLoading ? <span>Đang đăng nhập...</span> : "Đăng nhập"}</button>
            </form>
        </div>
    )
}

export default LoginPage