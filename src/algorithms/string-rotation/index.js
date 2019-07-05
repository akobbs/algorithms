export default function isRotation(str1, str2) {
  if (str1.length === str2.length && str1.length > 0) {
    return `${str2}${str2}`.includes(str1)
  }

  return false
}
