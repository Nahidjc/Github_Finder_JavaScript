class UI {

    constructor() {
        this.profile = document.querySelector('#profile');

    }
    showProfile(user) {
        this.clearAlert();
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
  <div class="row">
    <div class="col-md-3">
      <img class="img-fluid mb-2" src="${user.avatar_url}" />
      <a
        href="${user.html_url}"
        target="_blank"
        class="btn btn-primary btn-block mb-4"
        >View Profile</a
      >
    </div>
    <div class="col-md-9">
      <span class="badge badge-primary"
        >Public Repos: ${user.public_repos}</span
      >
      <span class="badge badge-secondary"
        >Public Gists: ${user.public_gists}</span
      >
      <span class="badge badge-success">Followers: ${user.followers}</span>
      <span class="badge badge-info">Following: ${user.following}</span>
      <br /><br />
      <ul class="list-group">
        <li class="list-group-item bg-info font-weight-bold text-white">
          Name : ${user.name}
        </li>
        <li class="list-group-item">Company: ${user.company}</li>
        <li class="list-group-item">Website/Blog: ${user.blog}</li>
        <li class="list-group-item">Location: ${user.location}</li>
        <li class="list-group-item">Member Since: ${user.created_at}</li>
      </ul>
    </div>
  </div>
</div>
<div class="container">
  <div class="search card card-body">
    <div class="row">
      <div class="col">
        <div class="bg-info font-weight-bold text-white text-center p-2">
          Repositoy list ${user.name}
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <table class="table table-sm">
          <thead>
            <tr class="table-active text-center">
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
</div>  `;

    }
    clearProfile() {
        this.profile.innerHTML = "";
    }
    showAlert(message, className) {
        this.clearAlert();
        this.clearProfile();
        let div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector('.searchContainer');
        let search = document.querySelector('.search');
        container.insertBefore(div, search);
    }
    clearAlert() {
        let currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }

    }


}