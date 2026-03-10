const validateData = (userData) => {
    let errors = [];
    if (!userData.Firstname) {
        errors.push('กรุณากรอกชื่อ');
    }
    if (!userData.Lastname) {
        errors.push('กรุณากรอกนามสกุล');
    }
    if (!userData.Age) {
        errors.push('กรุณากรอกอายุ');
    }
    if (!userData.Gender) {
        errors.push('กรุณาเลือกเพศ');
    }
    if (!userData.Interest) {
        errors.push('กรุณาเลือกความสนใจอย่างน้อย 1 อย่าง');
    }
    if (!userData.Description) {
        errors.push('กรุณากรอกคำอธิบายเกี่ยวกับตัวคุณ');
    }
    return errors;
}

const submitData = async () => {
    let firstNameDOM = document.querySelector('input[name=firstname]');
    let lastNameDOM = document.querySelector('input[name=lastname]');
    let ageDOM = document.querySelector('input[name=age]');
    let genderDOM = document.querySelector('input[name=gender]:checked') || {};
    let interestDOMs = document.querySelectorAll('input[name=interest]:checked') || {};
    let descriptionDOM = document.querySelector('textarea[name=description]');

    let messageDOM = document.getElementById('message')
    try {
        let interest = ''
        for (let i = 0; i < interestDOMs.length; i++) {
            interest += interestDOMs[i].value
            if (i != interestDOMs.length - 1) {
                interest += ','
            }
        }

        let userData = {
            Firstname: firstNameDOM.value,
            Lastname: lastNameDOM.value,
            Age: ageDOM.value,
            Gender: genderDOM.value,
            Description: descriptionDOM.value,
            Interest: interest
        }

        const errors = validateData(userData);
        if (errors.length > 0) {
            //ถ้ามี error 
            throw {
                message: 'กรอกข้อมูลไม่ครบถ้วน',
                errors: errors
            }
        }

        const response = await axios.post('http://localhost:8000/users', userData)
        console.log('response', response.data);
        messageDOM.innerText = 'บันทึกข้อมูลสำเร็จ'
        messageDOM.className = 'message success'

    } catch (error) {
        console.log('error message', error.message);
        console.log('error', error.errors);
        if (error.response) {
            console.log('Error response:', error.response);
            error.message = error.response.data.errors;
            error.errors = error.response.data.errors;
        }

        let htmlData = '<div>'
        htmlData += `<div>${error.message}</div>`
        htmlData += '<ul>'
        for (let i = 0; i < error.errors.length; i++) {
            htmlData += `<li>${error.errors[i]}</li>`
        }
        htmlData += '</ul>'
        htmlData += '</div>'
        messageDOM.innerHTML = htmlData
        messageDOM.className = 'message danger'
    }
}