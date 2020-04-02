import toDoDataList from './mock/mock';
import { ToDoModel } from './model';

export default class ToDoService {
    listAll (): Promise<Array<ToDoModel>> {
        return new Promise((resolve) => {
            resolve(toDoDataList);
        });
    }

    save (toDoData: ToDoModel): Promise<boolean> {
        return new Promise((resolve, reject) => {
            let isDataSaved: boolean = false;

            try {
                let toDoitemWithSameId: ToDoModel = toDoDataList.find((toDoItem) => toDoItem.id === toDoData.id);
                if (!toDoitemWithSameId) {
                    toDoDataList.push(toDoData);
                    isDataSaved = true;
                }
            } catch (exception) {
                console.log(exception);
                reject(isDataSaved);
            }

            resolve(isDataSaved);
        });
    }

    update (toDoData: ToDoModel): Promise<boolean> {
        return new Promise((resolve, reject) => {
            let isDataUpdated: boolean = false;

            try {
                let toDoItemToUpdate: ToDoModel = toDoDataList.find((toDoItem) => toDoItem.id === toDoData.id);
                if (toDoItemToUpdate) {
                    toDoItemToUpdate.completed = toDoData.completed;
                    isDataUpdated = true;
                }
            } catch (exception) {
                console.log(exception);
                reject(isDataUpdated);
            }

            resolve(isDataUpdated);
        });
    }

    completedList (): Promise<Array<ToDoModel>> {
        return new Promise((resolve, reject) => {
            let completedToDoList: Array<ToDoModel> = toDoDataList.filter((toDoItem) => toDoItem.completed);
            resolve(completedToDoList);
        });
    }
}
