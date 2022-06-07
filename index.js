

function click1() {
    event.preventDefault();
  let array=[]
  let text=''

    var checked = document.querySelectorAll('#food :checked');
    console.log(checked)
    var selected = [...checked].map(option => option.value);
    console.log(selected[0])

    var radio=document.getElementsByName('gender')
    console.log(radio)

    for(let i=0;i<radio.length;i++)
     {
        if(radio[i].checked)
          {
              console.log(radio[i].value)
          }
     }

     let input=document.getElementsByClassName('array')
     console.log(input)
     for(let i=0;i<input.length;i++)
       {
           console.log(input[i].value)
       }
      
       if(selected.length>=2)
         displayUsers(input,selected,radio)

         let form=document.getElementById('form')
         form.reset()
        
     

}

function displayUsers(input,selected,radio){
 
      
      
           let table1=document.querySelector(".table");
        
         
                 let row=table1.insertRow()
                 let fname=row.insertCell()
                 fname.innerHTML=input[0].value

                
                 let lname=row.insertCell()
                 lname.innerHTML=input[1].value

                 let email=row.insertCell()
                 email.innerHTML=input[2].value

                 let pin=row.insertCell()
                 pin.innerHTML=input[3].value

                 let gender=row.insertCell()
                 for(let i=0;i<radio.length;i++)
                   {
                       if(radio[i].checked)
                         {
                            
                            gender.innerHTML=radio[i].value
                         }
                   }

                   let food=row.insertCell()
                   for(let i=0;i<selected.length;i++)
                    {

                       food.innerHTML+=selected[i]+','

                      }
                    console.log(input[4].value)
                    let city=row.insertCell()
                    city.innerHTML=input[4].value  

                    let state=row.insertCell()
                    state.innerHTML=input[5].value

                    console.log(table1)

                   
    }