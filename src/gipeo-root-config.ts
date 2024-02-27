import { registerApplication, start, LifeCycles } from "single-spa";


registerApplication({
  name: "@gipeo/mf-navbar",
  app: () => System.import<LifeCycles>("@gipeo/mf-navbar"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
