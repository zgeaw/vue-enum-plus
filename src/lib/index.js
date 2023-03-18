const Constant = {} 

Constant.install = function (Vue, options) {
  /**
   * 根据枚举值获取描述
   * @param {*} constantName 枚举名
   * @param {*} value          枚举值
   * @returns
   */
  const constantInfo = options.enumInfo||{}
  const Enum = {}
  Enum.getDesc = function (constantName, value) {
    if (!constantInfo.hasOwnProperty(constantName)) {
      return ''
    }
    let constantItem = constantInfo[constantName]
    for (let item in constantItem) {
      if (constantItem[item].value === value) {
        return constantItem[item].desc
      }
    }
  }
  /**
   * 根据枚举值获取对象
   * @param {*} constantName 枚举名
   * @param {*} value          枚举值
   * @returns
   */
  Enum.getObj = function (constantName, value) {
    if (!constantInfo.hasOwnProperty(constantName)) {
      return {}
    }
    let constantItem = constantInfo[constantName]
    for (let item in constantItem) {
      if (constantItem[item].value === value) {
        return constantItem[item]
      }
    }
  }
  /**
   * 根据枚举名获取对应的描述键值对[{value:desc}]
   * @param {*} constantName 枚举名
   * @returns
   */
  Enum.getList = function (constantName) {
    if (!constantInfo.hasOwnProperty(constantName)) {
      return []
    }
    const result = []
    let constantItem = constantInfo[constantName]
    for (let item in constantItem) {
      let value = constantItem[item].value
      let desc = constantItem[item].desc
      let newItem = {}
      for(let key in constantItem[item]){
        newItem[key] = constantItem[item][key]
      }
      result.push(newItem)
    }
    return result
  }

  /**
   * 根据枚举名获取对应的value描述键值对{value:desc}
   * @param {*} constantName 枚举名
   * @returns
   */
  Enum.getValueDesc = function (constantName) {
    if (!constantInfo.hasOwnProperty(constantName)) {
      return {}
    }
    const result = {}
    let constantItem = constantInfo[constantName]
    for (let item in constantItem) {
      result[constantItem[item].value] = constantItem[item].desc
    }
    return result
  }
  Vue.prototype.$Enum = Enum
}

export default Constant
