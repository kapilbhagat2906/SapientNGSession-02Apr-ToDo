let _userId: number = 100;
let _toDoId: number = 100;

export class ToDoModel {
    constructor (
        public userId: number = ++_userId,
        public id: number = ++_toDoId,
        public title: string = `Title for ToDo ${id}`,
        public completed: boolean = false
    ) { }
}
