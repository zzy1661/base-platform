// import { MicroApp } from 'umi';

// export const qiankun = Promise.resolve().then(() => ({
//   routes:[
//     {path:'/app1',
//     MicroApp:'app1',},{
//       path:'/app2',
//     MicroApp:'app2',
//     }
//   ],
//   // 注册子应用信息
//   apps:[
//     {
//       name: 'app1', // 唯一 id
//       entry: '//localhost:8001', // html entry
//     },
//     {
//       name: 'app2', // 唯一 id
//       entry: '//localhost:8002', // html entry
//     }
//   ],
//   // 完整生命周期钩子请看 https://qiankun.umijs.org/zh/api/#registermicroapps-apps-lifecycles
//   lifeCycles: {
//     afterMount: (props) => {
//       console.log(props);
//     },
//   },
//   // 支持更多的其他配置，详细看这里 https://qiankun.umijs.org/zh/api/#start-opts
// }));