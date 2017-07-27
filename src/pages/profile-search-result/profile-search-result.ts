import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { GitHubService } from '../../providers/git-hub-service/git-hub.service';
import { User } from "../../models/user.interface";
import { Repository } from "../../models/repository.interface";

@IonicPage({
  segment: 'profile/:username'
})
@Component({
  selector: 'page-profile-search-result',
  templateUrl: 'profile-search-result.html',
})
export class ProfileSearchResultPage {

  username: string;
  user: User;
  repos: Repository[];

  constructor(private navParams: NavParams, private gitHubService: GitHubService) {

  }

  ionViewWillLoad() {
    this.username = this.navParams.get('username');
    if (this.username) {
      this.getUserInformation();
    }
  }

  getUserInformation(): void {
    this.gitHubService.getUserInformation(this.username).subscribe((data: User) => {
      this.user = data;
    });
    this.gitHubService.getUserRepositories(this.username).subscribe((data: Repository[]) => {
      this.repos = data;
    })
  }

}
