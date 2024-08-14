interface Teacher {
    firstName: string;
    lastName: string;
    readonly fullTimeEmployee: boolean;
    readonly location: string;
    yearsOfExperience?: number;
    [key: string]: any; // Allows adding additional attributes
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`
};

interface StudentClassInterface {
    new (firstName: string, lastName: string): StudentClass;
}

export class StudentClass implements StudentClass {
    constructor(private firstName: string, private lastName: string) {}

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

// Example usage
const student = new StudentClass('John', 'Doe');
console.log(student.workOnHomework()); // Output: Currently working
console.log(student.displayName());    // Output: John