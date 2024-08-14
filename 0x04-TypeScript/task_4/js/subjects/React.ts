/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
    export interface Teacher {
      experienceTeachingReact?: number; // Added using declaration merging
    }
    export class React extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for React';
        }
        getAvailableTeacher(): stirng {
            if (this.teacher && this.teacher.experienceTeachingReact) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return 'No available teacher';
            }
        }
    }
}