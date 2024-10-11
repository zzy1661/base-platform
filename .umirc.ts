import { defineConfig } from "umi";

export default defineConfig({
  plugins: ['@umijs/plugins/dist/qiankun'],
  routes: [
    { exact: true, path: '/', component: 'index' },
    { exact: true, path: '/app1', microApp: 'app1' },
    { exact: true, path: '/app2', microApp: 'app2' },
  ],
  qiankun: {
    master: {
      apps: [
        {
          name: 'app1', // 唯一 id
          entry: '//localhost:8001', // html entry
        },
        {
          name: 'app2', // 唯一 id
          entry: '//localhost:8002', // html entry
        },
      ],
    },
  },

  npmClient: 'yarn',
});
