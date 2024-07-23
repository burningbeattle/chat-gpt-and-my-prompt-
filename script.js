function toggleHabit(habitId) {
    const habitCard = document.getElementById(habitId);
    habitCard.classList.toggle('done');
}
function addHabit() {
    const habitName = document.getElementById('new-habit').value.trim();
    if (habitName === '') return;

    const habitList = document.getElementById('habit-list');

    const habitCard = document.createElement('div');
    habitCard.className = 'card';
    habitCard.id = habitName.toLowerCase().replace(/\s+/g, '-');

    const habitTitle = document.createElement('h2');
    habitTitle.textContent = habitName;

    const habitButton = document.createElement('button');
    habitButton.textContent = 'Mark as Done';
    habitButton.onclick = function() {
        habitCard.classList.toggle('done');
    };

    habitCard.appendChild(habitTitle);
    habitCard.appendChild(habitButton);
    habitList.appendChild(habitCard);

    document.getElementById('new-habit').value = '';
}
