import { Pages } from "../pages";

export const navlist = [
  {
    id:1,
    title: 'Работники',
    path: '/workers/'
  },
  {
    id:2,
    title: 'Проекты',
    path: '/projects/'
  },
]

export const TOKEN = 'perm:cG1fc2F0dGFyemhhbm92.NTktMQ==.z1DDGhtUVk6PCczLQhGJHbI8qQCpdr'
export const api_url = 'https://cryxxen.youtrack.cloud/api'
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
]