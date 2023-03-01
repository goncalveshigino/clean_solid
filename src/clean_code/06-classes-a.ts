(() => {
   
    type Gender = 'M' | 'F';

    class Person {

    constructor (
        public name: String, 
        public gender: Gender,
         public birthdate: Date,
         ){}

    }


    class User extends Person {

        public lastAccess:Date;

        constructor(
            public email: String,
            public rode: String,
            name: String,
            gender: Gender,
            birthdate: Date,
        ){
            super( name, gender, birthdate);
            this.lastAccess = new Date();
        }
        checkCredentials(){
            return true;
        }
    }

    class Settings extends User {
       constructor(
        public workingDirectory: String,
        public lastOpenFolder  : String,
        email                  :String,
        role                   : String,
        name                   : String,
        gender                 : Gender,
        birthdate              : Date
       ){
        super(email,role,name,gender,birthdate);
       }
    }


    const userSettings = new Settings (
        '/usr/home',
        '/home',
        'higino@gmail.com',
        'Admin',
        'Fernando',
        'M',
        new Date('1997-07-04')
    );

    console.log({userSettings, areCredentialsValid: userSettings.checkCredentials()})


})();