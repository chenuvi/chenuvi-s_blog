import siteConfig from "@/site.config";

export default defineNuxtRouteMiddleware((to, _from) => {
  useHead({
    title: to.path,
    titleTemplate: (titleChunk) => {
      const t = titleChunk?.replace("/", "");
      return t ? ` ${t} - ${siteConfig.title}` : `${siteConfig.title}`;
    },
    meta: [
      {
        name: "title",
        content: to.path,
      },
    ],
  });
});
