import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
function Header() {
    return (
        <div>
            <div className="HeadClass" >
                <h1>Teknolojik Yemekler</h1>
            
                <BrowserRouter>
                    <Switch>
                        <Route>
                            <NavLink to="/" exact>
                                Anasayfa -
                            </NavLink>
                            <NavLink to="/siparis">
                                Sipariş Oluştur
                            </NavLink>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    )
}
export default Header