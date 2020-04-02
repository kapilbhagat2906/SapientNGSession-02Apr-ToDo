import ToDoService from './ToDoService';
import {ToDoModel} from './model/ToDoModel';

export default class ToDoComponent {
    constructor (private toDoService: ToDoService) {}
    async save(toDoData: ToDoModel): Promise<boolean> {
        return await this.toDoService.save(toDoData);
    }

    async getAllToDos (): Promise<Array<ToDoModel>> {
        let allToDoData = await this.toDoService.listAll();
        return allToDoData
    }

    async updateToDo (toDoData: ToDoModel): Promise<boolean> {
        toDoData.completed = true;
        return await this.toDoService.update(toDoData);
    }

    async getCompletedToDos(): Promise<Array<ToDoModel>> {
        return await this.toDoService.completedList();
    }
}

let toDoService = new ToDoService();
let toDo = new ToDoComponent(toDoService);

/** GET ALL TODOS */
toDo.getAllToDos()
    .then((data) => {
        console.log('***************************************** All ToDo List *****************************************');
        console.log(data);
    });

/** SAVE A NEW TODO ITEM */
let toDoToSave: ToDoModel = new ToDoModel();
toDo.save(toDoToSave)
    .then((isDataSaved) => {
        console.log('***************************************** Save Data *****************************************');
        if (isDataSaved) {
            console.log(`To Do with id ${toDoToSave.id} is saved successfully !!`);
        } else {
            console.log(`To Do with id ${toDoToSave.id} could not be saved.`);
        }
    });

/** MARK PREVIOUS SAVED ITEM AS COMPLETE */
toDo.updateToDo(toDoToSave)
    .then((isDataUpdated) => {
        console.log('***************************************** Update Data *****************************************');
        if (isDataUpdated) {
            console.log(`To Do with id ${toDoToSave.id} is updated successfully to complete state !!`);
        } else {
            console.log(`To Do with id ${toDoToSave.id} could not be updated.`);
        }
    });

/** TEST UPDATE FAIL CASE */
let toDoToUpdate: ToDoModel = new ToDoModel(200, 200);
toDo.updateToDo(toDoToUpdate)
    .then((isDataUpdated) => {
        console.log('***************************************** Update Data *****************************************');
        if (isDataUpdated) {
            console.log(`To Do with id ${toDoToUpdate.id} is updated successfully to complete state !!`);
        } else {
            console.log(`To Do with id ${toDoToUpdate.id} could not be updated.`);
        }
    });

/** FILTERED TODOS WHICH ARE COMPLETE */
toDo.getCompletedToDos()
    .then((data) => {
        console.log('***************************************** Completed ToDO List *****************************************');
        console.log(data);
    });

