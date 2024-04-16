import axios from "axios";
import { api_url, headers } from "../utils";

// const response = await fetch(`${api_url}/issues?fields=?fields=id,summary,project(name),customFields(id,name,value(avatarUrl,buildLink,color(id),fullName,id,isResolved,localizedName,login,minutes,name,presentation,text))`, {
//   method: 'GET',
//   headers: headers
// });

export const api = {
  getTasks: () => axios.get(`${api_url}/issues?fields=id,summary,project(name),customFields(id,name,value(avatarUrl,buildLink,color(id),text,fullName,id,isResolved,localizedName,login,minutes,name,presentation,text)),comments(text)`, {headers}),
  getWorkers: () => axios.get(`${api_url}/users?fields=name,login,online,email,avatarUrl`,{headers}),
  getProjects: () => axios.get(`${api_url}/admin/projects?fields=id,name,shortName,createdBy(login,name,id),leader(login,name,id),key`,{headers}),
  getActivities: (id) => axios.get(`${api_url}/issues/${id}/activities?categories=CustomFieldCategory,CommentsCategory&fields=summary,developer,author(name,login),timestamp,target(text),added(name),removed(name)`, {headers})
}