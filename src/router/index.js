import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/index'
import DetailPage from "../pages/detail"
import DetailAna from "../pages/detail/analysis"
import DetailCou from "../pages/detail/count"
import DetailFor from "../pages/detail/forecast"
import DetailPub from "../pages/detail/publish"

Vue.use(Router)

export default new Router({
  routes: [
    {
		path:'/',
		component:IndexPage
	},
	{
		path:'/detail',
		component:DetailPage,
		children:[
			{
				path:"analysis",
				component:DetailAna
			},
			{
				path:'count',
				component:DetailCou
			},
			{
				path:'forecast',
				component:DetailFor
			},
			{
				path:'publish',
				component:DetailPub
			}
		]
	}
  ]
})
