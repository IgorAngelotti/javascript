const form = document.querySelector('form');
const submitBtn = document.querySelector('#submit-btn');

submitBtn.addEventListener('click', function(e) {
	e.preventDefault();
	
	const username = document.querySelector('#username').value;
	const password = document.querySelector('#password').value;

	if (username === '' || password === '') {
		alert('Por favor, preencha todos os campos!');
	} else {
		// Fazer requisição para API ou validar informações localmente
		alert(`Usuário ${username} logado com sucesso!`);
	}
});