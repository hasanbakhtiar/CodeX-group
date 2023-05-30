interface IDatabase {
    add();
    get();
    update();
    delete();
}


class MySql implements IDatabase {
    add() {
        console.log('MySql Add');
    }
    get() {
        console.log('MySql get');
    };
    update() {
        console.log('MySql update');
    };
    delete() {
        console.log('MySql delete');
    };
}

class MongoDB implements IDatabase {
    add() {
        console.log('MongoDB Add');
    }
    get() {
        console.log('MongoDB get');
    };
    update() {
        console.log('MongoDB update');
    };
    delete() {
        console.log('MongoDB delete');
    };
}

function AddDatabase(database:IDatabase){
    database.add();
}




AddDatabase(new MongoDB());
