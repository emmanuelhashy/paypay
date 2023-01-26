const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/invoice",
        component: () => import("components/Invoice/InvoiceDetails.vue"),
      },
      {
        path: "/dashboard",
        component: () => import("components/Dashboard/index.vue"),
      },
      {
        path: "/wallet",
        component: () => import("components/Wallet/index.vue"),
      },
      {
        path: "/activity",
        component: () => import("components/Activity/index.vue"),
      },
      {
        path: "/help",
        component: () => import("components/Help/index.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
