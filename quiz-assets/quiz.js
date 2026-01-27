document.addEventListener('DOMContentLoaded', () => {
    // Game State
    let questions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let streak = 0;
    let bestStreak = 0;
    let isAnswering = false;

    // DOM Elements
    const screens = {
        start: document.getElementById('startScreen'),
        question: document.getElementById('questionScreen'),
        result: document.getElementById('resultScreen')
    };

    const ui = {
        questionText: document.getElementById('questionText'),
        optionsContainer: document.getElementById('optionsContainer'),
        questionCount: document.getElementById('questionCount'),
        progressBar: document.getElementById('progressBar'),
        streakCounter: document.getElementById('streakCounter'),
        streakValue: document.getElementById('streakValue'),
        finalScore: document.getElementById('finalScore'),
        bestStreakResult: document.getElementById('bestStreak'),
        resultTitle: document.getElementById('resultTitle'),
        resultMessage: document.getElementById('resultMessage')
    };

    // Buttons
    document.getElementById('startBtn').addEventListener('click', startGame);
    document.getElementById('restartBtn').addEventListener('click', startGame);
    document.getElementById('homeBtn').addEventListener('click', () => {
        switchScreen('start');
    });

    // Initialize
    fetchQuestions();

    async function fetchQuestions() {
        try {
            const response = await fetch('quiz-assets/questions.json');
            const data = await response.json();
            // Shuffle questions for randomness each load, or just keep full set
            // For now, we load them all. We will shuffle order in startGame.
            questions = data;
        } catch (error) {
            console.error('Error loading questions:', error);
            ui.questionText.textContent = "Error loading questions. Please ensure questions.json exists.";
        }
    }

    function startGame() {
        // Reset State
        currentQuestionIndex = 0;
        score = 0;
        streak = 0;
        bestStreak = 0;
        updateStreakDisplay();

        // Shuffle Questions
        shuffleArray(questions);

        // UI Reset
        switchScreen('question');
        showQuestion();
    }

    function showQuestion() {
        isAnswering = false;
        const q = questions[currentQuestionIndex];

        // Update UI Text
        ui.questionText.textContent = q.question;
        ui.questionCount.textContent = `Question ${currentQuestionIndex + 1}/${questions.length}`;

        // Update Progress Bar
        const progress = ((currentQuestionIndex) / questions.length) * 100;
        ui.progressBar.style.width = `${progress}%`;

        // Render Options
        ui.optionsContainer.innerHTML = '';

        // Create a copy of options to shuffle display order if desired, 
        // but typically index mapping matters for 'correctAnswer'. 
        // The JSON schema uses 1-based index or 0-based? Let's check schema.
        // Schema: "correctAnswer": 1 (which usually implies the first option, or 1-based index?)
        // Let's assume 1-based index from the JSON example (1 = first option).

        q.options.forEach((opt, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt;
            // storing 1-based index
            btn.dataset.index = index + 1;

            btn.addEventListener('click', (e) => handleAnswer(e, q.correctAnswer));
            ui.optionsContainer.appendChild(btn);
        });
    }

    function handleAnswer(e, correctIndex) {
        if (isAnswering) return;
        isAnswering = true;

        const selectedBtn = e.target;
        const selectedIndex = parseInt(selectedBtn.dataset.index);

        // Reveal logic
        const buttons = ui.optionsContainer.querySelectorAll('.option-btn');

        if (selectedIndex === correctIndex) {
            // Correct
            selectedBtn.classList.add('correct');
            score++;
            streak++;
            if (streak > bestStreak) bestStreak = streak;

            // Streak Check for fireworks
            checkStreakRewards();
        } else {
            // Incorrect
            selectedBtn.classList.add('incorrect');
            streak = 0; // Reset streak

            // Highlight the correct one
            buttons.forEach(btn => {
                if (parseInt(btn.dataset.index) === correctIndex) {
                    btn.classList.add('correct');
                }
            });
        }

        updateStreakDisplay();

        // Next Question Delay
        setTimeout(() => {
            nextQuestion();
        }, 1500);
    }

    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            endGame();
        }
    }

    function endGame() {
        ui.finalScore.textContent = `${score}/${questions.length}`;
        ui.bestStreakResult.textContent = bestStreak;

        // Dynamic messaging
        const percentage = (score / questions.length) * 100;
        if (percentage === 100) {
            ui.resultTitle.textContent = "Perfection! 🌟";
            ui.resultMessage.textContent = "You are a ChiroHD Master.";
            fireworks();
        } else if (percentage >= 80) {
            ui.resultTitle.textContent = "Great Job! 👏";
            ui.resultMessage.textContent = "You really know your stuff.";
        } else {
            ui.resultTitle.textContent = "Good Effort! 👍";
            ui.resultMessage.textContent = "Review the materials and try again!";
        }

        switchScreen('result');
        ui.progressBar.style.width = '100%';
    }

    function updateStreakDisplay() {
        ui.streakValue.textContent = streak;
        if (streak > 0) {
            ui.streakCounter.classList.remove('hidden');
            ui.streakCounter.classList.add('pulse');
            setTimeout(() => ui.streakCounter.classList.remove('pulse'), 300);
        } else {
            ui.streakCounter.classList.add('hidden');
        }
    }

    function checkStreakRewards() {
        if (streak === 3) {
            fireworks();
        }
        if (streak > 3 && streak % 5 === 0) {
            // Every 5 after 3
            fireworks();
        }
    }

    function switchScreen(screenName) {
        Object.values(screens).forEach(screen => screen.classList.remove('active'));
        screens[screenName].classList.add('active');
    }

    function fireworks() {
        // Simple confetti burst
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#7C3AED', '#00AEEF', '#FFC107'] // Brand colors
        });
    }

    // Utility: FY Shuffle
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
});
