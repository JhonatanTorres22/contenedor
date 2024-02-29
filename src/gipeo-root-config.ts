import { registerApplication, start, LifeCycles } from "single-spa";


registerApplication({
  name: "@gipeo/mf-navbar",
  app: () => System.import<LifeCycles>("@gipeo/mf-navbar"),
  activeWhen: (locations) => !["/"].includes(locations.pathname)
});

//footer
registerApplication({
  name: "@gipeo/mf-footer",
  app: () => System.import<LifeCycles>("@gipeo/mf-footer"),
  activeWhen: (locations) => !["/"].includes(locations.pathname)
});

//persona
registerApplication({
  name: "@gipeo/mf-persona",
  app: () => System.import<LifeCycles>("@gipeo/mf-persona"),
  activeWhen: ["/mf-persona"]
});

//rol
registerApplication({
  name: "@gipeo/mf-rol",
  app: () => System.import<LifeCycles>("@gipeo/mf-rol"),
  activeWhen: ["/mf-rol"]
});

//login
registerApplication({
  name: "@gipeo/mf-login",
  app: () => System.import<LifeCycles>("@gipeo/mf-login"),
  activeWhen: (locations) => locations.pathname === "/"
});


start({
  urlRerouteOnly: true,
});
