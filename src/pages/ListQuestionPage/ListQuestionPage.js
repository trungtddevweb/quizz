import { useParams } from "react-router-dom"
import Header from "../../components/Header"
import ListQuestions from "../../components/ListQuestions/ListQuestions"
import { shortTitleListQuestions } from "../../data/allData"
import NavLink from "../../components/NavLink"


const ListQuestionPage = () => {
    const { questionId } = useParams()
    return (
        <div className="list-question-page d-flex flex-column align-items-center">
            <Header />
            <div>
                <h3 className="pt-3 fw-bold text-center my-4">Danh sách câu hỏi</h3>
                <ul className="d-flex">
                    {shortTitleListQuestions.map((item) => (
                        <NavLink key={item} activeClassName="active" to={`/list-questions/${item}`}> <li className="list-unstyled p-2 fw-semibold border text-uppercase" >{item}</li></NavLink>
                    ))}
                </ul>

            </div>
            <ListQuestions dataQuestion={questionId} />
        </div>
    )
}

export default ListQuestionPage