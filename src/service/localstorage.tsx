const TOKEN_KEY = "token-code.ed";
const id_key = "user-id-code.ed";

const id_reapplication = "id-reapplication";

const projects = "projects";

const menu_key = "menu-code.ed";

export const isAuthenticated = () => {
  return localStorage.getItem(TOKEN_KEY) !== null;
};

export const setYear = (id: string) => {
  localStorage.setItem("year-selection", id);
};

export const getYear = () => localStorage.getItem("year-selection");

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const login = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(id_key);
  localStorage.removeItem(id_reapplication);


  // localStorage.clear();
};

export const idUser = (id: string) => {
  localStorage.setItem(id_key, id);
};

export const idReapplication = (id: string) => {
  localStorage.setItem(id_reapplication, id);
};


export const ProjectLogin = (data: any) => {
  localStorage.setItem(projects, data);
};

export const GetProjects = () => {
  return localStorage.getItem(projects);
};
export const GetIdReapplication = () => {
  return localStorage.getItem(id_reapplication);
};

export const GetIdUser = () => {
  return localStorage.getItem(id_key);
};
export const menuItem = (id: string) => {
  localStorage.setItem(menu_key, id);
};

export const getMenuItem = () => {
  return localStorage.getItem(menu_key);
};
