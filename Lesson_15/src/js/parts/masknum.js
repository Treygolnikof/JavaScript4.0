function maskNum() {
    let numMainForm = document.getElementsByClassName('popup-form__input')[0];

    numMainForm.addEventListener('keyup', function() {
        numMainForm.maxLength = 17;
        numMainForm.value = numMainForm.value.replace('+7', "");
        numMainForm.value = numMainForm.value.replace(/\D/g, "");
        numMainForm.value = numMainForm.value.replace(/^(\d{3})(\d)/g, "($1) $2");
        numMainForm.value = '+7 ' + numMainForm.value.replace(/(\d{3})(\d)/, "$1-$2");
    });

    let numSecForm = document.getElementsByClassName('second-form__input')[0];

    numSecForm.addEventListener('keyup', function() {
        numSecForm.maxLength = 17;
        numSecForm.value = numSecForm.value.replace('+7', "");
        numSecForm.value = numSecForm.value.replace(/\D/g, "");
        numSecForm.value = numSecForm.value.replace(/^(\d{3})(\d)/g, "($1) $2");
        numSecForm.value = '+7 ' + numSecForm.value.replace(/(\d{3})(\d)/, "$1-$2");
    });
}

export default maskNum;