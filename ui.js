class UI {

    constructor() {

        this.profile = document.getElementById('profile');

    }

    showProfile(user) {

        this.profile.innerHTML = `

          <div class="card card-body mb-3">

            <div class="row">

                <div class="col-md-3"> 
                
                    <img class="img-fluid mb-2" src="${user.avatar_url}">

                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block"> View Profile </a>

                </div>

                <div class="col-md-9"> 
                
                    <span class="">Public Repo's: ${user.public_repos}</span>

                    <span class="">Public Gist's: ${user.public_gists}</span>

                    <span class="">Followers: ${user.followers}</span>

                    <span class="">Following: ${user.following}</span>

                    <br> <br>

                    <ul class="list-group">

                        <li class="list-group-item"> Company: ${user.company} </li>

                        <li class="list-group-item"> Website/Blog: ${user.blog} </li>

                        <li class="list-group-item"> Location: ${user.location} </li>

                        <li class="list-group-item"> Member Since: ${user.created_at} </li>

                    </ul>
                
                </div>

            </div>

          </div>

          <h3 class="page-heading mb-3"> Latest Repo's </h3>

          <div id="repos"> </div>
        `;

    }

    //Show User Repo's
    showRepos(repos) {

        let output = '';

        repos.forEach(function(repo){

            output += `
            
            <div class="card card-body mb-2>

                <div class="row">

                    <div class="col-md-6"> 
                    
                        <a href="${repo.html_url}" target="_blank"> ${repo.name} </a>
                    
                    </div>

                    <div class="col-md-6"> 
                    
                        <span class="">Stars: ${repo.stargazers_count}</span>

                        <span class="">Watchers: ${repo.watchers_count}</span>

                        <span class="">Forks: ${repo.forks_count}</span>
                    
                    </div>

                </div>

            </div>
            
            `;

        });

        //Output Repo's
        document.getElementById('repos').innerHTML = output;

    }

    showAlert(message, className) {

        //Clear Remaining Alerts
        this.clearAlert();

        //Create Div
        const div = document.createElement('div');

        //Adding Classes To Div
        div.className = className;

        //Add Text
        div.appendChild(document.createTextNode(message));

        //Get Parent
        const container = document.querySelector('.searchContainer');

        //Get Search Box
        const search = document.querySelector('.search');

        //Insert Alert 
        container.insertBefore(div, search);

        //Timeout After 3 Secs
        setTimeout(() => {

            this.clearAlert();

        }, 3000);

    }

    //Clear Alert Message
    clearAlert() {

        const currentAlert = document.querySelector('.alert');

        if(currentAlert) {

            currentAlert.remove();

        }

    }

    clearProfile() {

        this.profile.innerHTML = '';

    }

}