import { Component, Input, OnInit } from '@angular/core';
import { DrupalService } from '../drupal.service';

@Component({
  selector: 'app-iframes',
  templateUrl: './iframes.component.html',
  styleUrls: ['./iframes.component.css']
})
export class IframesComponent implements OnInit {
  public title: any = [];
  public iframesData: any = [];
 


  constructor(private drupalService: DrupalService) { }

  ngOnInit() {
    
    this.getIframe();
  }

  getIframe()
  {
    this.drupalService.getDrupal()
    .subscribe( (response: any) => {
     this.iframesData = response;
     
      for( let i = 0 ; i< 3; i++)
      {
        this.title[i] = this.iframesData.data[i].title.replace(/['"]+/g, '') ;
        
      }
    });
    
 
  }
  
}
