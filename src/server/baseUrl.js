/**
 * 用于判断当前编译环境为开发环境还是正式环境
 */
let baseUrlPrefix = '';
const env = process.env.NODE_ENV === 'development' ? 'development' : 'production';
switch (env) {
    case 'development':
        baseUrlPrefix = 'https://assistantedu.com:8180';
        // baseUrlPrefix = 'http://192.168.100.133:8786';
        // baseUrlPrefix = 'https://www.huanxu.top:8786';
        // baseUrlPrefix = 'https://xyaf.pymc.edu.cn:8786';
        // baseUrlPrefix = 'http://192.168.100.116:8786';
        break;
    case 'production':
        baseUrlPrefix = 'https://www.huanxu.top:8786';
        break;
}

const api = {
    baseUrl: baseUrlPrefix,
};

export default api;
