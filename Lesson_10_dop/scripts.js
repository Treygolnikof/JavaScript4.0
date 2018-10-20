let phonenumber = document.getElementById('phonenumber');

phonenumber.addEventListener('keyup', function() {
    phonenumber.maxLength = 17;
    phonenumber.value = phonenumber.value.replace('+7', "");
    phonenumber.value = phonenumber.value.replace(/\D/g, "");
    phonenumber.value = phonenumber.value.replace(/^(\d{3})(\d)/g, "($1) $2");
    phonenumber.value = '+7 ' + phonenumber.value.replace(/(\d{3})(\d)/, "$1-$2");
});
