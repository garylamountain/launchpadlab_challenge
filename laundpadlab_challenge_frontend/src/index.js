function main(){
    let feed = document.querySelector('main');
    feed.innerHTML = 'HELLO WORLD';
    fetch("https://api.github.com/repos/facebook/react")
    // fetch("https://api.github.com/repos/facebook/react/stats/commit_activity")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
}

main()