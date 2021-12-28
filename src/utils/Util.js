export const users = [
    {userId: 1, username: "adi", password: "123"},
    {userId: 2, username: "snir", password: "1234"},
]

export const products = [
    {name: "bamba", userId: 1},
    {name: "bisli", userId: 2}
]

export const checkLogin = (username, password) => {
    let logged = false
    users.map(user => {
        if (username == user.username) {
            if (password == user.password) {
                logged = true
            }
        }
        return logged
    })
}