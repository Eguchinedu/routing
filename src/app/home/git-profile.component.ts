import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'cw-git-profile',
  templateUrl: './git-profile.component.html',
  styleUrls: ['./git-profile.component.css']
})
export class GitProfileComponent implements OnInit {
profile: any;
  constructor(private profileService: ProfileService){}
  ngOnInit(): void {
    this.profileService.getProfile().subscribe((data) => {this.profile = data}
    )
  }
    }
