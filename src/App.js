import Content from "./components/content/Content";
import Header from "./components/header/Header";
import './App.scss'
import {useEffect} from "react";
import {getProducts} from "./store/reducers/productReducer";
import {useDispatch} from "react-redux";
import Footer from "./components/footer/Footer";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [])

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
