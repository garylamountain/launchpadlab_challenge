function main(){

    startFetch();

    let voteBtn = document.querySelector('#vote');

    voteBtn.addEventListener('click', function(){

        if(document.querySelector('select').value != 'none' && validateEmail(document.querySelector('#email').value)){
        let dropdownDiv = document.querySelector('#dropdown');
        dropdownDiv.style.display = 'none';
        fetch('https://launchpadlab-challenge-backend.herokuapp.com/votes')
        .then(res => res.json())
        .then(data => {

            let emails = []
            data.map(vote => {
                emails.push(vote.email);
            })

            if(emails.includes(document.querySelector('#email').value)){
                fetch('https://launchpadlab-challenge-backend.herokuapp.com/frameworks')
                .then(res => res.json())
                .then(data => {
                    let total = data[0].votes + data[1].votes + data[2].votes + data[3].votes;
                    let results = document.querySelector('#results');
                    results.innerHTML = `<div>Sorry, you've already voted!</div> 
                        <div>Current Results:</div>
                        <div>${data[0].name}: ${(data[0].votes/total * 100).toFixed(1)}%</div>
                        <div>${data[1].name}: ${(data[1].votes/total * 100).toFixed(1)}%</div>
                        <div>${data[2].name}: ${(data[2].votes/total * 100).toFixed(1)}%</div>
                        <div>${data[3].name}: ${(data[3].votes/total * 100).toFixed(1)}%</div>
                        `;
                    })
            } else {
                fetch('https://launchpadlab-challenge-backend.herokuapp.com/votes', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "Application/JSON"
                    },
                    body: JSON.stringify({email: document.querySelector('#email').value, framework: document.querySelector('select').value})
                })
                .then(res => res.json())
                .then(data => {
                    let total = data[0].votes + data[1].votes + data[2].votes + data[3].votes;
                    let results = document.querySelector('#results');
                    results.innerHTML = `<div>Thanks for voting!</div> 
                        <div>Results:</div>
                        <div>${data[0].name}: ${(data[0].votes/total * 100).toFixed(1)}%</div>
                        <div>${data[1].name}: ${(data[1].votes/total * 100).toFixed(1)}%</div>
                        <div>${data[2].name}: ${(data[2].votes/total * 100).toFixed(1)}%</div>
                        <div>${data[3].name}: ${(data[3].votes/total * 100).toFixed(1)}%</div>
                        `;
                    })
            }
            
        })
        .catch(error => console.error(error));
    } else if(document.querySelector('select').value == 'none'){
        let email = document.querySelector('#prompt');
        email.innerHTML = 'Please select a framework.'
    } else {
        let email = document.querySelector('#prompt');
        email.innerHTML = 'Please enter a valid email address.'
    }
    })

}

function fetchData(){

    fetch("https://api.github.com/repos/facebook/react")
    .then(res => res.json())
    .then(data => {
        let stars = document.querySelector('#react-stars');
        let forks = document.querySelector('#react-forks');
        stars.innerHTML = data.stargazers_count;
        forks.innerHTML = data.forks_count;
    })
    .catch(error => console.error(error));
    fetch("https://api.github.com/repos/facebook/react/stats/commit_activity")
    .then(res => res.json())
    .then(data => {
        let week = document.querySelector('#react-week');
        let month = document.querySelector('#react-month');
        let year = document.querySelector('#react-year');
        week.innerHTML = data[0].total;
        month.innerHTML = data[0].total + data[1].total + data[2].total + data[3].total;
        let i = 0;
        data.map(week => {
            i += week.total;
        })
        year.innerHTML = i;
    })
    .catch(error => console.error(error));
    ///////////////////////////////////////////////////////////////////////////////////////
    fetch("https://api.github.com/repos/angular/angular.js")
    .then(res => res.json())
    .then(data => {
        let stars = document.querySelector('#ng-stars');
        let forks = document.querySelector('#ng-forks');
        stars.innerHTML = data.stargazers_count;
        forks.innerHTML = data.forks_count;
    })
    .catch(error => console.error(error));
    fetch("https://api.github.com/repos/angular/angular.js/stats/commit_activity")
    .then(res => res.json())
    .then(data => {
        let week = document.querySelector('#ng-week');
        let month = document.querySelector('#ng-month');
        let year = document.querySelector('#ng-year');
        week.innerHTML = data[0].total;
        month.innerHTML = data[0].total + data[1].total + data[2].total + data[3].total;
        let i = 0;
        data.map(week => {
            i += week.total;
        })
        year.innerHTML = i;
    })
    .catch(error => console.error(error));
    ///////////////////////////////////////////////////////////////////////////////////////
    fetch("https://api.github.com/repos/emberjs/ember.js")
    .then(res => res.json())
    .then(data => {
        let stars = document.querySelector('#ember-stars');
        let forks = document.querySelector('#ember-forks');
        stars.innerHTML = data.stargazers_count;
        forks.innerHTML = data.forks_count;
    })
    .catch(error => console.error(error));
    fetch("https://api.github.com/repos/emberjs/ember.js/stats/commit_activity")
    .then(res => res.json())
    .then(data => {
        let week = document.querySelector('#ember-week');
        let month = document.querySelector('#ember-month');
        let year = document.querySelector('#ember-year');
        week.innerHTML = data[0].total;
        month.innerHTML = data[0].total + data[1].total + data[2].total + data[3].total;
        let i = 0;
        data.map(week => {
            i += week.total;
        })
        year.innerHTML = i;
    })
    .catch(error => console.error(error));
    ///////////////////////////////////////////////////////////////////////////////////////
    fetch("https://api.github.com/repos/vuejs/vue")
    .then(res => res.json())
    .then(data => {
        let stars = document.querySelector('#vue-stars');
        let forks = document.querySelector('#vue-forks');
        stars.innerHTML = data.stargazers_count;
        forks.innerHTML = data.forks_count;
    })
    .catch(error => console.error(error));
    fetch("https://api.github.com/repos/vuejs/vue/stats/commit_activity")
    .then(res => res.json())
    .then(data => {
        let week = document.querySelector('#vue-week');
        let month = document.querySelector('#vue-month');
        let year = document.querySelector('#vue-year');
        week.innerHTML = data[0].total;
        month.innerHTML = data[0].total + data[1].total + data[2].total + data[3].total;
        let i = 0;
        data.map(week => {
            i += week.total;
        })
        year.innerHTML = i;
    })
    .catch(error => console.error(error));
}

function startFetch(){
    fetchData();
    setInterval(fetchData, 30000);
}

function validateEmail(email) 
{
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}

main();