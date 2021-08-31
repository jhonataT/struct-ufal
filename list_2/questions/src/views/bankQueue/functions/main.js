const row = new Array();

export function numberUsersByPriority(lists){
    const listsLength = [
        {length: lists[0].length, list: 0},
        {length: lists[1].length, list: 1},
        {length: lists[2].length, list: 2},
        {length: lists[3].length, list: 3},
    ]
    listsLength.sort((a, b) => {
        return a.length < b.length ? -1 : a.length > b.length ? 1 : 0;
    })

    let lessList;
    
    for(let i = 0; i < listsLength.length; i++){
        if(listsLength[i].length !== 0){
            lessList = listsLength[i];
            break;
        }
    }

    return lessList;

}

export function defineRow(lists, lessList){
    row.splice(0);

    for(let i = 0; i < lessList.length; i++){
        for(let j = 3; j >= 0; --j){
            let newUsersInRow = lists[j];
            newUsersInRow = newUsersInRow[0];
            lists[j].splice(0, 1);
            
            if(newUsersInRow) row.push(newUsersInRow);
        }
    }

    row.sort((a, b) => {
        return a.priority > b.priority ? -1 : a.priority < b.priority ? 1 : 0;
    })
    
    return row;
}

export function firstProcessInQueue(users){
    const lists = [[],[],[],[]];
    users.map( (user) => {
        switch(user.priority){
            case '0': 
                lists[0].push(user)
                break;
            case '1':
                lists[1].push(user)
                break;
            case '2':
                lists[2].push(user)
                break;
            case '3':
                lists[3].push(user)
                break;
            default: 
                break;
        }
    })

    return lists;
    // defineRow(lists);
}