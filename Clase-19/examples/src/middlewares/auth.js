export const auth = function (req, res, next) {
    const {username, password} = req.query;

    if (username !== "Joaco" || password !== "coder2024") {
        return res.send("Login Failed!");
    }

    req.session.user = username;
    req.session.admin = true;
    req.session.data = {
        age: 30,
        course: "Programacion Backend"
    }

    return next();
}