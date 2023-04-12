const item=document.getElementById("item");
const usersList=document.getElementById("users");
const username=document.getElementById("item1");
const emailId=document.getElementById("item2");

item.addEventListener('submit',onsubmit);
// making function
function onsubmit(e){
        e.preventDefault();
        const name=e.target.username.value;
        const email=e.target.emailId.value;
//add in local storage
        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
    

//create new variable for creating string like stru
        const myObj={
            name,
            email
        };
        let x=JSON.stringify(myObj);
        localStorage.setItem("userDet",x);

//create new element store data
        const usersList=document.getElementById("users");
        const li=document.createElement("li");
        li.appendChild(document.createTextNode(`${username.value} : ${emailId.value}`));
        usersList.appendChild(li);
        
//create fields
        username.value="";
        emailId.value="";

//create delete btn
    let deletebtn=document.createElement("input");
    deletebtn.type="button";
    deletebtn.value="Delete";
    
//append in li
    li.appendChild(deletebtn); 
//append li inside userList
    usersList.appendChild(li);

     deletebtn.onclick=(e)=>{
        e.preventDefault();
        localStorage.removeItem(username.value);
        usersList.removeChild(li);
        
    }
    //create edit btn
    let editbtn=document.createElement("input");
    editbtn.type="button";
    editbtn.value="Edit";
    console.log(editbtn);
    //append in li
    li.appendChild(editbtn); 
    //append li inside userList
    usersList.appendChild(li);

    editbtn.onclick=(e)=>{
        e.preventDefault();

        //populating the userdetails
        username.value=document.getElementById("item1");
        emailId.value=document.getElementById("item2");
        
        localStorage.removeItem(username.value);
        usersList.removeChild(li);
    }
    
}