import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  @Input() valor: string = '';
  nombre: any = 'Prueba nav';

  constructor(private route: ActivatedRoute) {}

  /*   params = new URLSearchParams(location.search);
  contract = this.params.get('id'); */

  ngOnInit(): void {

    // this.nombre = this.params.get('id')

    /*
   this.route.queryParamMap.subscribe(
      (params: Params) => console.log(params['id'])
    ); */
    this.nombre = this.route.snapshot.paramMap.get('id');
  }
}
