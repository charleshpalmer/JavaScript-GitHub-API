class GitHub {

    constructor() {

        this.client_id = '6e3cd59296f0e002d114';

        this.client_secret = 'ced5d79154c56797ea392db80672b3f659abc811';

        this.repos_count = 5;

        this.repos_sort = 'created: asc';

    }

    async getUser(user) {

        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

        return {

            profile,
            repos

        }

    }

}

                                                                                                