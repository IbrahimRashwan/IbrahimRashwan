import { Component, Input, OnInit ,ViewEncapsulation} from '@angular/core';
import { ALUserService } from '../aluser.service';
import { ALUserModelGet } from '../aluser.model';

@Component({
  selector: 'app-aluser-delete',
  templateUrl: './aluser-delete.component.html',
  styleUrls: ['./aluser-delete.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ALUserDeleteComponent implements OnInit {
  @Input('row') row:ALUserModelGet;
  @Input('modal') modal;

  constructor(private ALUserService: ALUserService) { }

  ngOnInit(): void {
  }
  deleteById(){
    this.ALUserService.deleteById(this.row?._id).subscribe(row => {
      console.log('success')
    },error=>{
      console.log(error);
    },()=>{

    })
  }
  
}
