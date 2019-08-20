import CartContent from "../content/CartContent.vue"
import CategoryContent from "../content/CategoryContent.vue"
import HomeContent from "../content/HomeContent.vue"
import UserContent from "../content/UserContent.vue"
import Search from "../search/Search.vue"
import General from "../content/General.vue"
import RecommendDetail from "../commodity-details/RecommendDetail.vue"

const routes = [
  { path: '*', component: HomeContent },
  { path: '/category', component: CategoryContent },
  { path: '/cart', component: CartContent },
  { path: '/user', component: UserContent },
  { path: '/search', component: Search },
  { path: "/general", component: General },
  {
    path: "/recommenddetail",
    name: 'recommenddetail',
    component: RecommendDetail
  }

]

export default routes