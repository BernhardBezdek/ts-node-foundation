import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ContentService} from "../../services/content.service";

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ContentComponent implements OnInit {


    public contents: any;
    public topic: string;
    public content: string;


    constructor(private contentsService: ContentService) {
    }

    ngOnInit() {
        this
            .contentsService
            .getContents()
            .subscribe((contents) => {
                this.contents = contents;

                Object
                    .keys(contents)
                    .some((contentName) => {
                        if (!contents[contentName].default) {
                            return false;
                        }

                        this.content = contents[contentName].content;
                        this.topic = contents[contentName].topic;

                    });
            });
    }
}