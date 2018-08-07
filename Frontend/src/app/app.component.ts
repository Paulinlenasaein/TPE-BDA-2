import { Component } from '@angular/core';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuItem} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

import { UtilService } from './services/util.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UtilService],
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('goals', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])
  ]
})
export class AppComponent {
  title = 'Service online de ventesécurisée de TW Micronics';
  items1: MenuItem[];
  items2: MenuItem[];
  display: boolean = false;

  constructor(private utilService: UtilService) {
    this.items1 = [];
    this.items2 = [];
   }

  ngOnInit() {
    this.items1 = [
        {label: 'Englais', icon: 'fa fa-flag', command: () => {
            this.english();
        }},
        {label: 'Français', icon: 'fa fa-flag-checkered', command: () => {
            this.french();
        }}
    ];

    this.items2 = [
            {
                label: 'SOFTWARE & CLOUD',
                icon: 'fa fa-fw fa-cloud',
                items: [{
                        label: 'New',
                        icon: 'fa fa-fw fa-plus',
                        items: [
                            {label: 'Project', icon: 'fa fa-fw fa-lock'},
                            {label: 'Other', icon: 'fa fa-fw fa-list'}
                        ]
                    },
                    {label: 'Open', icon: 'fa fa-fw fa-external-link'},
                    {separator: true},
                    {label: 'Quit', icon: 'fa fa-fw fa-close'}
                ], command: () => {
                    console.log("Hello");
                }
            },
            {
                label: 'TRAINING AND CERTIFICATIONS',
                icon: 'fa fa-fw fa-certificate',
                items: [
                    {label: 'Undo', icon: 'fa fa-fw fa-mail-forward'},
                    {label: 'Redo', icon: 'fa fa-fw fa-mail-reply'}
                ]
            },
            {
                label: 'DIGITAL MARKETING',
                icon: 'fa fa-fw fa-bookmark',
                items: [
                    {
                        label: 'Contents',
                        icon: 'fa fa-fw fa-bars'
                    },
                    {
                        label: 'Search',
                        icon: 'fa fa-fw fa-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File',
                                icon: 'fa fa-fw fa-file',
                            }
                    ]}
                ]
            },
            {
                label: 'INTERNET OF THINGS',
                icon: 'fa fa-fw fa-internet-explorer',
                items: [
                    {
                        label: 'Edit',
                        icon: 'fa fa-fw fa-refresh',
                        items: [
                            {label: 'Save', icon: 'fa fa-fw fa-save'},
                            {label: 'Update', icon: 'fa fa-fw fa-save'},
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'fa fa-fw fa-phone',
                        items: [
                            {label: 'Delete', icon: 'fa fa-fw fa-minus'}
                        ]
                    }
                ]
            }
        ];
  }

  english(){}

  french(){}

}
