import { Calculator } from './calculator';
import { Component, OnInit } from '@angular/core';
import { PostService } from './shared/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

 public title = 'unitTest';
 public data: any;

  constructor(private dataApi: PostService){

  }

  ngOnInit(){
    this.getDataApi();
    }

 private getDataApi(){
    this.dataApi.getPosts().subscribe(res => {
      console.log('res', res);
      this.data = res;
    });
  }
}
