import Content from "./components/content/Content";
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

    return (<>
            <div className='container'>
                <Header/>
            </div>
            <Content/>
        </>
    );
}

export default App;
