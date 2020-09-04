const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const dbconfig = {
    host: "localhost",
    user: "root",
    password: "Rupa2997@",
    database: "signup",
};

const addUser = async (input) => {
    const connection = mysql.createConnection(dbconfig);

    await connection.connectAsync();

    const sql =
        "INSERT INTO signup (Username ,Email , Password , CPassword, Mobile_No ) VALUES (?, ?, ?, ?, ?)";
    await connection.queryAsync(sql, [
        input.Username,
        input.Email,
        input.Password,
        input.CPassword,
        input.Mobile_No
    ]);

    await connection.endAsync();
};

let authenticateuser = async (input) => {
    const connection = mysql.createConnection(dbconfig);
    await connection.connectAsync();

    let sql = "SELECT * FROM SIGNUP WHERE EMAIL=? AND PASSWORD=?";
    const results = await connection.queryAsync(sql, [input.Email,
    input.Password]);
    console.log(results);
    await connection.endAsync();

    if (results.length === 0) {
        throw new Error("Invalid Credentials");
    }
};

let updateuser = async (input) => {
    const connection = mysql.createConnection(dbconfig);
    await connection.connectAsync();

    let sql = "UPDATE SIGNUP SET PASSWORD = ?, CPASSWORD = ?  WHERE EMAIL=?";
    const results = await connection.queryAsync(sql, [input.Password,
    input.CPassword, input.Email]);
    console.log(results);
    await connection.endAsync();

    if (results.length === 0) {
        throw new Error("Invalid Credentials");
    }
};

let emailvarification = async (input) => {
    const connection = mysql.createConnection(dbconfig);
    await connection.connectAsync();

    let sql = "SELECT * FROM SIGNUP WHERE email=?";
    const results = await connection.queryAsync(sql, [
        input.email
    ]);

    await connection.endAsync();

    if (results.length === 0) {
        throw new Error("Invalid Credentials");
    }
};

let getdata = async () => {
    try {
        let conection = mysql.createConnection(dbconfig);
        //console.log("in database code")
        await conection.connectAsync();

        let sql = "select * from products";

        let result = await conection.queryAsync(sql);


        await conection.endAsync();
        return result

    }
    catch (err) {
        console.log(err);
    }
}
let getdataFruit = async () => {
    try {
        let conection = mysql.createConnection(dbconfig);
        //console.log("in database code")
        await conection.connectAsync();

        let sql = "select * from FruitVegii";

        let result = await conection.queryAsync(sql);


        await conection.endAsync();
        return result

    }
    catch (err) {
        console.log(err);
    }
}

let addproduct = async (input) => {
    try {
        let conection = mysql.createConnection(dbconfig);
        //console.log("in database code")
        await conection.connectAsync();

        let sql = "insert into ODetails(ProductName ,ProductValue) values( ?, ?)";

        let result = await conection.queryAsync(sql, [
            input.ProductName,
            input.ProductValue,
        ]);

        console.log(result);
        await conection.endAsync();


    }
    catch (err) {
        console.log("hh");
        console.log(err);
    }
}
module.exports = { addUser, authenticateuser, updateuser, emailvarification, getdata, getdataFruit, addproduct };