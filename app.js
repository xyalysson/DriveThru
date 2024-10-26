const firebaseConfig = {
    apiKey: "AIzaSyAbeXTxI6EDqCaziRTblPKJM10TC2OHlRU",
    authDomain: "drivethruapp-d3586.firebaseapp.com",
    projectId: "drivethruapp-d3586",
    storageBucket: "drivethruapp-d3586.appspot.com",
    messagingSenderId: "509426472533",
    appId: "1:509426472533:web:6e037dcf5fe5a644b826dc",
    measurementId: "G-W7ZHHGBQ1F"
};

firebase.initializeApp(firebaseConfig);

let selectedFood = '';
let selectedDrink = '';

function selectOption(option, type) {
    if (type === 'food') {
        selectedFood = option;
        alert(`Você escolheu: ${selectedFood}`);
    } else if (type === 'drink') {
        selectedDrink = option;
        alert(`Você escolheu: ${selectedDrink}`);
    }
}

function submitOrder() {
    if (selectedFood && selectedDrink) {
        alert(`Seu pedido: ${selectedFood} e ${selectedDrink}.`);
        // Aqui você pode adicionar o código para enviar a notificação para o Firebase
    } else {
        alert("Por favor, selecione uma comida e uma bebida.");
    }
}
