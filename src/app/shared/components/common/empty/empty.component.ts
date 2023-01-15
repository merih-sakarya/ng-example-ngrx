import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html'
})
export class EmptyComponent implements OnInit {
  @Input() icon = `cloud_off`;
  @Input() description = `No data!`;

  constructor() {}

  ngOnInit(): void {}
}
