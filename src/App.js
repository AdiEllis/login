import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,

} from "react-router-dom";
import {NotFound} from "./pages/NotFound";
import {routes} from "./routes/route";

function App() {

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path='*' element={<NotFound/>}/>
                    {
                        routes.map((route, index) => (
                                <Route
                                    path={route.path}
                                    exact={route.exact}
                                    element={route.component}
                                    key={index}
                                />
                            )
                        )
                    }
                </Routes>
            </Router>
        </div>
    );


}

export default App;
