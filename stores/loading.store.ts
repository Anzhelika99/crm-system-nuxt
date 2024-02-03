// import {defineStore} from "pinia";
//
// interface IsLoading {
//     load: boolean
// }
//
// const defaultValue: { loading: IsLoading } = {
//     loading: {
//         load: true,
//     },
// }
//
// export const useIsLoadingStore = defineStore('isLoading', {
//     state: () => ({
//         isLoading: true,
//     }),
//     actions: {
//         set(data: boolean) {
//             this.$patch({ isLoading: data })
//         },
//     },
// })