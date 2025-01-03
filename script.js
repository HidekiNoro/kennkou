document.getElementById('content-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const source = document.getElementById('source').value;
    const content = document.getElementById('content').value;

    const articleList = document.getElementById('articles');
    const article = document.createElement('li');
    article.innerHTML = `<h3>${title}</h3><p><strong>資料元:</strong> ${source}</p><p>${content}</p>`;

    articleList.appendChild(article);

    // フォームをリセット
    this.reset();
});
