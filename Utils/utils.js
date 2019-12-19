const date = Date.parse(new Date())

const checkType = args => Object.prototype.toString.call(args).slice(8, -1)

const dateFormat = (timestamp, formats) => {
  // formats includes
  // 1. Y-m-d
  // 2. Y-m-d H:i:s
  // 3. Y-m-d
  // 4. Y-m-d H:i
  formats = formats || 'Y-m-d'
  const zero = function (value) {
    if (value < 10) {
      return '0' + value
    }
    return value
  }
  const myDate = timestamp ? new Date(timestamp) : new Date()
  const year = myDate.getFullYear()
  const month = zero(myDate.getMonth() + 1)
  const day = zero(myDate.getDate())
  const hour = zero(myDate.getHours())
  const minite = zero(myDate.getMinutes())
  const second = zero(myDate.getSeconds())

  return formats.replace(/Y|m|d|H|i|s/ig, function (matches) {
    return ({
      Y: year,
      m: month,
      d: day,
      H: hour,
      i: minite,
      s: second
    })[matches]
  })
}
console.log(dateFormat(date, 'Y-m-d'))

const timeFilter = time => {
  time -= 0
  const difTime = new Date().getTime() - time
  let { h, m } = { h: parseInt(difTime / (3600 * 1000)), m: parseInt(difTime / (60 * 1000)) }
  let msg = ''
  if (h < 1) {
    msg = `${m} minutes ago`
  } else if (h >= 1 && h <= 24) {
    msg = `${h} hours ago`
  } else if (h > 24) {
    h = parseInt(h / 24)
    msg = `${h} days ago`
  }
  return msg
}
console.log(timeFilter(68464646464)) // 17445 days ago

module.exports = {
  checkType, dateFormat, timeFilter
}
