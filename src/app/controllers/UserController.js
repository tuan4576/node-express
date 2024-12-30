const Course = require("../model/Course");

class UserController {
    index(req, res) {
        res.send('hello')
        // Hiển thị danh sách sản phẩm
    }
    register(req,res){
     
    }
}
module.exports = new UserController();
