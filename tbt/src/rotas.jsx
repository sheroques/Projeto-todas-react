import {createBrowserRouter} from "react-router-dom"
import {Home} from './home'


const router = createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            {
               path: "/",
               element:<Home/>
            }, 
            {
                path:'*',
                element:<NotFound/>

            }
        ]
    }
])
export {router};