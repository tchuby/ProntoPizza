document.addEventListener("DOMContentLoaded", () => {
    let steps = document.querySelectorAll(".step");

    steps.forEach(step => {
        step.addEventListener("click", () => {
            // Remove a classe selecionada de todos os steps
            steps.forEach(s => s.classList.remove("step-selected"));
            
            // Adiciona a classe selecionada ao step clicado
            step.classList.add("step-selected");
        });
    });
});
