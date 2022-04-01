import Content from "./components/content/Content";
import Header from "./components/header/Header";
import './App.scss'
import {useEffect} from "react";
import {getProducts} from "./store/reducers/productReducer";
import {useDispatch, useSelector} from "react-redux";
import Footer from "./components/footer/Footer";

const App = () => {
    const initialization = useSelector((state) => state.initialization);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    if (!initialization) {
        return <h4>Загрузка...</h4>
    }
    return (<>
            <div className='container'>
                <Header/>
            </div>
            <Content/>
            <div className='container'>
                <Footer/>
            </div>
        </>
    );
}

export default App;
