const config = {
    get() {
        return {
            url : process.env.VUE_APP_BASE_API_URL + process.env.VUE_APP_BASE_API + '/',
            name: process.env.VUE_APP_BASE_API,
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/index.html'
        }
    },
    getProjectName(){
        return {
            projectName: "社会主义核心价值观视角下电商平台型社会责任评价研究"
        } 
    }
}
export default config
