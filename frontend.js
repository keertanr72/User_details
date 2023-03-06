const parent = document.getElementById("addhere")

  async function xyz(event){
    event.preventDefault()
    alert('Submitted')
    const tempname = event.target.name.value
    const tempemail = event.target.email.value
    const tempphno = event.target.phno.value
    const tobj = {
                name:tempname,
                email:tempemail,
                phoneNumber:tempphno
    }
    let newline = document.createElement("li")
    newline.innerHTML = tempname
    document.body.appendChild(newline)
    let deletebtn = document.createElement("button")
    deletebtn.appendChild(document.createTextNode('X'));
    newline.appendChild(deletebtn)
    parent.appendChild(newline)
    deletebtn.id = Math.random()
    deletebtn.className = 'deleteclass'
    
    const data = await axios.post("http://localhost:3000/admin/post-user",tobj)
  }
  
  window.addEventListener("DOMContentLoaded", async () => {
    const res = await axios.get('http://localhost:3000/admin/get-user')
            for(let i in res.data){
                let newline = document.createElement("li")
                newline.innerHTML = res.data[i].name
                document.body.appendChild(newline)
                let deletebtn = document.createElement("button")
                deletebtn.appendChild(document.createTextNode('X'));
                newline.appendChild(deletebtn)
                parent.appendChild(newline)
                deletebtn.className = 'deleteclass'
                deletebtn.id = res.data[i].id
                console.log(res.data[i].id)
                document.getElementById(res.data[i].id).addEventListener('click',(event) => {
                    parent.removeChild(newline)
                    axios.delete(`http://localhost:3000/delete-user/${res.data[i].id}`)
                  })
            }
        
  })