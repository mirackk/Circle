// src/app/web-vitals.service.ts
import { Injectable } from '@angular/core';
import { onCLS, onFID, onLCP, onINP } from 'web-vitals';

@Injectable({
  providedIn: 'root'
})
export class WebVitalsService {
  constructor() {
    this.initWebVitals();
  }

  private initWebVitals(): void {
    const sendToAnalytics = (metric: any) => {
      console.log(metric);
      // 您可以将数据发送到您的分析服务器
      // fetch('/analytics', { method: 'POST', body: JSON.stringify(metric) });
    };

    onCLS(console.log,{reportAllChanges: true});
    //onFID(console.log,{reportAllChanges: true});
    onLCP(console.log,{reportAllChanges: true});
    onINP(console.log,{reportAllChanges: true}); // 使用 INP 替代 FID
  }
}
