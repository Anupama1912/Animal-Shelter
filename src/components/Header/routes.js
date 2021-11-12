import urls from "../../../utils/urls";

const routes = [
  {
    name: "About",
    link: urls.pages.index,
    auth: false,
    atEnd: false,
  },
  {
    name: "Adopt",
    link: urls.pages.ssr,
    auth: false,
    atEnd: false,
  },
  {
    name: "Admain",
    link: urls.pages.login,
    auth: false,
    atEnd: false,
  }
];

export default routes;
