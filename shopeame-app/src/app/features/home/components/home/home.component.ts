import { Imain } from './../../models/imain';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public mainContent: Imain;
  constructor() { 
    this.mainContent = {
      title: 'Bienvenido a Shopéame',
      questions: [
        {
          question: '¿Qué es Shopéame?',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt ante fringilla nibh dignissim, quis bibendum ligula maximus. Nulla ullamcorper maximus diam, quis congue leo pulvinar blandit. Sed ultricies eros vel leo porta varius. Maecenas tempus rutrum fermentum. Morbi dapibus leo quam, et ultricies enim convallis in. Pellentesque eros neque, tempus eget massa facilisis, ornare pulvinar nulla. Nulla non tincidunt augue, eu vestibulum mi. Ut turpis augue, volutpat ut varius a, elementum sagittis lectus. Vestibulum lobortis felis quis risus molestie, vitae consequat odio blandit. Fusce in nisi at quam feugiat convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sit amet turpis quis diam eleifend euismod.'
        },
        {
          question: '¿Para qué puedo usar Shopéame?',
          text: 'Etiam commodo sed neque id gravida. Ut consectetur velit lacus. Aliquam erat volutpat. Nam fringilla, turpis id condimentum convallis, orci ligula ultricies urna, quis venenatis nisi nibh ut turpis. Mauris ultrices dui dui, a feugiat felis tincidunt tincidunt. Nam at dapibus turpis. Ut tincidunt mauris non pharetra tincidunt. Cras pellentesque fringilla nisl ut rutrum. Pellentesque accumsan, mauris sed facilisis ornare, elit lectus condimentum magna, et elementum lacus sem eget nibh. Vestibulum vel finibus leo, ac ornare velit. Mauris pretium orci sit amet est dictum, non vulputate ligula dapibus. Vivamus viverra, enim a vulputate fringilla, quam quam pharetra massa, a ultrices ante justo ac turpis. Proin libero neque, iaculis vel massa vel, malesuada tristique lorem.'
        },
        {
          question: '¿Quiénes hacemos en Shopéame?',
          text: 'Maecenas maximus sed dui ac tristique. Sed varius ex mi, ut tristique augue fringilla a. Nullam nec urna non nisi mattis viverra. Duis eget urna porta, fringilla felis non, consectetur nisl. Maecenas sed tortor ante. Morbi dolor nunc, porttitor at interdum ac, lobortis sed tellus. Quisque vehicula risus nec tempor dapibus. Maecenas sed justo porttitor, varius orci ut, auctor metus. Aliquam nec sapien nisi. Morbi eros purus, bibendum eget ligula et, lacinia ultrices justo. Curabitur massa odio, vulputate sed sem ac, tempor hendrerit felis.'
        },
        {
          question: '¿Es seguro usar Shopéame?',
          text: 'Praesent vitae augue quis enim mollis commodo. Suspendisse potenti. Mauris lacus augue, pharetra nec aliquam pretium, semper ut erat. Donec egestas lorem vel maximus pretium. Aenean dictum condimentum ex id blandit. Morbi blandit quis quam ut blandit. Nulla porttitor facilisis eros at fermentum. Maecenas vulputate facilisis risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut a condimentum lorem. Pellentesque et sapien nunc.'
        }
      ]
    }
  }

  ngOnInit(): void {
  }

}
