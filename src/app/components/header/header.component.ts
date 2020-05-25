import { Component, OnInit, HostListener } from '@angular/core';
import { CssSelector } from '@angular/compiler';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navBackground: string;
  

  constructor() { 
    this.navBackground = 'transparent';
    
  }

  ngOnInit() {
  }
  getcolor(color){
    // return 'transparent';
  }
    
  @HostListener('window:scroll', ['$event']) 
    dotheJob(event) {
      console.log('event', event.path[1].pageYOffset > 85);
      if(event.path[1].pageYOffset > 85){
        this.navBackground = '#ffff';
       
      }
      else{
        this.navBackground = 'transparent';
      }
    }
}
