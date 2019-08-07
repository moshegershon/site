import { Component, OnInit, HostListener } from '@angular/core';
import { CssSelector } from '@angular/compiler';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  getcolor(color){
    // return 'transparent';
  }
    
  @HostListener('window:scroll', ['$event']) 
    dotheJob(event) {
      this.getcolor('white');
      console.log('scrolled');
    }
}
