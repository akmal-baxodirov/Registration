/*jshint esversion: 6 */
class Person{
    constructor(firstname, lastname, gender, birth, address, city){
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;
        this.birth = birth;
        this.address = address;
        this.city = city;
    }
}

class UI{
    addPersonToList(person){
        const list =document.getElementById("person-list");
        const row = document.createElement("tr");
        let num = 1;
        row.innerHTML = `
        <th scope="row">${num}</th>
        <td>${person.firstname}</td>
        <td>${person.lastname}</td>
        <td>${person.gender}</td>
        <td>${person.birth}</td>
        <td>${person.address}</td>
        <td>${person.city}</td>
        <td><a href="#" class="delete">X</a></td>
        `;
        list.appendChild(row); 
    };
    showAlert(message, className){

        const div = document.createElement("div");
    
        div.classList = `alert ${className}`;
    
        div.appendChild(document.createTextNode(message));
    
        const row = document.querySelector(".row");
    
        const form = document.querySelector("#registration");
    
        row.insertBefore(div, form);
    
    
        setTimeout(function(){
            document.querySelector(".alert").remove();
        }, 3000);
    };
    clearFields(){
        const firstName = document.getElementById("firtsname").value = "";
        const lastname = document.getElementById("lastname").value  = "";
        const birth = document.getElementById("dateofbirth").value= "";
        const address = document.getElementById("inputAddress").value = "";
        const city = document.getElementById("inputCity").value = "";
    }
    deletePerson(target){
        if(target.className === "delete"){
            target.parentElement.parentElement.remove();
            this.showAlert("Person deleted", "alert-success w-100")
        }
    }
}





document.getElementById("registration").addEventListener("submit", (e)=>{
    const firstName = document.getElementById("firtsname").value,
          lastname = document.getElementById("lastname").value,  
          gender = document.querySelector('input[name="gridRadios"]:checked').value,
          birth = document.getElementById("dateofbirth").value,
          address = document.getElementById("inputAddress").value,
          city = document.getElementById("inputCity").value


    const person = new Person(firstName, lastname, gender, birth, address, city);
    const ui = new UI();      


    if(firstName === "" || lastname === "" || gender === "" || birth === "" || address === "" || city === ""){
        ui.showAlert("Fill in all inputs MOTHERFUCKER", "alert-danger w-100");
    }else{
    ui.addPersonToList(person);
    ui.showAlert("Good Job", "alert-success w-100");
    ui.clearFields();
    
    }
    e.preventDefault()
});

document.getElementById("person-list").addEventListener("click", (e)=>{
    const ui = new UI();
    ui.deletePerson(e.target)
    
    e.preventDefault();


})


