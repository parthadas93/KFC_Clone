//action type

export const isAuth = "ISAUTH"

//action creater

export const isAuthAction = (data) => {
    return {
        type: isAuth,
        payload: data
    }
}
