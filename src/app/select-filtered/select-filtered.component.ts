import { Input, Output, Component, EventEmitter } from '@angular/core';
import { FormControl,Validator, Validators } from '@angular/forms';
import { map, startWith, Observable } from 'rxjs';

@Component({
  selector: 'app-select-filtered',
  templateUrl: './select-filtered.component.html',
  styleUrls: ['./select-filtered.component.scss'],
})
export class SelectFilteredComponent {
  @Input() options!: string[];
  @Input() placeholderText!: string;
  @Input() class!:string;
  @Output() selectedOption = new EventEmitter<string>();


  filteredOptions!: Observable<string[]>;
  myControl: FormControl = new FormControl('');
  

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((val) => this.filter(val))
    );
    
  }

  filter(val: string): string[] {
    //send if the entry is in the options
    if(this.options.includes(val)){
      this.selectedOption.emit( val);
    }
    //filter the option showed on the UI by the regex in val
    return this.options.filter((option) => option.match(val));
    
  }

}
