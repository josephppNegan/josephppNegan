document.addEventListener("DOMContentLoaded", function () {
    const postButton = document.getElementById("postButton");
    const postInput = document.getElementById("postInput");
    const postsContainer = document.getElementById("postsContainer");

    postButton.addEventListener("click", function () {
        const text = postInput.value.trim();
        if (text !== "") {
            const postElement = document.createElement("div");
            postElement.classList.add("post");
            postElement.innerHTML = `<p>${text}</p>`;
            postsContainer.prepend(postElement);
            postInput.value = ""; // Limpiar el área de texto después de publicar
        } else {
            alert("Escribe algo antes de publicar.");
        }
    });
});
