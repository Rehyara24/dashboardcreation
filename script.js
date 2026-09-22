//To redirect to another page you can 

const form = document.getElementById('myForm')

form.addEventListener("submit", async function(event){
    event.preventDefault()

    const formdata = new FormData(form)
    //data is essentially {"email" :..... "password": ....}
    const data = Object.fromEntries(formdata.entries())

    try{
        const response = await fetch('./userAccounts.json')
        
        if(!response.ok){
            console.log('error')
            throw new Error('Failed')
        }
        const users = await response.json()
        //this user is just like all the other objects you encountered in the tasks
        //if the user password and email matches any users in the users object redirect them to dashboard.html
        //use window.location.replace("http://127.0.0.1:5500/dashboard.html");

        users.forEach((user)=>{
            console.log("is it running?")
            if( user.email == data.email && user.password === data.password){

                window.location.replace("http://127.0.0.1:5500/dashboard.html");
                return;
            }else{
                console.log("invalid credentials")
            }
        })



        console.log(users)
    }catch{
        
    }

    console.log("this is the users data:" , data)
})