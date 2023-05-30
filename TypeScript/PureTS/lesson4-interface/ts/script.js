var MySql = /** @class */ (function () {
    function MySql() {
    }
    MySql.prototype.add = function () {
        console.log('MySql Add');
    };
    MySql.prototype.get = function () {
        console.log('MySql get');
    };
    ;
    MySql.prototype.update = function () {
        console.log('MySql update');
    };
    ;
    MySql.prototype.delete = function () {
        console.log('MySql delete');
    };
    ;
    return MySql;
}());
var MongoDB = /** @class */ (function () {
    function MongoDB() {
    }
    MongoDB.prototype.add = function () {
        console.log('MongoDB Add');
    };
    MongoDB.prototype.get = function () {
        console.log('MongoDB get');
    };
    ;
    MongoDB.prototype.update = function () {
        console.log('MongoDB update');
    };
    ;
    MongoDB.prototype.delete = function () {
        console.log('MongoDB delete');
    };
    ;
    return MongoDB;
}());
function AddDatabase(database) {
    database.add();
}
AddDatabase(new MongoDB());
