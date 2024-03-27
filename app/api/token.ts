import jwt from "jsonwebtoken"

export const getTokenData = (token: string) => jwt.verify(token, process.env.JWT_SECRET)

export const generateToken = (email: string, id: string) => {
    const token = jwt.sign(
        { email, id },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRE_TIME }
    )

    return token
}

export const verifyAuthorizationRequest = (headers: any) => {
    if (!headers.authorization) {
        return false
    }

    const tokenData = getTokenData(headers.authorization)

    if (!tokenData) {
        return false
    }

    return true
}
