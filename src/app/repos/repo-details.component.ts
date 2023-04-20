import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepoService } from './repo.service';

@Component({
  selector: 'cw-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css'],
})
export class RepoDetailsComponent implements OnInit {
  currentRepo: any[] = [];
  name: string = '';
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private repoService: RepoService
  ) {}
  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.name = this.route.snapshot.params['id'];
    this.repoService.getRepo(id).subscribe({
      next: (data: any) => {
        this.currentRepo = data;
      },
      error: (err) => (this.errorMessage = err),
    });
  }
}
