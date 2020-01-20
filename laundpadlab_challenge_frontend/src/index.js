function main(){

    fetchData();

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

main();