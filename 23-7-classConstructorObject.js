/**
 * class keyword is used to make js Class
 * constructor is used to add property on class.
 * it should declear before declear class method.
 */
class Student {
    constructor(id, name){
        this.id = id;
        this.name =name;
        this.school = "kolimunnesa school";;
    }
}

/**
 * new keyword is used to create object form class
 * we need to pass property value when creating obj
 * we can access propery by using obj name . property name
 */
const student1 = new Student(1,"Shubo");
const student2 = new Student(2, "mahiya");
const student3 = new Student(3, "Bappi");

// we can access class object property using obj_name.property_name or obj_name["property_name"]
// console.log(student1.name, student2.name);

// we can set value in property
student3["name"] = "Rias";
console.log(student3)