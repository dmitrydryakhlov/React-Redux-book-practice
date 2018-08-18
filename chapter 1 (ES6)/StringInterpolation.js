let firstName = 'Dryakhlov'
let lastName = 'Dmitry'
let middleName = 'Alexandrovich'


console.log(`${firstName} ${lastName} ${middleName}`)

let article = {
    title: 'My first post',
    body: 'I learn ES6'
}

document.body.innerHTML = `
<section>
    <header>
        <h1> The HTML5 Blog <h2>
    </header>
    <article>
        <h2>${article.title}</h2>
        ${article.body}
    <article>
    <footer>
        <p>copyright ${new Date().getFullYear()} | The HTML5 Blog</p>    
    </footer>
</section>
`