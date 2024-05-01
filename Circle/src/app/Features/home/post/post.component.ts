import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient } from "@angular/common/http";

// mat SVG icon
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass'],
})
export class PostComponent {

  postContent: string = '';
  panelOpenState: boolean = false;
  files: File[] = [];
  subscription?: Subscription[] = []; // Store the subscriptions in a list

  constructor (
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.matIconRegistry.addSvgIcon('add-box-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/add_box.svg'));
    this.matIconRegistry.addSvgIcon('attach-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/attach.svg'));
  }

  post() {
    return;
  }

  onChange(event: any) {
    const files = event.target.files;
    if (files) {
      this.files = files
    }
  }

  ngOnDestory() {
    // Unsubscribing
    this.subscription?.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
