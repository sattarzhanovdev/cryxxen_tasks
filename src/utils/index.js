import { Pages } from "../pages";
import Introduction from "../pages/courses/introduction/introduction";
import Admin from './../pages/admin/index';
import KtoTakoiProektnyiManager from "../pages/courses/kto-takoi-proektnyi-manager";
import InstrumentyProektnogoManagera from "../pages/courses/instrumenty-proektnogo-managera";

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
  },
  {
    id:9,
    route: '/courses/',
    page: <Pages.Courses />
  },
  {
    id:10,
    route: '/courses/vvedenie/',
    page: <Introduction />
  },
  {
    id:11,
    route: '/courses/kto-takoi-proektnyi-manager/',
    page: <KtoTakoiProektnyiManager />
  },
  {
    id: 12,
    route: '/courses/intstrumenty-proektnogo-managera/',
    page: <InstrumentyProektnogoManagera />
  }
]

export const PAGE_AUTH = [
  {
    name: 'Binteq',
    login: 'binteq',
    password: 'binteq',
    path: '/projects/Binteq/tasks/'
  },
  {
    name: 'CRNsite',
    login: 'crnsite',
    password: 'crnsite',
    path: '/projects/CRNsite/tasks/'
  },
  {
    name: 'CRYXXEN',
    login: 'cryxxen',
    password: 'cryxxen',
    path: '/projects/CRYXXEN/tasks/'
  },
  {
    name: 'Dagestan Tour',
    login: 'dagestan_tour',
    password: 'dagestan_tour',
    path: '/projects/Dagestan%20Tour/tasks/'
  },
  {
    name: 'DevOps',
    login: 'devops',
    password: 'devops',
    path: '/projects/DevOps/tasks/'
  },
  {
    name: 'DS PRO',
    login: 'ds_pro',
    password: 'ds_pro',
    path: '/projects/DS%20PRO/tasks/'
  },
  {
    name: 'Eilbay',
    login: 'eilbay',
    password: 'eilbay',
    path: '/projects/Eilbay/tasks/'
  },
  {
    name: 'HMI Graphic Editor',
    login: 'hmi',
    password: 'hmi',
    path: '/projects/HMI%20Graphic%20Editor/tasks/'
  },
  {
    name: 'Lou App',
    login: 'lou_app',
    password: 'lou_app',
    path: '/projects/Lou%20App/tasks/'
  },
  {
    name: 'RegLab',
    login: 'reglab',
    password: 'reglab',
    path: '/projects/RegLab/tasks/'
  },
  {
    name: 'Tamyr',
    login: 'tamyr',
    password: 'tamyr',
    path: '/projects/Tamyr/tasks/'
  },
  {
    name: 'Testing Projects',
    login: 'testing',
    password: 'testing',
    path: '/projects/Testing%20Projects/tasks/'
  },
  {
    name: 'Window Manager',
    login: 'wm',
    password: 'wm',
    path: '/projects/Window%20Manager/tasks/'
  },
  {
    name: 'Тестовый проект',
    login: 'test',
    password: 'test',
    path: '/projects/Тестовый%20проект/tasks/'
  }
]