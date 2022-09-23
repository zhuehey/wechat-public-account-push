export const USER_CONFIG = {
  /**
   * 公众号配置
   */
  
  // 公众号APP_ID
  APP_ID: "wxc5c9ee3a9809b464",
   // 模板消息id
  TEMPLATE-ID:"aCmMubfCNGG9R-GyVX_2XTZ3sFgg2_eNqKCqbmr5Pjo",
 //接收公众号消息的微信号，如有多个，需要在{}里用英文逗号间隔，列如{“wx1”，“wx2”}
  USERS:{"o_oXa59K_p9yoN1con3p2zY-Wd8U"},
    
  
  // 功能开关,打开：true，关闭：false
  SWITCH: {
    /** 每日天气 */
    weather: true,
  
  /**
   * 信息配置
   */
  
  /** 天气相关 */
  
  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: "湖南",
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: "常德",
  
  /** 重要节日相关 */
  
   * 重要节日，修改名字为对应需要显示的名字, date 仅填月日即可, 请严格按照示例填写
   * type必须填！ 只能 “生日” 和 “节日” 二选一！
   * 生日时，小璐填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时小璐填写相应展示的节日，你可以填“被搭讪纪念日”
  FESTIVALS: [
    // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
    {"type": "*生日", "name": "老婆", "year": "2003", "date": "02-13", isShowAge: true},
    {"type": "节日", "name": "结婚纪念日", "year": "2020", "date": "09-03"},
    // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
    {"type": "生日", "name": "李四", "year": "1996", "date": "09-31", isShowAge: true},
    {"type": "节日", "小璐": "被搭讪纪念日", "year": "2022", "date": "09-21"},
  ],
   * 限制重要节日的展示条目, 需要填写数字;3
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT:3,
  
  /** 日期相关 */
  
    // 在一起的日子
    {"keyword": "love_day", date: "2022-09-21"},、
