// Récupérez les éléments du formulaire
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const messageInput = document.getElementById('message');
const commentList = document.getElementById('comment-list');

// Écoutez l'événement de soumission du formulaire
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Vérifiez si les champs prénom et nom sont remplis
  if (firstNameInput.value.trim() === '' || lastNameInput.value.trim() === '') {
    // Affichez un message d'erreur
    document.getElementById('error-message').style.display = 'block';
    return;
  }

  // Créez un nouvel élément de commentaire
  const commentItem = document.createElement('div');
  commentItem.className = 'flex space-x-4 text-sm text-gray-500';
  commentItem.innerHTML = `
    <div class="flex-1 py-10 border-t border-gray-200">
      <h3 class="font-medium text-gray-900">${firstNameInput.value} ${lastNameInput.value}</h3>
      <div class="prose prose-sm mt-4 max-w-none text-gray-500">
        <p>${messageInput.value}</p>
      </div>
    </div>
  `;

  // Ajoutez le nouvel élément de commentaire à la liste
  commentList.appendChild(commentItem);

  // Effacez les champs du formulaire
  firstNameInput.value = '';
  lastNameInput.value = '';
  messageInput.value = '';

  // Masquez le message d'erreur
  document.getElementById('error-message').style.display = 'none';
});