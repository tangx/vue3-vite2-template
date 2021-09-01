

interface AppConfig {
    BaiduApi?: string
    AliApi: string
}

export const appConfig: AppConfig = {
    BaiduApi: "//api.baidu.com",
    AliApi: "//api.aliyun.com"
}


function initial() {
    // 获取 interface 的 所有 key
    const keys = Object.keys(appConfig)
    // console.log(keys)

    // 便利 所有 key
    for (const key of keys) {
        // https://stackoverflow.com/questions/56568423/typescript-no-index-signature-with-a-parameter-of-type-string-was-found-on-ty/56569217
        // key 类型断言
        // const keyname = <keyof AppConfig>key // 方式1
        const keyname = key as keyof AppConfig // 方式2
        // console.log("keyname=", keyname);
        // console.log("value=", appConfig[keyname]);
    }
}


function injectMeta() {
    const metas = document.getElementsByTagName('meta')

    // // 使用 meta 的 id 获取
    // const item = metas.item(3)
    // console.log(item);

    // // 使用 meta name 获取
    const item = metas.namedItem('devkit:config')
    // console.log("item=> ", item);

    const content = item?.content
    // console.log("content => ", content);

    if (content) {
        const pairs = content.split(',')
        // console.log("pairs=>", pairs);


        for (const pair of pairs) {
            const parts = pair.split('=')
            const key = <keyof AppConfig>parts[0]
            const value = <string>parts[1]

            // 没有 key 或者 没有 value 则跳过
            if (!value || !key) {
                continue
            }

            // 赋值 或 创建
            appConfig[key] = value
        }
    }

    console.log("appConfig=>", appConfig);

}


export default injectMeta()
