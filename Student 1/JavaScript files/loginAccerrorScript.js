const Email=document.getElementById("email")
const Password=document.getElementById("password")
const form=document.getElementById("login Account")

const errorElement=document.getElementById("error")

form.addEventListener('submit',(e)=>{
	let messages = []
	if (Email.value===''||Email.value==null){
		messages.push('Email is required')
	}
	if (Password.value===''||Password.value==null){
		messages.push('Password is required')
	}
	
	if(messages.length>0){
		e.preventDefault()
		errorElement.innerText=messages.join(' / ')
	}
})
	
	