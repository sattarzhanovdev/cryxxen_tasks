import { Pages } from "../pages";


export const navlist = [
  {
    id:1,
    title: 'Отчеты',
    path: '/reports/'
  },
  {
    id:2,
    title: 'Работники',
    path: '/workers/'
  },
  {
    id:3,
    title: 'Проекты',
    path: '/projects/'
  },
  {
    id:4,
    title: 'Админ',
    path: '/auth/'
  },
  {
    id:5,
    title: 'Обучение и курсы',
    path: '/courses/'
  },
]

export const TOKEN = 'perm-YWRtaW4=.NDYtMA==.iwVsPs6mo39ENxNjfVmdXaThMgFzXy'
export const api_url = 'https://atabase.youtrack.cloud/api'
export const headers = {
  'Authorization': `Bearer ${TOKEN}`
};

export const PUBLIC_ROUTES = [
  {
    id:1,
    route: '/',
    page: <Pages.Main/>,
  },
  {
    id:2,
    route: '/workers/',
    page: <Pages.Workers/>,
  },
  {
    id:3,
    route: '/projects/',
    page: <Pages.Projects/>,
  },
  {
    id:4,
    route: '/projects/:name/tasks/',
    page: <Pages.Tasks/>,
  },
  {
    id:5,
    route: '/auth/',
    page: <Pages.Auth />
  },
  {
    id:6,
    route: '/admin/',
    page: <Pages.Admin />
  },
  {
    id:7,
    route: '/change/',
    page: <Pages.Change />  
  },
  {
    id:8,
    route: '/reports/',
    page: <Pages.Reports />
  }
]