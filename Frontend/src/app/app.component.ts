import { Component } from '@angular/core';
import {SplitButtonModule} from 'primeng/splitbutton';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuItem} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {PaginatorModule} from 'primeng/paginator';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Service online de ventesécurisée de TW Micronics';
  items1: MenuItem[];
  items2: MenuItem[];
  items3: MenuItem[];

  constructor() {
     this.items1 = [];
     this.items2 = [];
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
                label: 'File',
                icon: 'fa fa-fw fa-file-o',
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
                label: 'Edit',
                icon: 'fa fa-fw fa-edit',
                items: [
                    {label: 'Undo', icon: 'fa fa-fw fa-mail-forward'},
                    {label: 'Redo', icon: 'fa fa-fw fa-mail-reply'}
                ]
            },
            {
                label: 'Help',
                icon: 'fa fa-fw fa-question',
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
                label: 'Actions',
                icon: 'fa fa-fw fa-gear',
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

        this.items3 = [
            {label: 'sort ascending price', icon: 'fa fa-sort-asc', command: () => {
                this.english();
            }},
            {label: 'sort descending price', icon: 'fa fa-sort-desc', command: () => {
                this.french();
            }},
            {label: 'Name - A to Z', icon: 'fa fa-sort-alpha-asc', command: () => {
                this.english();
            }},
            {label: 'Name - Z to A', icon: 'fa fa-sort-alpha-desc', command: () => {
                this.french();
            }}
        ];
  }

  english(){}

  french(){}

  paginate(event) {
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
  }
}
