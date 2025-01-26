// higher orde function which will accept in another files


// // try catch example
// const asyncHandler = (func) => async (req, res, next) => {
//     try {
//         await func(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }
// export {asyncHandler}



// Promise example
const asyncHandler = (requesHandler) => {
    (req, res, next) => {
        Promise.resolve(requesHandler(req, res, next))
        .catch((err) => next(err))
    }
}
export {asyncHandler}