import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout.js/MainLayout";
import HomePage from '../pages/HomePage'
import ErrorPage from '../pages/ErrorPage'
import LoginPage from '../pages/LoginPage'
import ListQuestionPage from "../pages/ListQuestionPage";
import DetailQuestions from "../pages/DetailQuestions";

export default createBrowserRouter([
    {
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/login',
                element: <LoginPage />,
            },
            {
                path: '/list-questions/:questionId',
                element: <ListQuestionPage />,
            },
            {
                path: '/list-questions/:questionId/:detailQuestionId',
                element: <DetailQuestions />,
            },

        ]
    }
])