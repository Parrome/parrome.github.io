let arr = [];
for (let i = 0; i < 5; i++) {
    arr[i] = prompt('Значения массива');
    console.log(arr[i]);
}

let nam = prompt('Введите имя пользователя');
console.log(nam);

let result = 0;
for (let i = 0; i < 5; i++) {
    if (nam == arr[i]) { result += 1; }
    else {}
}

if (result > 0) {
    alert(`${nam}, вы успешно вошли !`);
}
    else { alert('Ошибка, неверное имя пользователя'); }