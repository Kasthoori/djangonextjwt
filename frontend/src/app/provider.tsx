import { Provider } from "react-redux";
import { store } from './store/store';
import { Children } from "react";

export function Providers({children}: {children: React.ReactNode}) {

    return <Provider store={store} >{children}</Provider>

}