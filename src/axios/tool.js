import axios from 'axios'

const requestTool = axios.create({
    baseURL: 'http://localhost:8081/api',
    // timeout设置为10s
    timeout: 1000000,
    headers: {
        // data_format格式
        ['Content-Type']: 'application/x-www-form-urlencoded',
        ['Authorization']: localStorage.getItem('token'),
        // 设置跨域请求
        ['Access-Control-Allow-Origin']: '*',
        ['Access-Control-Allow-Methods']: 'GET, POST, PUT, DELETE, OPTIONS',
        ['Access-Control-Allow-Headers']: 'Content-Type, Authorization, X-Requested-With',
        // 设置接收数据格式
        ['Accept']: 'application/json'

    }
})

requestTool.interceptors.request.use(
    config => {
        console.log("拦截器拦截到的响应数据：", config)
        $message.loading('加载中')
        return config
    },
    error => {
        $message.error('请求失败，请检查网络')
        return Promise.reject(error)
    }
)

requestTool.interceptors.response.use(
    response => {
        $message.destroyAll()
        const success = response.data.success
        if (success === true){
            $message.success("请求成功")
            return response
        }
        $message.error(response.data.msg)
        return response
    }
)

export const request = async function (data, url) {
    return await requestTool.post(url, data)
}





