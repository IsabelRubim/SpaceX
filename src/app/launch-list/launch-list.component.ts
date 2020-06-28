import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { map } from 'rxjs/operators';

import { PastLaunchesListGQL } from '../services/spacexGraphql.service';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchListComponent implements OnInit {

  constructor(private pastLaunchsService: PastLaunchesListGQL) { }

  pastLaunches$ = this.pastLaunchsService
    .fetch({ limit: 30 })
    .pipe(
      map(
        res => res.data.launchesPast
      )
    );

  ngOnInit() {
  }

}
