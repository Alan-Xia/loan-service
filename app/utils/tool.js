

export function getBackInfo (code,data = '',success,msg) {
  const RESULT = {
    data: data,
    code: code,
    success: success,
    msg: msg
  }
  if (code != 200) {
    delete RESULT.data
  }
  return RESULT
}