import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import InputForm from './Components/InputForm.jsx'
import App from './App.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'path1',
        element:(
          <>
     <h1 className='text-2xl m-10 p-10 font-sans font-semibold'> Page 1 will load here Currently Page 2 is made</h1>
          </>
        ),
      },
      {
        path:'path2',
        element:(
          <>
        <InputForm/>
          </>
        ),
      },
      {
        path:'path3',
        element:(
          <>
        <h1 className='text-2xl m-10 p-10 font-sans font-semibold'> Page 3 will load here currently page 2 is made</h1>
          </>
        ),
      },
      {
        path:'path4',
        element:(
          <>
         <h1 className='text-9xl m-10 p-10 font-sans font-semibold'> Page 4 will load here currently page 2 is made</h1>
          </>
        ),
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}>
    {/* Your application components go here */}
    
  </RouterProvider>
</React.StrictMode>
)