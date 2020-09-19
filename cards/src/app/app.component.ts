import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts= [
  	{ 
  		title: 'Neat Tree',
  		imageUrl: 'assets/tree.jpeg',
  		username: 'nature',
  		content: 'Saw this awesome tree during my hike today.'
  	},
  	{ 
  		title: 'Snowy Mountain',
  		imageUrl: 'assets/mountain.jpeg',
  		username: 'mountainlover',
  		content: 'Here is a picture of a snowy mountain.'
  	},
  	{ 
  		title: 'Mountain Biking',
  		imageUrl: 'assets/biking.jpeg',
  		username: 'biking1234',
  		content: 'I did some biking today.'
  	},
  	{ 
  		title: 'Mountain Biking',
  		imageUrl: 'assets/biking.jpeg',
  		username: 'biking1234',
  		content: 'I did some biking today.'
  	}		
  ];
}
