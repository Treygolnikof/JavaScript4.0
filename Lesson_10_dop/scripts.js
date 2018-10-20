let phonenumber = document.getElementById('phonenumber');

phonenumber.addEventListener('keyup', function() {
    phonenumber.maxLength = 16;
    phonenumber.value = phonenumber.value.replace(/\D/g, "");
    phonenumber.value = phonenumber.value.replace(/^(\d)(\d{3})(\d)/g, "$1 ($2) $3");
    phonenumber.value = phonenumber.value.replace(/(\d{3})(\d)/, "$1-$2");
});