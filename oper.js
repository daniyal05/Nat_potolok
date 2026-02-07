const TOKEN = "7878735396:AAFcafREplyEd80GN9jxM4n84GP5n2KGcPk";
const CHAT_ID = "-1002811449230";
const URL_API =`https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

    let message = 'Заявка с сайта\n' + 'Имя: ' + this.name.value + '\n' + 'Телефон: ' + this.phone.value + '\n' + 'Сообщение: ' + this.text.value;

    axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then((response) => {
        // сообщение доставлено
        alert('Ваша заявка отправлена')
    })
    .catch((err) => {
        // сообщение не дошло   
        alert('Ошибка при отправке заявки')
        console.warn(err)
    })
    .finally(() => {
        console.log('script completed successfully')
    })
})
