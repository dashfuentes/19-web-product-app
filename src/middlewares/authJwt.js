export const verifyToken = async (req,res,next) => {
    const token = req.headers["x-access-token"]

   console.log(token)
   if (!token) return res.status(403).json({message: "No token provided"}) 
   next()
}
 