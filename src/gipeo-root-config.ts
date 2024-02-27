import { registerApplication, start, LifeCycles } from "single-spa";


registerApplication({
  name: "@gipeo/mf-navbar",
  app: () => System.import<LifeCycles>("@gipeo/mf-navbar"),
  activeWhen: ["/"]
});

//footer
registerApplication({
  name: "@gipeo/mf-footer",
  app: () => System.import<LifeCycles>("@gipeo/mf-footer"),
  activeWhen: ["/"]
});

//persona
// registerApplication({
//   name: "@gipeo/mf-persona",
//   app: () => System.import<LifeCycles>("@gipeo/mf-persona"),
//   activeWhen: ["/"]
// });



start({
  urlRerouteOnly: true,
});
