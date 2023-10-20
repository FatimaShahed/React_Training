import React, {useState, useEffect} from 'react';

function Parent() {
    const [UserArr1, setUserArr1] = useState([
        {id: 1, name: 'User1', click: 'false', color: 'black'},
        {id: 2, name: 'User2', click: 'false', color: 'black'},
        {id: 3, name: 'User3', click: 'false', color: 'black'},
        {id: 4, name: 'User4', click: 'false', color: 'black'},
        {id: 5, name: 'User5', click: 'false', color: 'black'},

        // Add more users as needed
    ]);
    const [UserArr2, setUserArr2] = useState([]);
    const [selectedUser1, setSelectedUser1] = useState('');
    const [selectedUser2, setSelectedUser2] = useState('');


    const changeColor = (user) => {
        const updatedUsers = [...UserArr1]; // Create a copy of the user array
        const userToUpdate = updatedUsers.find((u) => u.id === user.id); // Find the user to update

        if (userToUpdate) {
            userToUpdate.color = 'green'; // Change the color to 'green'
        }
        //setSelectedUser1(user);
        userToUpdate.click = 'true';
        setUserArr1(updatedUsers);
        console.log(`Selected user: ${user.name}`);


        // console.log(`Selected user: ${selectedUser1.name}`);

    };
    const changeColorAgain = (user) => {
        const updatedUsers = [...UserArr2]; // Create a copy of the user array
        const userToUpdate = updatedUsers.find((u) => u.id === user.id); // Find the user to update

        if (userToUpdate) {
            userToUpdate.color = 'red'; // Change the color to 'green'
        }
        userToUpdate.click = 'true';
        setUserArr2(updatedUsers);
        //setSelectedUser2(user);
        //console.log(`Selected user: ${selectedUser2.name}`);

    };

    const passDataToFirstList = () => {

        // if (selectedUser2) {

        // Here, you can access the selectedUser and perform actions
        //       console.log(`Selected user: ${selectedUser2.name}`);
        const updatedUsersForList1 = [...UserArr2]; // Create a copy of the user array
        const updatedUsersForList2 = [...UserArr2]; // Create a copy of the user array
        const UpdateInList2 = updatedUsersForList1.filter((u) => u.click !== 'true');
        const UpdateInList1 = updatedUsersForList2.filter((u) => u.click === 'true');

        const mergedObject = [ ...UserArr1, ...UpdateInList1 ];        // Push elements from array2 into the copy
        console.log(UpdateInList1)
        const newArr = []
        for (let i = 0; i < mergedObject.length; i++) {
            const user = { ...mergedObject[i] };
            user.click = 'false'; // Set the new color here
            newArr.push(user);
        }
        setUserArr1(newArr);



        // const updatedUsers1 = [];
        //
        // for (let i = 0; i < UserArr1.length; i++) {
        //     const user = { ...UserArr1[i] };
        //     user.click = 'false'; // Set the new color here
        //     updatedUsers1.push(user);
        // }
        // const updatedUsers2 = [];
        //
        // for (let i = 0; i < UserArr2.length; i++) {
        //     const user = { ...UserArr2[i] };
        //     user.click = 'false'; // Set the new color here
        //     updatedUsers2.push(user);
        // }
        // setUserArr1(updatedUsers2);
        //
        // setUserArr2(updatedUsers1);

        setUserArr2(UpdateInList2);
        //   } else {
        console.log("no user");
        //   }
    };
    const passDataToSecondList = () => {

        // if (selectedUser2) {

        // Here, you can access the selectedUser and perform actions
        //       console.log(`Selected user: ${selectedUser2.name}`);
        const updatedUsersForList1 = [...UserArr1]; // Create a copy of the user array
        const updatedUsersForList2 = [...UserArr1]; // Create a copy of the user array
        const UpdateInList1 = updatedUsersForList1.filter((u) => u.click !== 'true');
        const UpdateInList2 = updatedUsersForList2.filter((u) => u.click === 'true');
        const mergedObject = [ ...UserArr2, ...UpdateInList2 ];        // Push elements from array2 into the copy
        console.log(mergedObject)
        const newArr= [];
        for (let i = 0; i < mergedObject.length; i++) {
            const user = { ...mergedObject[i] };
            user.click = 'false'; // Set the new color here
            newArr.push(user);
        }
        setUserArr2(newArr);

        setUserArr1(UpdateInList1);
        const updatedUsers1 = [];
        //   } else {
        console.log("no user");
        //   }


    };

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <ul style={{listStyleType: 'none', margin: '0 10px', padding: 0}}>
                {UserArr1.map((user, index) => (
                    <li key={user.id} style={{textAlign: 'left', paddingTop: 10}}>
                        <a href="#" onClick={() => changeColor(user)}>
                            <font color={user.color}>{user.name}</font>
                        </a>
                    </li>
                ))}
            </ul>

            <div
                style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 10px', padding: 10}}>
                <button style={{margin: '5px 0'}} onClick={passDataToSecondList}>Pass Data</button>
                <button style={{margin: '5px 0'}} onClick={passDataToFirstList}>Retrieve Data</button>
            </div>

            <ul style={{listStyleType: 'none', margin: '0 10px', padding: 0}}>
                {UserArr2.map((user, index) => (
                    <li key={user.id} style={{textAlign: 'left', paddingTop: 10}}>
                        <a href="#" onClick={() => changeColorAgain(user)}>
                            <font color={user.color}>{user.name}</font>
                        </a>
                    </li>
                ))}
            </ul>
        </div>


    );


}

export default Parent;