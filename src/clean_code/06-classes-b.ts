(() => {
   
    type Gender = 'M' | 'F';

    interface PersonProps {

         name: String, 
         gender: Gender,
         birthdate: Date,

    }

    class Person {
        public birthdate: Date;
        public gender   : Gender;
        public name     : String;


    constructor ({name, gender,birthdate}: PersonProps){
        this.name      =name;
        this.gender    = gender;
        this.birthdate = birthdate;
    }

    }


    interface UserProps {
        
        birthdate: Date;
        email    : String;
        gender   : Gender;
        name     : String;
        role     : String;
       
    }


    class User extends Person {

        public email    : String;
        public role    : String;
        public lastAccess:Date;

        constructor({
            birthdate,
            email,
            name,
            role,
            gender,
         }: UserProps){
            super({ name, gender, birthdate});
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;

        }
        checkCredentials(){
            return true;
        }
    }

    interface UserSettingsProps {

        workingDirectory       : String,
        lastOpenFolder         : String,
        email                  :String,
        role                   : String,
        name                   : String,
        gender                 : Gender,
        birthdate              : Date
    }

    class Settings extends User { 

        public workingDirectory: String;
        public lastOpenFolder  : String;

       constructor({  
        workingDirectory,
        lastOpenFolder  ,
        email   ,               
        role  ,                 
        name  ,                
        gender  ,               
        birthdate,}  : UserSettingsProps         
       ){
        super({email, role, name, gender, birthdate});
        this.workingDirectory = workingDirectory;
        this.lastOpenFolder   = lastOpenFolder;
       }
    }


    const userSettings = new Settings (
       { 
        workingDirectory: '/usr/home',
       lastOpenFolder   : '/home',
       email            : 'higino@gmail.com',
       role             : 'Admin',
       name             : 'Fernando',
       gender           :'M',
       birthdate        : new Date('1997-07-04')}
    );

    console.log({userSettings, areCredentialsValid: userSettings.checkCredentials()})


})();