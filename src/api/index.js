import { camelCase } from 'lodash';

const requireModule = require.context("./resources", false, /\.js$/)
const api = {}

requireModule.keys().forEach(fileName => {
    if (fileName === "./ContentPage") return
    const moduleName = camelCase(fileName.replace(/(\.\/|\.js)/g, ""))
    api[moduleName] = {
        ...requireModule(fileName).default,
    }
})

export default api
