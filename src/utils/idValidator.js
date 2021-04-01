export const courseIdValidator = courseId => {
    const hexTegExp = new RegExp("^[0-9a-fA-F]{24}$")
    return hexTegExp.test(courseId)
}