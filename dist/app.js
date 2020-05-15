const nameForm = document.querySelector('.name-input'),
      subjectForm = document.querySelector('.subject-input'),
      phoneForm = document.querySelector('.phone-input'),
      emailForm = document.querySelector('.email-input'),
      messageForm = document.querySelector('.text-message');

class Info {
    constructor(name, subject, phone, email, message) {
        this.name = name;
        this.subject = subject;
        this.phone = phone;
        this.email = email;
        this. message = message;
    }
}


class SS {
    static getInfo() {
        let infos;
        if(sessionStorage.getItem('infos') === null) {
            infos = [];
        } else {
            infos = JSON.parse(sessionStorage.getItem('infos'))
        }
        return infos;
    }

    static addInfo(info) {
        let infos = SS.getInfo();
        infos.push(info);
        sessionStorage.setItem('infos', JSON.stringify(infos));
    }

    static displayInfo() {
        let infos = SS.getInfo();
        infos.forEach(function(info) {
            nameForm.value = info.name;
            subjectForm.value = info.subject;
            phoneForm.value = info.phone;
            emailForm.value = info.email;
            messageForm.value = info.message;
        })
    }
}

SS.displayInfo();

document.querySelector('.catch-btn').addEventListener('click', function(e) {
    const info = new Info(nameForm.value, subjectForm.value, phoneForm.value, emailForm.value, messageForm.value);
    SS.addInfo(info);
})