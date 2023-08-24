import Home from '~/pages/Home/Home'
import Detail from '~/pages/Detail/Detail'
const publicRoutes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/detail/:name',
    component: Detail
  }
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }