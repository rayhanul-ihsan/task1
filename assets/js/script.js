function getdata() {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phone = document.getElementById("phone").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value

    if(name == ""){
        return alert("Nama harus di isi")
    } else if(email == ""){
        return alert("Email harus di isi")
    } else if(phone == ""){
        return alert("phone number harus di isi")
    } else if(subject == ""){
        return alert("Subject harus di isi")
    } else if(message == ""){
        return alert("your message harus di isi")
    }

    const emailReceiver = "mrayhanulihsan@gmail.com"
    let a = document.createElement("a")
    a.href = `mailto:${emailReceiver}?subject=${subject}&body= hi nama saya
    ${name} , jika anda berkenan bisa hubungi saya ${phone} untuk membahas project ${message}`
    a.click()

    let data = {
        name,
        email,
        phone,
        subject,
        message
    }

    console.log(data)
}



