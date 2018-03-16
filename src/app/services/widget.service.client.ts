import { Widget } from '../models/widget.model.client';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class WidgetService {

  widgets: Widget[] = [
    new Widget('123', 'HEADER', '321', '2', 'GIZMODO' ),
    new Widget('124', 'HEADER', '321', '2', 'GIZMODO' ),
    new Widget('125', 'IMAGE', '321', '2', 'text', '100%', 'http://lorempixel.com/400/200/'),
    new Widget('126', 'HTML', '321', '2', '<p>blalbla</p>' ),
    new Widget('127', 'YOUTUBE', '321', '2', 'text', '100%', '//www.youtube.com/embed/ZpbgzR-2FXo' ),
  ];
  constructor(private http: Http) { }

  baseUrl = environment.baseUrl;

  reorderWidgets(startIndex, endIndex, pageId) {
    return this.http.put(this.baseUrl + '/api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex, '')
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  createWidget(pageId: String, widget: Widget) {
    return this.http.post(this.baseUrl + '/api/page/' + pageId + '/widget', widget)
      .map((res: Response) => {
        return res.json();
      });
  }

  findWidgetsByPageId(pageId: String) {
    return this.http.get(this.baseUrl + '/api/page/' + pageId + '/widget')
      .map((res: Response) => {
        return res.json();
      });
  }
  findWidgetById(widgetId: String) {
    return this.http.get(this.baseUrl + '/api/widget/' + widgetId)
      .map((res: Response) => {
        return res.json();
      });
  }

  updateWidget(widgetId: String, widget: Widget) {
    return this.http.put(this.baseUrl + '/api/widget/' + widgetId, widget)
      .map((res: Response) => {
        return res.json();
      });
  }

  deleteWidget(widgetId: String) {
    return this.http.delete(this.baseUrl + '/api/widget/' + widgetId)
      .map((res: Response) => {
        return res.json();
      });
  }

}