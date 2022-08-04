const newStudentBtn = document.getElementById('new-student');
const formContainer = document.querySelector('.form-container');
const formEl = document.querySelector('form');
const closeBtn = document.getElementById('close');
const studentsContainer = document.getElementById('students');

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const newStudentEl = document.createElement('div');
    newStudentEl.classList.add('student');
    newStudentEl.innerHTML = `
        <div class="img">
            <img src="images/${formEl.gender.value}.svg" alt="">
        </div>
        <div class="details">
            <p><strong>Name: </strong>${formEl.name.value}</p>
            <p><strong>Email: </strong>${formEl.email.value}</p>
            <p><strong>Mobile: </strong>${formEl.mobile.value}</p>
            <p><strong>Gender: </strong>${formEl.gender.value}</p>
            <p><strong>Blood group: </strong>${formEl.bloodGroup.value}</p>
        </div>
    `;
    studentsContainer.appendChild(newStudentEl);
    formEl.reset();
    formContainer.style.display = 'none';
});

newStudentBtn.addEventListener('click', () => {
    formContainer.style.display = 'flex';
})

closeBtn.addEventListener('click', () => {
    formEl.reset();
    formContainer.style.display = 'none';
})