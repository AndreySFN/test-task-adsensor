import './App.css'
import {Card} from "./atoms";
import {RecommendationPage} from "./pages/recommendation.page.tsx";

function App() {
    return (
        <>
            <RecommendationPage>
                <Card text='Проверка настройки лимитов бюджета, работу со ставками и динамика расходов' title='Бюджет'
                      number={94} sideColor='#F14B4B'/>
            </RecommendationPage>
        </>
    )
}

export default App
