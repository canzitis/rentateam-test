import Content from "./components/content/content";
import Header from "./components/header/Header";
import './App.scss'
import {useEffect} from "react";
import {getProducts} from "./store/reducers/productReducer";
import {useDispatch} from "react-redux";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        <div class='container'>
            <Header/>
            <Content/>
        </div>
    );
}

export default App;
