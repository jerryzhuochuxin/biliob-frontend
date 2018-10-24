import home from './components/Home.vue'
import login from './components/Login.vue'
import Author from './views/Author.vue'
import Video from './views/Video.vue'
import AuthorList from './views/AuthorList.vue'
import VideoList from './views/VideoList.vue'
const routes = [{
  path: '/',
  component: home
},
{
  path: '/login',
  component: login
},
{
  path: '/author/:mid',
  component: Author
}, {
  path: '/author/:mid/video/:aid',
  component: Video
},
{
  path: '/author',
  component: AuthorList
},
{
  path: '/video/:aid',
  component: Video
},
{
  path: '/video',
  component: VideoList
}
]
export default routes
